import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'
import DefaultLayout from '../components/DefaultLayout'

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  // layout?: ComponentType
}

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <DefaultLayout>
      {getLayout(<Component {...pageProps} />)}
    </DefaultLayout>
  )
}
export default MyApp
