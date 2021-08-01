import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  padding: 3rem 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Subtitle = styled.div`
  font-weight: 500;
  font-size: 30px;
`

const Button = styled.button`
  width: 100%;
  border: 1px solid #DEDEDE;
  background-color: transparent;
  padding: .8rem 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.08px;
  cursor: pointer;
  margin: 1rem 0;
`
const ItemCtas = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  right: .8rem;
  top: .8rem;
  transition: opacity ease-in-out 4s;
  
  button {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    background-color: #fff;
    border-radius: 50%;
    border: none;
  }
  svg {
    display: block;
    cursor: pointer;
    margin-bottom: .5rem;

  }
`
const ProductItem = styled.div`
  margin: 1.5rem 0;
  position: relative;

  p {
    cursor: pointer;
  }
  p:hover {
    text-decoration: underline;
  }
  
  &:hover > ${ItemCtas} {
    display: block;
    opacity: 1;
  }

  span {
    font-weight: 500;
    color: #B02B2B;
  }
`
export default function ProductSamples() {
  return (
    <Container>
      <Subtitle>Selling Fast</Subtitle>

      <ItemContainer>
        {
          [1,2,3,4,5,6,7,8].map(item => (
            <ProductItem key={item}>
              <Image src="/jersey-chelsea.png" alt="me" quality="80" width="270" height="270" objectFit="cover" objectPosition="center" />
              <ItemCtas className="cta">
                {/* <button>
                  <svg width="20" height="20" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M4.89688 1.83824C4.21076 1.83824 3.56753 2.10347 3.08629 2.5855C2.08729 3.58609 2.08729 5.21482 3.08709 6.217L8.69276 11.8322L14.2992 6.217C15.299 5.21482 15.299 3.58609 14.2992 2.5855C13.3368 1.62065 11.6405 1.62224 10.6781 2.5855L9.255 4.01094C8.95641 4.31032 8.42912 4.31032 8.13053 4.01094L6.70747 2.58471C6.22624 2.10347 5.58379 1.83824 4.89688 1.83824ZM8.69276 13.75C8.48232 13.75 8.27982 13.6666 8.13132 13.5165L1.96262 7.33829C0.345794 5.71829 0.345794 3.08262 1.96262 1.46262C2.74403 0.681206 3.78591 0.25 4.89688 0.25C6.00785 0.25 7.05053 0.681206 7.83115 1.46262L8.69276 2.32582L9.55438 1.46341C10.3358 0.681206 11.3777 0.25 12.4894 0.25C13.5996 0.25 14.6423 0.681206 15.4229 1.46262C17.0405 3.08262 17.0405 5.71829 15.4237 7.33829L9.255 13.5173C9.10571 13.6666 8.904 13.75 8.69276 13.75Z"/></mask><path fillRule="evenodd" clipRule="evenodd" d="M4.89688 1.83824C4.21076 1.83824 3.56753 2.10347 3.08629 2.5855C2.08729 3.58609 2.08729 5.21482 3.08709 6.217L8.69276 11.8322L14.2992 6.217C15.299 5.21482 15.299 3.58609 14.2992 2.5855C13.3368 1.62065 11.6405 1.62224 10.6781 2.5855L9.255 4.01094C8.95641 4.31032 8.42912 4.31032 8.13053 4.01094L6.70747 2.58471C6.22624 2.10347 5.58379 1.83824 4.89688 1.83824ZM8.69276 13.75C8.48232 13.75 8.27982 13.6666 8.13132 13.5165L1.96262 7.33829C0.345794 5.71829 0.345794 3.08262 1.96262 1.46262C2.74403 0.681206 3.78591 0.25 4.89688 0.25C6.00785 0.25 7.05053 0.681206 7.83115 1.46262L8.69276 2.32582L9.55438 1.46341C10.3358 0.681206 11.3777 0.25 12.4894 0.25C13.5996 0.25 14.6423 0.681206 15.4229 1.46262C17.0405 3.08262 17.0405 5.71829 15.4237 7.33829L9.255 13.5173C9.10571 13.6666 8.904 13.75 8.69276 13.75Z" fill="black"/><path d="M3.08629 2.5855L3.36936 2.86812L3.36937 2.86811L3.08629 2.5855ZM3.08709 6.217L2.80391 6.49951L2.80401 6.4996L3.08709 6.217ZM8.69276 11.8322L8.40968 12.1148L8.69274 12.3984L8.97583 12.1148L8.69276 11.8322ZM14.2992 6.217L14.5823 6.49962L14.5824 6.49951L14.2992 6.217ZM14.2992 2.5855L14.016 2.86799L14.0163 2.86823L14.2992 2.5855ZM10.6781 2.5855L10.3951 2.30277L10.395 2.30289L10.6781 2.5855ZM9.255 4.01094L8.97192 3.72834L8.97178 3.72847L9.255 4.01094ZM8.13053 4.01094L8.41375 3.72847L8.41369 3.72841L8.13053 4.01094ZM6.70747 2.58471L6.99063 2.30218L6.99031 2.30186L6.70747 2.58471ZM8.13132 13.5165L8.41567 13.2352L8.41438 13.2339L8.13132 13.5165ZM1.96262 7.33829L1.6795 7.62086L1.67956 7.62092L1.96262 7.33829ZM1.96262 1.46262L1.67977 1.17977L1.6795 1.18005L1.96262 1.46262ZM7.83115 1.46262L8.11425 1.18004L8.11413 1.17992L7.83115 1.46262ZM8.69276 2.32582L8.40966 2.60841L8.69263 2.8919L8.97574 2.60854L8.69276 2.32582ZM9.55438 1.46341L9.83736 1.74612L9.83737 1.74611L9.55438 1.46341ZM15.4229 1.46262L15.706 1.17998L15.7059 1.17992L15.4229 1.46262ZM15.4237 7.33829L15.7068 7.6209L15.7068 7.62086L15.4237 7.33829ZM9.255 13.5173L9.53784 13.8002L9.53808 13.7999L9.255 13.5173ZM4.89688 1.43824C4.10559 1.43824 3.36021 1.74498 2.80322 2.30289L3.36937 2.86811C3.77485 2.46196 4.31594 2.23824 4.89688 2.23824V1.43824ZM2.80323 2.30288C1.64817 3.45977 1.6485 5.34134 2.80391 6.49951L3.37027 5.93449C2.52609 5.08831 2.52641 3.71241 3.36936 2.86812L2.80323 2.30288ZM2.80401 6.4996L8.40968 12.1148L8.97585 11.5496L3.37017 5.9344L2.80401 6.4996ZM8.97583 12.1148L14.5823 6.49962L14.0162 5.93438L8.4097 11.5496L8.97583 12.1148ZM14.5824 6.49951C15.7378 5.34132 15.7382 3.45967 14.5822 2.30277L14.0163 2.86823C14.8599 3.71251 14.8602 5.08833 14.0161 5.93449L14.5824 6.49951ZM14.5824 2.30301C13.4634 1.18119 11.5135 1.18343 10.3951 2.30277L10.961 2.86823C11.7675 2.06104 13.2101 2.0601 14.016 2.86799L14.5824 2.30301ZM10.395 2.30289L8.97192 3.72834L9.53808 4.29355L10.9611 2.86811L10.395 2.30289ZM8.97178 3.72847C8.82949 3.87115 8.55604 3.87115 8.41375 3.72847L7.84731 4.29341C8.30219 4.7495 9.08333 4.7495 9.53822 4.29341L8.97178 3.72847ZM8.41369 3.72841L6.99063 2.30218L6.42431 2.86723L7.84737 4.29347L8.41369 3.72841ZM6.99031 2.30186C6.43344 1.74499 5.689 1.43824 4.89688 1.43824V2.23824C5.47859 2.23824 6.01903 2.46195 6.42463 2.86755L6.99031 2.30186ZM8.69276 13.35C8.58788 13.35 8.48814 13.3084 8.41567 13.2352L7.84698 13.7979C8.0715 14.0248 8.37677 14.15 8.69276 14.15V13.35ZM8.41438 13.2339L2.24568 7.05567L1.67956 7.62092L7.84826 13.7992L8.41438 13.2339ZM2.24574 7.05573C0.784754 5.59188 0.784754 3.20904 2.24574 1.74518L1.6795 1.18005C-0.0931659 2.9562 -0.0931659 5.84471 1.6795 7.62086L2.24574 7.05573ZM2.24546 1.74546C2.95158 1.03934 3.89161 0.65 4.89688 0.65V-0.15C3.68022 -0.15 2.53648 0.323073 1.67977 1.17977L2.24546 1.74546ZM4.89688 0.65C5.90227 0.65 6.84298 1.03942 7.54816 1.74532L8.11413 1.17992C7.25808 0.322996 6.11343 -0.15 4.89688 -0.15V0.65ZM7.54804 1.7452L8.40966 2.60841L8.97587 2.04324L8.11425 1.18004L7.54804 1.7452ZM8.97574 2.60854L9.83736 1.74612L9.27141 1.1807L8.40979 2.04311L8.97574 2.60854ZM9.83737 1.74611C10.5434 1.03935 11.4834 0.65 12.4894 0.65V-0.15C11.272 -0.15 10.1282 0.323066 9.2714 1.18071L9.83737 1.74611ZM12.4894 0.65C13.494 0.65 14.4347 1.03939 15.1399 1.74532L15.7059 1.17992C14.8499 0.323025 13.7052 -0.15 12.4894 -0.15V0.65ZM15.1399 1.74525C16.6016 3.2091 16.6016 5.59189 15.1406 7.05573L15.7068 7.62086C17.4795 5.8447 17.4795 2.95613 15.706 1.17998L15.1399 1.74525ZM15.1406 7.05569L8.97192 13.2347L9.53808 13.7999L15.7068 7.6209L15.1406 7.05569ZM8.97216 13.2345C8.89805 13.3086 8.79816 13.35 8.69276 13.35V14.15C9.00984 14.15 9.31336 14.0246 9.53784 13.8002L8.97216 13.2345Z" fill="white" mask="url(#path-1-inside-1)"/></svg>
                </button> */}
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="white"/><mask id="path-2-inside-1" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M10.8969 9.83824C10.2108 9.83824 9.56753 10.1035 9.08629 10.5855C8.08729 11.5861 8.08729 13.2148 9.08709 14.217L14.6928 19.8322L20.2992 14.217C21.299 13.2148 21.299 11.5861 20.2992 10.5855C19.3368 9.62065 17.6405 9.62224 16.6781 10.5855L15.255 12.0109C14.9564 12.3103 14.4291 12.3103 14.1305 12.0109L12.7075 10.5847C12.2262 10.1035 11.5838 9.83824 10.8969 9.83824ZM14.6928 21.75C14.4823 21.75 14.2798 21.6666 14.1313 21.5165L7.96262 15.3383C6.34579 13.7183 6.34579 11.0826 7.96262 9.46262C8.74403 8.68121 9.78591 8.25 10.8969 8.25C12.0079 8.25 13.0505 8.68121 13.8311 9.46262L14.6928 10.3258L15.5544 9.46341C16.3358 8.68121 17.3777 8.25 18.4894 8.25C19.5996 8.25 20.6423 8.68121 21.4229 9.46262C23.0405 11.0826 23.0405 13.7183 21.4237 15.3383L15.255 21.5173C15.1057 21.6666 14.904 21.75 14.6928 21.75Z"/></mask><path fillRule="evenodd" clipRule="evenodd" d="M10.8969 9.83824C10.2108 9.83824 9.56753 10.1035 9.08629 10.5855C8.08729 11.5861 8.08729 13.2148 9.08709 14.217L14.6928 19.8322L20.2992 14.217C21.299 13.2148 21.299 11.5861 20.2992 10.5855C19.3368 9.62065 17.6405 9.62224 16.6781 10.5855L15.255 12.0109C14.9564 12.3103 14.4291 12.3103 14.1305 12.0109L12.7075 10.5847C12.2262 10.1035 11.5838 9.83824 10.8969 9.83824ZM14.6928 21.75C14.4823 21.75 14.2798 21.6666 14.1313 21.5165L7.96262 15.3383C6.34579 13.7183 6.34579 11.0826 7.96262 9.46262C8.74403 8.68121 9.78591 8.25 10.8969 8.25C12.0079 8.25 13.0505 8.68121 13.8311 9.46262L14.6928 10.3258L15.5544 9.46341C16.3358 8.68121 17.3777 8.25 18.4894 8.25C19.5996 8.25 20.6423 8.68121 21.4229 9.46262C23.0405 11.0826 23.0405 13.7183 21.4237 15.3383L15.255 21.5173C15.1057 21.6666 14.904 21.75 14.6928 21.75Z" fill="black"/><path d="M9.08629 10.5855L9.36936 10.8681L9.36937 10.8681L9.08629 10.5855ZM9.08709 14.217L8.80391 14.4995L8.80401 14.4996L9.08709 14.217ZM14.6928 19.8322L14.4097 20.1148L14.6927 20.3984L14.9758 20.1148L14.6928 19.8322ZM20.2992 14.217L20.5823 14.4996L20.5824 14.4995L20.2992 14.217ZM20.2992 10.5855L20.016 10.868L20.0163 10.8682L20.2992 10.5855ZM16.6781 10.5855L16.3951 10.3028L16.395 10.3029L16.6781 10.5855ZM15.255 12.0109L14.9719 11.7283L14.9718 11.7285L15.255 12.0109ZM14.1305 12.0109L14.4137 11.7285L14.4137 11.7284L14.1305 12.0109ZM12.7075 10.5847L12.9906 10.3022L12.9903 10.3019L12.7075 10.5847ZM14.1313 21.5165L14.4157 21.2352L14.4144 21.2339L14.1313 21.5165ZM7.96262 15.3383L7.6795 15.6209L7.67956 15.6209L7.96262 15.3383ZM7.96262 9.46262L7.67977 9.17977L7.6795 9.18005L7.96262 9.46262ZM13.8311 9.46262L14.1143 9.18004L14.1141 9.17992L13.8311 9.46262ZM14.6928 10.3258L14.4097 10.6084L14.6926 10.8919L14.9757 10.6085L14.6928 10.3258ZM15.5544 9.46341L15.8374 9.74612L15.8374 9.74611L15.5544 9.46341ZM21.4229 9.46262L21.706 9.17998L21.7059 9.17992L21.4229 9.46262ZM21.4237 15.3383L21.7068 15.6209L21.7068 15.6209L21.4237 15.3383ZM15.255 21.5173L15.5378 21.8002L15.5381 21.7999L15.255 21.5173ZM10.8969 9.43824C10.1056 9.43824 9.36021 9.74498 8.80322 10.3029L9.36937 10.8681C9.77485 10.462 10.3159 10.2382 10.8969 10.2382V9.43824ZM8.80323 10.3029C7.64817 11.4598 7.6485 13.3413 8.80391 14.4995L9.37027 13.9345C8.52609 13.0883 8.52641 11.7124 9.36936 10.8681L8.80323 10.3029ZM8.80401 14.4996L14.4097 20.1148L14.9758 19.5496L9.37017 13.9344L8.80401 14.4996ZM14.9758 20.1148L20.5823 14.4996L20.0162 13.9344L14.4097 19.5496L14.9758 20.1148ZM20.5824 14.4995C21.7378 13.3413 21.7382 11.4597 20.5822 10.3028L20.0163 10.8682C20.8599 11.7125 20.8602 13.0883 20.0161 13.9345L20.5824 14.4995ZM20.5824 10.303C19.4634 9.18119 17.5135 9.18343 16.3951 10.3028L16.961 10.8682C17.7675 10.061 19.2101 10.0601 20.016 10.868L20.5824 10.303ZM16.395 10.3029L14.9719 11.7283L15.5381 12.2935L16.9611 10.8681L16.395 10.3029ZM14.9718 11.7285C14.8295 11.8711 14.556 11.8711 14.4137 11.7285L13.8473 12.2934C14.3022 12.7495 15.0833 12.7495 15.5382 12.2934L14.9718 11.7285ZM14.4137 11.7284L12.9906 10.3022L12.4243 10.8672L13.8474 12.2935L14.4137 11.7284ZM12.9903 10.3019C12.4334 9.74499 11.689 9.43824 10.8969 9.43824V10.2382C11.4786 10.2382 12.019 10.4619 12.4246 10.8675L12.9903 10.3019ZM14.6928 21.35C14.5879 21.35 14.4881 21.3084 14.4157 21.2352L13.847 21.7979C14.0715 22.0248 14.3768 22.15 14.6928 22.15V21.35ZM14.4144 21.2339L8.24568 15.0557L7.67956 15.6209L13.8483 21.7992L14.4144 21.2339ZM8.24574 15.0557C6.78475 13.5919 6.78475 11.209 8.24574 9.74518L7.6795 9.18005C5.90683 10.9562 5.90683 13.8447 7.6795 15.6209L8.24574 15.0557ZM8.24546 9.74546C8.95158 9.03934 9.89161 8.65 10.8969 8.65V7.85C9.68022 7.85 8.53648 8.32307 7.67977 9.17977L8.24546 9.74546ZM10.8969 8.65C11.9023 8.65 12.843 9.03942 13.5482 9.74532L14.1141 9.17992C13.2581 8.323 12.1134 7.85 10.8969 7.85V8.65ZM13.548 9.7452L14.4097 10.6084L14.9759 10.0432L14.1143 9.18004L13.548 9.7452ZM14.9757 10.6085L15.8374 9.74612L15.2714 9.1807L14.4098 10.0431L14.9757 10.6085ZM15.8374 9.74611C16.5434 9.03935 17.4834 8.65 18.4894 8.65V7.85C17.272 7.85 16.1282 8.32307 15.2714 9.18071L15.8374 9.74611ZM18.4894 8.65C19.494 8.65 20.4347 9.03939 21.1399 9.74532L21.7059 9.17992C20.8499 8.32302 19.7052 7.85 18.4894 7.85V8.65ZM21.1399 9.74525C22.6016 11.2091 22.6016 13.5919 21.1406 15.0557L21.7068 15.6209C23.4795 13.8447 23.4795 10.9561 21.706 9.17998L21.1399 9.74525ZM21.1406 15.0557L14.9719 21.2347L15.5381 21.7999L21.7068 15.6209L21.1406 15.0557ZM14.9722 21.2345C14.898 21.3086 14.7982 21.35 14.6928 21.35V22.15C15.0098 22.15 15.3134 22.0246 15.5378 21.8002L14.9722 21.2345Z" fill="white" mask="url(#path-2-inside-1)"/></svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M15.0474 9.125C14.1154 9.125 13.3599 9.87875 13.3599 10.8125H16.7349C16.7349 9.87875 15.9795 9.125 15.0474 9.125ZM16.7349 11.9375V12.5C16.7349 12.8094 16.9869 13.0625 17.2974 13.0625C17.6079 13.0625 17.8599 12.8094 17.8599 12.5V11.9375H18.5473C18.8325 11.9375 19.0721 12.1512 19.1059 12.4325L19.9659 19.745C20.0053 20.0825 19.7443 20.375 19.4074 20.375H10.6875C10.3506 20.375 10.0896 20.0825 10.1289 19.745L10.989 12.4325C11.0227 12.1512 11.2624 11.9375 11.5476 11.9375H12.2349V12.5C12.2349 12.8094 12.4869 13.0625 12.7974 13.0625C13.1079 13.0625 13.3599 12.8094 13.3599 12.5V11.9375H16.7349ZM12.2349 10.8125H11.5476C10.692 10.8125 9.97199 11.4537 9.87187 12.3031L9.0118 19.6156C8.89368 20.6169 9.67724 21.5 10.6875 21.5H19.4074C20.4176 21.5 21.2012 20.6169 21.0831 19.6156L20.223 12.3031C20.1229 11.4537 19.4029 10.8125 18.5473 10.8125H17.8599C17.8599 9.26 16.6005 8 15.0474 8C13.4938 8 12.2349 9.26 12.2349 10.8125Z" fill="black"/></svg>
              </ItemCtas>
              <p>Chelsea F.C. 2020/21 Stadium Home</p>
              <span>$67.86</span>
            </ProductItem>            
          ))
        }
      </ItemContainer>
      <Button>See All Products</Button>

    </Container>
  )
}