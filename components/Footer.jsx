import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 0 4rem;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.08px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  li {
    padding: 0.3rem 0;
  }


  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 2px solid #F3F3F3;
    margin-top: 2rem;
    padding: 1rem 0;
    color: #868686
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <h4>Customer</h4>
        </li>
        <li>Help & Contact Us</li>
        <li>Returns & Refunds</li>
        <li>Online Stores</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul>
        <li>
          <h4>Company</h4>
        </li>
        <li>What We Do</li>
        <li>Available Services</li>
        <li>Latest Posts</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <li>
          <h4>Social Media</h4>
        </li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Tumblr</li>
        <li>Pinterest</li>
      </ul>
      <ul>
        <li>
          <h4>Profile</h4>
        </li>
        <li>My Account</li>
        <li>Checkout</li>
        <li>Order Tracking</li>
        <li>Help & Support</li>
      </ul>

      <div>
        <span>Copyright © Jersey Shop</span>
        <span>Privacy & Cookie  |  T&C  |  Accessibility</span>
      </div>
    </FooterContainer>
  )
}

export default Footer;