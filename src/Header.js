import React from 'react';
import styled from 'styled-components';

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
        </HeaderSearch>

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
`

const HeaderSearch = styled.div`
`

const HeaderSearchInput = styled.input`
`