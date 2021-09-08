import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import ProductItem from './ProductItem'
const Container = styled.div`
  padding: 3rem 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 30px;
`

const Button = styled.button`
  width: 100%;
  border: 1px solid #DEDEDE;
  background-color: transparent;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.08px;
  cursor: pointer;
  margin: 1rem 0;
`

export default function ProductSamples() {
  return (
    <Container>
      <Subtitle>Selling Fast</Subtitle>

      <ItemContainer>
        {
          [1,2,3,4,5,6,7,8].map(item => (
            <ProductItem key={item} />            
          ))
        }
      </ItemContainer>
      <Button>See All Products</Button>

    </Container>
  )
}
