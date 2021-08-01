import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
const Subtitle = styled.div`
  font-weight: 500;
  font-size: 30px;
`
export default function NewReleases() {
  return (
    <div>
      <Subtitle>New Releases</Subtitle>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0'}}>
        <Image src="/1.png" alt="me" quality="80" width="620" height="727" objectFit="cover" objectPosition="center" />
        <Image src="/2.png" alt="me" quality="80" width="620" height="727" objectFit="cover" objectPosition="center" />
      </div>
    </div>
  )
}
