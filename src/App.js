import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductList from './user/pages/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './auth/pages/LoginPage'
import SignUp from  './auth/pages/SignUp'
// import ProductDetail from './user/pages/ProductDetail'
// import Cart from './user/pages/ProductDetail'

function App() {
  return (
  <>
   <Navbar />
  <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<ProductList />}/>
        {/* <Route path="/product-details" element={<ProductDetail />}/> */}
        {/* <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/> 
         <Route path="/orders" element={<Orders />}/> */}
      </Routes>
    </Router>
  <Footer/>
  </>
 
  )
}

export default App;