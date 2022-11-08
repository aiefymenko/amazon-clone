import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {

  function getTotalPrice() {
    let total = 0;
    cartItems.forEach(element => {
      total += element.product.price * element.product.quantity;
    });
    return total;
  }

  function getCount() {
    let count = 0;
    cartItems.forEach(element => {
      count += element.product.quantity;
      
    });
  
    return count;
  
  }

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal getTotalPrice={getTotalPrice()} getCount={getCount()}/>

    </Container>
  )
}

export default Cart

const Container = styled.div`
display: flex;
padding: 15px 18px 0 18px;
align-items: flex-start;
`