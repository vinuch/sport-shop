import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import CategoryBySport from './CategoryBySport'

export default function DefaultLayou({children}) {
  return (
    <>
      <Navbar />
      <CategoryBySport />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
