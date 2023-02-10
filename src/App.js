import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Navbar from './components/navbar/Navbar';
import Productdetail from './components/product/Productdetail';
import Home from './components/Home';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/product' exact element={<Productdetail />} />
        </Routes>
      </Router>
      {/* <Signup /> */}
    </main>
  );
}

export default App;
