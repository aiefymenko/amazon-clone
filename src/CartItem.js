/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { db } from './firebase';

function CartItem({id , item}) {

  function deleteItem(e) {
    e.preventDefault();
    db.collection('cartItems').doc(id).delete();

  }

  let options =[];
  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}> Qty: {i}</option>)
  }

  function changeQuantity(newQuantity) {
    db.collection('cartItems').doc(id).update({
      quantity: parseInt(newQuantity)
    })
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
        <select value={item.quantity}
        onChange={(e) => changeQuantity(e.target.value)}>
        {options}
        </select>
      </CartItemQuantity>
      <CartItemDelete onClick={deleteItem}>
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
border-bottom: 1px solid #DDD;
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
align-items: center;
`

const CartItemQuantity = styled.div`
select {
  border-radius: 7px;
  background-color: #F0F2F2;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(15,17,17, .15);
  :focus {
    outline: none;
  }
}
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






