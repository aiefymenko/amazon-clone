import React from 'react';
import styled from 'styled-components';

function CartItem() {
  return (
   <Container>
    <ImageContainer>
    <img src={'https://m.media-amazon.com/images/I/61URLJb3ANL._SX3000_.jpg'} alt/>
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
img {
  object-fit: contain;
  height: 100%;
  width: 100%;

}
`
const CartItemInfo = styled.div`
`

const CartItemDescription = styled.div`
`

const CartItemBottom = styled.div`
`

const CartItemQuantity = styled.div`
`

const CartItemDelete = styled.div`
`

const CartItemPrice = styled.div`
`






