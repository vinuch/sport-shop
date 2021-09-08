import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import ProductItem from '../../../components/ProductItem'

const Container = styled.div`
  display: flex;
  min-height: 80vh;
  padding: 0 2rem;
`
const SideBar = styled.div`
  width: 20%;
  height: 100;
  padding: 1.5rem;
  /* position: fixed; */
`
const Header = styled.div`
  & > span {
    font-weight: bold;
    text-transform: capitalize;
    &.active {
      font-weight: 400;
    }
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: capitalize;
`

const OptionCategory = styled.div`
  border-bottom: 1px solid #F3F3F3;
  padding-bottom: 1rem;

  & > div.top { 
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 500;
    }

  }

  & > input, label {
    cursor: pointer;
    margin-bottom: .7rem;
  }

  & > input[type="checkbox"]::checked{
    background-color:green;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const MainArea = styled.div`
  width: 80%;
  height: 100;
  padding: 1.5rem;
`

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1.5rem 0;

  & > select {
    border: 1px solid #DEDEDE;
    background-color: none;
    padding: .5rem;
    font-weight: 300;
    cursor: pointer;
  }
`
export default function GenderShop() {
  const router = useRouter()
  return (
    <Container>
      <SideBar>
       <Header><span>{router.query.gender}</span>   /  <span className="active">Jerseys</span></Header> 
        <Title>{router.query.gender}&apos;s Jerseys</Title>

        <OptionCategory>
          <div className="top">
            <h3>Gender (1)</h3>
            <button>
              <svg width="25" height="25" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
            </button>
          </div> 

          <input type="checkbox" name="male" id="male" />
          <label htmlFor="male"> Male</label><br />
          
          <input type="checkbox" name="female" id="female" />
          <label htmlFor="female"> Female</label><br />         
        </OptionCategory>

        <OptionCategory>
          <div className="top">
            <h3>Price Range</h3>
            <button>
              <svg width="25" height="25" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
            </button>
          </div> 

          <input type="checkbox" name="<50" id="<50" />
          <label htmlFor="<50"> Below $50</label><br />
          
          <input type="checkbox" name=">50" id=">50" />
          <label htmlFor=">50"> Above $50</label><br />         
        </OptionCategory>

        <OptionCategory>
          <div className="top">
            <h3>Size</h3>
            <button>
              <svg width="25" height="25" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
            </button>
          </div> 

          <input type="checkbox" name="xs" id="xs" />
          <label htmlFor="xs"> XS (UK 4-6)</label><br />
          
          <input type="checkbox" name="s" id="s" />
          <label htmlFor="s"> S (UK 8-10)</label><br />         
          
          <input type="checkbox" name="m" id="m" />
          <label htmlFor="m"> M (UK 12-14)</label><br />         
          
          <input type="checkbox" name="s" id="s" />
          <label htmlFor="s"> S (UK 8-10)</label><br />         
          
          <input type="checkbox" name="l" id="l" />
          <label htmlFor="l"> L (UK 12-14)</label><br />         
        </OptionCategory>

        <OptionCategory>
          <div className="top">
            <h3>Football Team</h3>
            <button>
              <svg width="25" height="25" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
            </button>
          </div> 

          <input type="checkbox" name="barca" id="barca" />
          <label htmlFor="barca"> FC Barcelona</label><br />
          
          <input type="checkbox" name="roma" id="roma" />
          <label htmlFor="roma">AS Roma</label><br />         
          
          <input type="checkbox" name="athletico-madrid" id="athletico-madrid" />
          <label htmlFor="athletico-madrid">Athletico Madrid</label><br />         
          
          <input type="checkbox" name="psg" id="psg" />
          <label htmlFor="psg">Paris Saint-Germain</label><br />         
        </OptionCategory>

        <OptionCategory>
          <div className="top">
            <h3>Jersey Type</h3>
            <button>
              <svg width="25" height="25" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
            </button>
          </div> 

          <input type="checkbox" name="home" id="home" />
          <label htmlFor="home"> Home</label><br />
          
          <input type="checkbox" name="away" id="away" />
          <label htmlFor="away">Away</label><br />         
          
          <input type="checkbox" name="custom" id="custom" />
          <label htmlFor="custom">Custom</label><br />         
         
        </OptionCategory>
      </SideBar>
      <MainArea>
      <FilterContainer>
        <select>
          <option defaultValue="default">Default Sorting</option>
        </select>
      </FilterContainer>
        <ItemContainer>
          {
            [1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
              <ProductItem key={item} />            
            ))
          }          
        </ItemContainer>


      </MainArea>
    </Container>
  )
}
