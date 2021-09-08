import Image from "next/image"
import styled from "styled-components"
import ProductItem from "../../../../../components/ProductItem"
import { useRouter } from 'next/router'
const Container = styled.div`
  padding: 3rem 6rem;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  & > .info-container {
    width: 35%;

    & > h3 {
      font-weight: 400;
      margin-bottom: 2rem;

    }
    p.prices {
      margin: 2rem 0;
    }
    .price {
      color: #B02B2B;
      font-weight: 500;
      font-size: 1.6rem;
      margin-right: .5rem;
    }
    .discount-price {
      text-decoration: line-through;
      color: #868686;
      font-weight: 300;
    }
    select {
      border: 1px solid #DEDEDE;
      padding: 1rem;
      width: 100%;
      margin: 1rem 0 ;
      cursor: pointer;
    }
    .cta-container {
      display: flex;
      justify-content: space-between;
      margin: 1.2rem 0;

      .add {
        width: 85%;
        background-color: black;
        color: #fff;
        padding: 1rem 0;
        font-weight: lighter;
        font-size: 1rem;
      }

      .like {
        border: 1px solid #DEDEDE;
        padding: .5rem .8rem;
      }

    }
    h4 {
      font-size: 24px;
       margin-top: 5rem;
      font-weight: 500;
    }
    .product-details {
      line-height: 26px;
      font-weight: 400;
    }
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  margin-top: 6rem;
`
const Header = styled.div`
  padding: 2rem 0;
  & > span {
    font-weight: bold;
    &.active {
      font-weight: 400;
      color: #868686;
    }
  }
`
export default function ProductItemPage () {
  const router = useRouter()

  return (
    <Container>
       <Header><span>Women</span>  /  <span>{router.query.sport}</span>  /  <span>Jerseys</span> / <span className="active">Nike F.C. Women&apos;s Tie-Dye Football Shirt</span></Header> 
      
      <InfoRow>
        <div style={{width: '10%'}}>
          <Image src="/jersey-chelsea.png" alt="me" quality="80" width="110" height="110" objectFit="cover" objectPosition="center" />
          <Image src="/jersey-chelsea.png" alt="me" quality="80" width="110" height="110" objectFit="cover" objectPosition="center" />
          <Image src="/jersey-chelsea.png" alt="me" quality="80" width="110" height="110" objectFit="cover" objectPosition="center" />

        </div>
        <div style={{width: '50%'}}>
          <Image src="/jersey-chelsea.png" alt="me" quality="80" width="700" height="680" objectFit="cover" objectPosition="center" />
        </div>
        <div className="info-container">
          <h3>Nike F.C. Women&apos;s Tie-Dye Football Shirt</h3>
          <p className="prices"><span className="price">$67.86</span> <span className="discount-price">$67.86</span></p>

          <label htmlFor="size">Size</label><br />
          <select name="size" id="size">
            <option disabled defaultValue="please select">Please Select</option>
          </select>

          <div className="cta-container">
            <button className="add">Add To Bag</button>
            <button className="like">
              <svg aria-label="Like" fill="#000" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            </button>
          </div>

          <h4>Product Details</h4>
          <p className="product-details">
            The Nike F.C. Shirt blends 2 summer favourites: festivals and football. Soft, sweat-wicking fabric and a mesh racerback help you stay comfortable on the pitch or in the crowd.
          </p>
        </div>
      </InfoRow>

    <Subtitle>You Might Also Like</Subtitle>
      <ItemContainer>
          {
            [1,2,3,4].map(item => (
              <ProductItem key={item} />            
            ))
          }          
        </ItemContainer>
    </Container>
  )
}
