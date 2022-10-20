import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <HeaderBar>

    <HeaderLogo>
    <img src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578' alt='amazon logo'></img>
    </HeaderLogo>
        
        <HeaderAddress>
          <LineOne>Deliver to</LineOne>
          <LineTwo>Select your address</LineTwo>
        </HeaderAddress>
        
        <HeaderSearch>
          <HeaderSearchInput type='text'>
          </HeaderSearchInput>
          <HeaderSearchContainer>
          <SearchIcon/>
          </HeaderSearchContainer>
        </HeaderSearch>

        <HeaderNavItems>
          <HeaderOption>
            <LineOne>Hello, Artem</LineOne>
            <LineTwo> Account & List</LineTwo>
          </HeaderOption>

          <HeaderOption>
            <LineOne>Returns</LineOne>
            <LineTwo>& Orders</LineTwo>
          </HeaderOption>

          <HeaderCart>
          <ShoppingBasketIcon/>
          <CartCount>7</CartCount>
          </HeaderCart>
        </HeaderNavItems>

      </HeaderBar>
  )
}

export default Header

const HeaderBar = styled.div`
  height: 60px;
  background-color: #0F1111;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;

`

const HeaderLogo = styled.div`
img {
  width: 100px;
  margin-left: 10px;
}
`

const HeaderAddress = styled.div`
`

const LineOne = styled.div`
`

const LineTwo = styled.div`
font-weight: 700;
`

const HeaderSearch = styled.div`
display: flex;
`

const HeaderSearchInput = styled.input`
`

const HeaderSearchContainer = styled.div``

const HeaderNavItems = styled.div`
display: flex`

const HeaderOption = styled.div`
padding: 10px;`

const HeaderCart = styled.div``;

const CartCount = styled.div``