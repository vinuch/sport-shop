import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { useRouter } from 'next/router'

const Container = styled.div`
  background-color: #F3F3F3;
  padding: 0rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 4.5rem;
  

  ul {
    display: flex;


  }

  @media only screen and (max-width: 600px) {

    overflow-x: scroll;

}

`
const ListItem = styled.li`
      margin: 0 .7rem;
      cursor: pointer;
      height: 100%;
      padding: 1rem 0;
      border-bottom: ${props => props.active ? '4px solid black' : 'none'};
      &:hover {
        text-decoration: underline;
      }
`
export default function CategoryBySport() {
  const router = useRouter()
  return (
    <Container>
      <ul>
        <Link href="/shop/men/New" passHref>
          <ListItem active={router.query.sport === 'New'}>New In</ListItem>
        </Link>
        <Link href="/shop/men/Football" passHref>
        <ListItem active={router.query.sport === 'Football'}>Football</ListItem>
        </Link>
        <Link href="/shop/men/Basketball" passHref>

        <ListItem active={router.query.sport === 'Basketball'}>Basketball</ListItem>
        </Link>
        <Link href="/shop/men/Badminton" passHref>

        <ListItem active={router.query.sport === 'Badminton'}>Badminton</ListItem>
        </Link>
        <Link href="/shop/men/Rugby" passHref>

        <ListItem active={router.query.sport === 'Rugby'}>Rugby</ListItem>
        </Link>
        <Link href="/shop/men/Tennis" passHref>

        <ListItem active={router.query.sport === 'Tennis'}>Tennis</ListItem>
        </Link>
        <Link href="/shop/men/Hockey" passHref>

        <ListItem active={router.query.sport === 'Hockey'}>Hockey</ListItem>
        </Link>
        <Link href="/shop/men/Lifestyle" passHref>

        <ListItem active={router.query.sport === 'Lifestyle'}>Lifestyle</ListItem>
        </Link>
        <Link href="/shop/men/American-Football" passHref>

        <ListItem active={router.query.sport === 'American-Football'}>American Football</ListItem>
        </Link>
        <Link href="/shop/men/Sales" passHref>

        <ListItem active={router.query.sport === 'Sales'}>Sales</ListItem>
        </Link>
      </ul>
    </Container>
  )
}
