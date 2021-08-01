import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  background-color: #F3F3F3;
  padding: .8rem 2rem;
  overflow-x: scroll;

  ul {
    display: flex;

    li {
      margin: 0 .7rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
export default function CategoryBySport() {
  return (
    <Container>
      <ul>
        <li>New In</li>
        <li>Football</li>
        <li>Basketball</li>
        <li>Badminton</li>
        <li>Rugby</li>
        <li>Tennis</li>
        <li>Hockey</li>
        <li>Lifestyle</li>
        <li>American Football</li>
        <li>Sales</li>
      </ul>
    </Container>
  )
}
