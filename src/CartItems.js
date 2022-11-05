import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({cartItems}) {


  return (
    <Container>
            <Title>
        Shopping Cart
      </Title>
      <hr/> 
      <ItemsContainer>
        {
          cartItems.map((item) => (
            <CartItem 
            key = {item.id}
            id = {item.id}
            item = {item.product}
            />
          ))
        }
      </ItemsContainer>
    </Container>
  )
}

export default CartItems

const Container = styled.div`
height: 300px;
background-color: white;
flex: 0.8;
margin-right: 20px;
padding: 20px;
`

const Title = styled.div`
`

const ItemsContainer = styled.div`
`