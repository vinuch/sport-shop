import Image from "next/image"
import styled from "styled-components"

const ItemContainer = styled.div`
  display: flex;
  margin: 1rem 0;

  .img-container {
    margin-right: 2rem;
  }
  .item-name{
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 21px;
  }
  .price {
      color: #B02B2B;
      font-weight: 500;
      font-size: 1.2rem;
      margin-right: .5rem;
    }
  .option-row {
    display: flex;

    & > div {
      margin-right: 2rem;
    }

    select {
      padding:1rem ;
      border: 1px solid #DEDEDE;
      margin: .8rem 0;
      cursor: pointer;
    }
  }


  .remove {
    color: #FF4E4E;
    font-weight: 400;
    font-size: 13px;
     &:hover {
       text-decoration: underline;
     }
  }
  
`
export default function CartItem() {
  return (
    <ItemContainer>
    <div className="img-container">
      <Image src="/jersey-chelsea.png" alt="me" quality="80" width="230" height="230" objectFit="cover" objectPosition="center" />
    </div>
    <div>
      <p className="price">$67.86</p>
      <p className="item-name">Nike F.C. Women;s Tie-Dye Football Shirt.</p>

      <div className="option-row">
        <div>
          <label htmlFor="size">Size</label><br />
          <select name="size" id="size">
            <option defaultValue="m">Medium  (UK 12-14)</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label><br />
          <select name="quantity" id="quantity">
            <option defaultValue="1">1</option>
          </select>
        </div>
      </div>

      <button className="remove">Remove this item</button>
    </div>
  
  </ItemContainer>
  )
}
