import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductList from './user/pages/ProductList'
function App() {
  return (
    <div>
      <Navbar /> 
     <ProductList />
      <Footer />
      <productDetails />
    </div>
  )
}

export default App