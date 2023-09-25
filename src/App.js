import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './components/Home'
import Cartcontext from './Context/Cartcontext'
import ProductPage from './components/ProductPage'

const App = () => {
  return (
<BrowserRouter>
<Cartcontext> 
<Header/>
<Routes>
<Route  path='/' element={<Home/>} exact/>
<Route  path='/cart' element={<Cart/>} />
<Route  path='/product/:productId' element={<ProductPage/>} />
</Routes>
<Footer/>
</Cartcontext>
</BrowserRouter>
  )
}

export default App