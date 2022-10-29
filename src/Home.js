import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';
import { AttachEmail } from '@mui/icons-material';


function Home() {

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ( 
      
      {
        id: doc.id,
        product: doc.data()
      }
      
      ));
      setProducts(tempProducts);
  });

};

useEffect(() => {
  getProducts();
}, []); 


  return (
    <Container>
      <Banner>

      </Banner>
      <Content>
        {
          products.map((data) => (
            <Product 
            key = {data.id}
            title = {data.product.name}
            price = {data.product.price}
            rating = {data.product.rating}
            image = {data.product.image} 
            />
          ))
        }
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
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
z-index: 100;
display: flex;
` 