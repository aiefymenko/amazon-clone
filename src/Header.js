import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom';

function Header({cartItems, user, signOut}) {

function getCount() {
  let count = 0;
  cartItems.forEach(element => {
    count += element.product.quantity;
    
  });

  return count;

}

  return (
    <HeaderBar>

    <HeaderLogo>
      <Link to="/">
    <img src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578' alt='amazon logo'></img>
    </Link>
    </HeaderLogo>
        
        <HeaderAddress>
          <LocationOnIcon />
          <HeaderOption>
          <LineOne>Deliver to</LineOne>
          <LineTwo>Select your address</LineTwo>
          </HeaderOption>
        </HeaderAddress>
        
        <HeaderSearch>
          <HeaderSearchInput type='text'>
          </HeaderSearchInput>
          <HeaderSearchContainer>
          <SearchIcon/>
          </HeaderSearchContainer>
        </HeaderSearch>

        <HeaderNavItems>
          <HeaderOption onClick={signOut}>
            <LineOne>Hello, {user.name}</LineOne>
            <LineTwo> Account & List</LineTwo>
          </HeaderOption>

          <HeaderOption>
            <LineOne>Returns</LineOne>
            <LineTwo>& Orders</LineTwo>
          </HeaderOption>

          
          <HeaderCart>
          <Link to="/cart">
          <ShoppingBasketIcon/>
          <CartCount>{getCount()}</CartCount>
          </Link>
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
display: flex;
align-items: center;
padding-left: 9px;

`

const LineOne = styled.div`
`

const LineTwo = styled.div`
font-weight: 700;
`

const HeaderSearch = styled.div`
display: flex;
flex-grow: 1;
height: 40px;
border-radius: 4px;
overflow: hidden;
margin-left: 4px;
background-color: white;
:focus-within {
  box-shadow: 0 0 0 3px #F90;
}
`

const HeaderSearchInput = styled.input`
flex-grow: 1;
border: 0;
:focus {
  outline: none;
}
`

const HeaderSearchContainer = styled.div`
display: flex;
background-color: #febd69;
color: black;
width: 45px;
justify-content: center;
align-items: center;
`

const HeaderNavItems = styled.div`
display: flex`

const HeaderOption = styled.div`
padding: 10px;
cursor: pointer;`

const HeaderCart = styled.div`
display: flex;
a {
  display: flex;
  padding-right: 9px;
  align-items: center;
  color: white;
  text-decoration: none;  
}`



const CartCount = styled.div`
padding-left: 4px;
font-weight: 700;
color: #f08804;`