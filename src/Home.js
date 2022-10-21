import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Banner>

      </Banner>
      <Contant>

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
`

const Contant = styled.div`
`