import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function DefaultLayou({children}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
