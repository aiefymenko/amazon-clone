import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import {db} from './firebase';
import Login from './Login';

function App() {
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
    <div className="App">
      <Header cartItems={cartItems} />


      <Routes>
        <Route exact path="/login" element={<Login/>}>
        </Route>
        
        <Route exact path="/cart" element={<Cart cartItems={cartItems}/>}>
        </Route>

        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
