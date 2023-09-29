import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ScrollToTop from "react-scroll-to-top";
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './components/Home'
import Cartcontext from './Context/Cartcontext'
import ProductPage from './components/ProductPage'
import Login from './components/Login';

const App = () => {
  return (
<BrowserRouter>
<Cartcontext> 
<Header/>
<Routes>
<Route  path='/' element={<Home/>} exact/>
<Route  path='/cart' element={<Cart/>} />
<Route  path='/product/:productId' element={<ProductPage/>} />
<Route path='/login' element={<Login/>} />
</Routes>
<ScrollToTop smooth color='red'  />
<Footer/>
</Cartcontext>
</BrowserRouter>
  )
}

export default App