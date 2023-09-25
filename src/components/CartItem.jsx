import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../Context/Cartcontext';

const CartItem = ({Cartdata,setTotal,Total}) => {
    const {Cart,  setCart } = useContext(ShopConText)
    const [ThisTotal,setThisTotal]=useState(Cartdata.price)
      const [qnt,setqnt]=useState(1);
    const HandleRemovetocart=()=>{
        setCart(Cart.filter((item) => item.id !== Cartdata.id));
    }

    const DecreaseQnt=()=>{
        if(qnt>1){
            setqnt((pre)=>pre-1);
            setThisTotal(ThisTotal-Cartdata.price)
            setTotal(Total-Cartdata.price)
        }else{
            alert("आप cart remove कर सकते हैं")
        }
    }
    const IncreaseQnt=()=>{
        if(qnt<20){
            setqnt((pre)=>pre+1);
            setThisTotal(ThisTotal+Cartdata.price)
            setTotal(Total+Cartdata.price)
        }else{
            alert("आप प्रत्येक प्रकार की केवल 20 वस्तुएँ ही खरीद सकते हैं")
        }
    }

  useEffect(()=>{
    setTotal((pre)=>pre+ThisTotal)
  },[])
  return (
   <>
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="md:w-20 w-12">
              <img className="md:h-24 h-16" src={Cartdata.image} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-[12px] md:text-sm">{Cartdata.title.slice(0,30)+"...."}</span>
              
              <button onClick={HandleRemovetocart} type='button' className="font-semibold hover:text-red-500 text-gray-500 text-[10px] md:text-xs">Remove</button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg onClick={DecreaseQnt} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="number"   value={qnt} defaultValue={1}/>

            <svg onClick={IncreaseQnt} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-[10px] md:text-sm">${Cartdata.price}</span>
          <span className="text-center w-1/5 font-semibold text-[10px] md:text-sm">${parseFloat(ThisTotal).toFixed(3)}</span>
        </div>
   </>
  )
}

export default CartItem