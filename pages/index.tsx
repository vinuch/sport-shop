import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../components/DefaultLayout'
import { ReactNode } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      Hello world
    </div>
  )
}
Home.displayName = 'Home';

