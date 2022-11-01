import React from 'react';
import styled from 'styled-components';

function Cart() {
  return (
    <Container>
      <CartItems />
      <CartTotal />

    </Container>
  )
}

export default Cart

const Container = styled.div`
`