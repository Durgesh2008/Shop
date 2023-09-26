import React, { useContext, useEffect, useState } from 'react'


import SingleCart from './SingleCart'
import axios from 'axios';
import Filter from './Filter';
import { ShopConText } from '../Context/Cartcontext';

// *********************************** Start Component*************************************

const Home = () => {
  // ----------------------------------State Here--------------------------------------------------------------------
  const [Products, setProducts] = useState([]);
  
  const [AllCategoryProduct, setAllCategoryProduct] = useState([]);
  const [CategoryDropdown, setCategoryDropdown] = useState(false);
  const [SelectCate, setSelectCate] = useState('')
  const [SelectRating,setSelectRating]=useState('')
  
  const {Value, setValue}=useContext(ShopConText)

  // ------------------------------- Functions Here--------------------------------------

  const FetchProduct = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      const resData = await res.data;
      setProducts(resData);
    } catch (error) {
      console.log("error is home component in FetchProduct function")
    }
  }



  const FetachAllCategoryProduct = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      const resData = await res.data;
      setAllCategoryProduct(resData);
    } catch (error) {
      console.log("error is home component in AllCategoryProduct function")
    }
  }



  



  const HandleCategorydropDown = () => {
    setCategoryDropdown(!CategoryDropdown)
  }

  const RatingSorter=()=>{
   const data= Products && Products.filter((ele) => {
      return (Math.round(ele.rating.rate)>=SelectRating)
    })
    return data;
  }


  // -------------------------- UseEffects Here-----------------------------------------------------------



  useEffect(() => {
    FetchProduct();
    FetachAllCategoryProduct()
  }, [])

  // UseEffect for Rating 
useEffect(()=>{
  if(SelectRating!==''){
  setProducts( RatingSorter())
  
  }else{
    FetchProduct();
  }
},[SelectRating])


  return (
    <>
{console.log("home Rendered")}
      <section className="text-gray-600 body-font overflow-y-auto">
        <div className="container  w-full mx-auto">
        

          
          <Filter HandleCategorydropDown={HandleCategorydropDown} CategoryDropdown={CategoryDropdown} AllCategoryProduct={AllCategoryProduct} setSelectCate={setSelectCate} setSelectRating={setSelectRating}/>
          <div className="flex w-[80%] flex-wrap items-center justify-center mx-auto gap-4 ">
            {
            
              SelectCate === '' ?
                Products && Products.filter((ele) => {
                  return (ele.title.toLowerCase().includes(Value.toLowerCase()))
                }).map((ele) => {
                  return (<SingleCart key={ele.id} product={ele} />)
                })
                : (
                  Products && Products.filter((ele) => {
                    return (ele.category.toLowerCase().includes(SelectCate.toLowerCase()))
                  }).map((ele) => {
                    return (<SingleCart key={ele.id} product={ele} />)
                  })
                )
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Home