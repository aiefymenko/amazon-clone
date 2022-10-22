import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Banner>

      </Banner>
      <Contant>
fopsdkfspofk  
      </Contant>
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
// mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Contant = styled.div`
background: white;
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
`