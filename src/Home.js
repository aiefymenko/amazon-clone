import React from 'react'
import styled from 'styled-components';
import Product from './Product';

function Home() {
  return (
    <Container>
      <Banner>

      </Banner>
      <Content>
      <Product />
      <Product />
      </Content>
    </Container>
  )
}

export default Home

const Container = styled.div`

`

const Banner = styled.div`
background-image: url('https://m.media-amazon.com/images/I/61URLJb3ANL._SX3000_.jpg');
min-height: 600px;
background-position: center;
background-size: cover;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
z-index: 1;
`

const Content = styled.div`
color: black;
background: white;
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
z-index: 100;
display: flex;
` 