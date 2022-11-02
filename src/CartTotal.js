import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';


function CartTotal() {
  return (
    <Container>
      <Title>
        Shopping Cart
      </Title>
      <hr/> 
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  )
}

export default CartTotal

const Container = styled.div`
height: 200px;
background-color: white;
flex: 0.2;
padding: 20px;
`

const Title = styled.div`
`

const ItemsContainer = styled.div`
`