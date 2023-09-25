import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopConText } from '../Context/Cartcontext';
import RatingFill from './RatingFill';
import RatingUnfill from './RatingUnfill';

const SingleCart = ({product}) => {
  
    const {Cart,setCart}=useContext(ShopConText)
    const Rating=Math.round(product.rating.rate);
    const RateArr=[1,1,1,1,1].fill(0,Rating,5)
    

const HandleAddtocart=()=>{
    if (!Cart.some((item) => item.id === product.id))
         setCart([...Cart,product]);
   else{
    console.log("Duplicate")
   }
  
}

const HandleRemovetocart=()=>{
    setCart(Cart.filter((item) => item.id !== product.id));
}
  return (
  <>

  <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <Link to={`product/${product.id}`} className="relative cursor-pointer mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
    <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.image} alt="product image" />
 
 <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
      <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
      <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
      <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
    </div> 
    <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
   <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.rating.count+" in stock"}</span>
  </Link>
  <div className="mt-4 px-5 pb-5">
 
      <h5 className="text-xl tracking-tight text-slate-900">{product.title.slice(0,30)+"...."}</h5>

    <div className="mt-2 mb-5 flex items-center justify-between">
      <p className=''>
        <span className="text-3xl font-bold text-slate-900">{'$'+product.price}</span>
      </p>
      <div className="flex items-center justify-center">
        {
          RateArr.map((ele,index)=>{
           return ( ele===1? <RatingFill key={index}/>:<RatingUnfill key={index} />);
          })
        }
       
      
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{Math.round(product.rating.rate)}</span>
      </div>
    </div>
   
<div >
{ !Cart.some(item => item.id === product.id)?( <Link to={'/'} onClick={HandleAddtocart} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Link >):( <Link to={'/'} onClick={HandleRemovetocart} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Remove to cart</Link >)}
  
</div>
   
  </div>
</div>



  </>
  )
}

export default SingleCart