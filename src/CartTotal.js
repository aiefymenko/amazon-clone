import React from 'react';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';



function CartTotal({getTotalPrice, getCount}) {

  return (
    <Container>
      <Subtotal> Subtotal ({getCount} items) : 
      <NumericFormat displayType={'text'} value={getTotalPrice} thousandSeparator={true} prefix={'$'} />
       </Subtotal> 
      <CheckoutButton> Proceed to checkout </CheckoutButton>
    </Container>
  )
}

export default CartTotal

const Container = styled.div`
background-color: white;
flex: 0.3;
padding: 20px;
`
const Subtotal = styled.div`
margin-bottom: 16px;
`


const CheckoutButton = styled.button`
background-color: #f0c14b;
width: 100%;
padding: 4px 8px;
border: 2px solid #a88734;
border-radius: 4px;
cursor: pointer;
font-size: 16px;  
:hover {
  background: #ddb347;
}

`