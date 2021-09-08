import Image from "next/image"
import styled from "styled-components"
import CartItem from '../components/CartItem'

const Container = styled.div`
  padding: 3rem 6rem;
  min-height: 50vh;
  display: flex;
  align-items: flex-start;

  .cart-item-area {

    .back-btn {
      cursor: pointer;
      margin-top: 2rem;

      span {
        margin-left: .5rem;
        color: #868686;
        font-weight: 500;
        font-size: 14px;
      }
      &:hover {
        text-decoration: underline;
      }      
    }

  }
`

const Summary = styled.div`
  background: #F5F5F5;
  padding: 1.5rem;
  width: 25%;

  .row {
    display: flex;
    justify-content: space-between;
  }
  hr {
    margin: 2rem 0;
    border: none;
    border-bottom: 1px solid #DADADA;
  }
`


export default function Cart() {
  return (
    <Container>
      <div className="cart-item-area" style={{width: '70%'}}>
        <h3>Bag</h3>

        {
          [1,2].map(item => (
            <CartItem key={item} />
          ))
        }

        <button className="back-btn" style={{cursor: 'pointer',}}>
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.55824 0.231232C5.86655 0.53954 5.86655 1.03941 5.55824 1.34772L2.69543 4.21053H15.5263C15.9623 4.21053 16.3158 4.56399 16.3158 5C16.3158 5.43601 15.9623 5.78947 15.5263 5.78947H2.69543L5.55824 8.65228C5.86655 8.96059 5.86655 9.46046 5.55824 9.76877C5.24993 10.0771 4.75007 10.0771 4.44176 9.76877L0.231231 5.55824C0.0789305 5.40594 0.00186445 5.2069 3.31491e-05 5.00729C1.12027e-05 5.00486 0 5.00243 0 5C0 4.99757 1.12027e-05 4.99514 3.3149e-05 4.99271C0.000977177 4.88832 0.022181 4.78877 0.059904 4.6978C0.0984301 4.60469 0.155539 4.51745 0.231231 4.44176L4.44176 0.231232C4.75007 -0.077077 5.24993 -0.077077 5.55824 0.231232Z" fill="#868686"/>
          </svg>
          <span>Continue shopping</span>
        </button>
      </div>
 

      <Summary>
        <h3>Summary</h3>
        <p className="row"><span>Subtotal</span><span>$100.92</span></p>
        <p className="row"><span>Delivery</span><span>$0</span></p>
        <hr />
        <p className="row"><span>Total</span><span>$100.92</span></p>
        </Summary>
    </Container>
  )
}
