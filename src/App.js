import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/cart" element={<Cart/>}>
        </Route>

        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
