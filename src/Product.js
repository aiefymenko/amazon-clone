import React from 'react';
import styled from 'styled-components';

function Product() {
  return (
    <Container>
      <Title>
      iPad Pro
        </Title>
        <Price>
        1499$
        </Price>
        <Rating>
        :stars  
        </Rating>
        <Image src='https://m.media-amazon.com/images/I/61vsK7h3zVL._AC_SX679_.jpg'/>
        <ButtonWrapper>
        <AddToCartButton>
          Add to Cart
        </AddToCartButton>
        </ButtonWrapper>

      </Container>
  )
}

export default Product

const Container = styled.div`
background-color: white;
z-index: 100;
margin: 10px;
padding: 20px;
max-height: 400px;
flex: 1;
display: flex;
flex-direction: column; 
`
const Title = styled.span`
`

const Price = styled.span`
font-weight: 500;
margin-top: 3px;
`

const Rating = styled.div`
`

const Image = styled.img`
max-height: 200px;
object-fit: contain;
`

const ButtonWrapper = styled.div`
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;`

const AddToCartButton = styled.button`
width: 100px;
height: 30px; 
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
`
