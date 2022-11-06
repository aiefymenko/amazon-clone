/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

function CartItem({id , item}) {

  let options =[];
  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}> Qty: {i}</option>)
  }

  return (
   <Container>
    <ImageContainer>
    <img src={item.image}/>
    </ImageContainer>
    <CartItemInfo>
      <CartItemDescription>
        <h2>{item.name}</h2>
      </CartItemDescription>
      <CartItemBottom>
      <CartItemQuantity>
        <select value={item.quantity}>
        {options}
        </select>
     {item.quantity}
      </CartItemQuantity>
      <CartItemDelete>
        Delete
      </CartItemDelete>
      </CartItemBottom>

    </CartItemInfo>

    <CartItemPrice>
    ${item.price}
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
margin-right: 16px;
img {
  object-fit: contain;
  height: 100%;
  width: 100%;

}
`
const CartItemInfo = styled.div`
flex-grow: 1;
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
color: #007185;
margin-left: 16px;
cursor: pointer;
`

const CartItemPrice = styled.div`
font-size: 18px;
font-width: 700;
margin-left: 17px;
`





