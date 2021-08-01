import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../components/DefaultLayout'
import ProductSamples from '../components/ProductSamples'
import NewReleases from '../components/NewReleases'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem 4rem;
`
const Label = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #fff;
  width: 18rem;
`
export default function Home() {
  return (
    <Container style={{}}>
      <div style={{position:'relative'}}>
        <Image src="/banner.png" alt="me" quality="80" width="1300" height="675" objectFit="cover" objectPosition="center" />
        <Label>
          <h4>Sweat-Wicking Performance</h4>
          <p>With a cropped silhouette for modern comfort that&apos;s made to move. </p>
        </Label>
      </div>

      <ProductSamples />
      <NewReleases />
    </Container>
  )
}
Home.displayName = 'Home';

