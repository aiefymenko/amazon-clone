import React from 'react';
import styled from 'styled-components';

function CartItem() {
  return (
   <Container>
    <ImageContainer>
    <img src={''}/>
    </ImageContainer>
    <CartItemInfo>
      <CartItemDescription>
        <h2></h2>
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
`

const ImageContainer = styled.img`
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






