import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderBar>

    <HeaderLogo>


    </HeaderLogo>

        <HeaderAddress>
          <LineOne>Deliver to</LineOne>
          <LineTwo>Select your address</LineTwo>


        </HeaderAddress>

      </HeaderBar>
  )
}

export default Header

const HeaderBar = styled.div`
  height: 60px;
  background-color: #0F1111;
`

const HeaderLogo = styled.div`
`

const HeaderAddress = styled.div`
`

const LineOne = styled.div`
`

const LineTwo = styled.div`
`