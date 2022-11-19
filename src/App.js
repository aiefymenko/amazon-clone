import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import {db} from './firebase';
import Login from './Login';
import styled from 'styled-components';


function App() {
const [user, setUser] = useState(null);
const [cartItems, setCartItems] = useState([]);

  function getCartItems() {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }));
      setCartItems(tempItems);
    });
  }

  useEffect(() => {
    getCartItems()
  }, []);



  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
    <Container>
      <Header cartItems={cartItems} user={user} />
      <Routes>
        <Route exact path="/cart" element={<Cart cartItems={cartItems}/>}>
        </Route>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>
    </Container>
        )}
    </Router>
  );
}

export default App;

const Container = styled.div`
`
