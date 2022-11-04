import React from 'react';
import styled from 'styled-components';

function CartItem() {
  return (
   <Container>
    <ImageContainer>
    <img src={'https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'} alt/>
    </ImageContainer>
    <CartItemInfo>
      <CartItemDescription>
        <h2>Hello</h2>
      </CartItemDescription>
      <CartItemBottom>
      <CartItemQuantity>
     5
      </CartItemQuantity>
      <CartItemDelete>
        Delete
      </CartItemDelete>
      </CartItemBottom>

    </CartItemInfo>

    <CartItemPrice>
    $1499
    </CartItemPrice>
    </Container>
  )
}

export default CartItem

const Container = styled.div`
padding-top: 12px;
padding-bottom: 12px;
display: flex;
`

const ImageContainer = styled.div`
width: 180px;
height: 180px;
flex-shrink: 0;
flex-grow: 0;
img {
  object-fit: contain;
  height: 100%;
  width: 100%;

}
`
const CartItemInfo = styled.div`
`

const CartItemDescription = styled.div`
color: #007185;
h2 {
  font-size: 18px;
}
`

const CartItemBottom = styled.div`
display: flex;
margin-top: 4px;
`

const CartItemQuantity = styled.div`
`

const CartItemDelete = styled.div`
`

const CartItemPrice = styled.div`
font-size: 18px;
font-width: 700;
margin-left: 17px;
`






