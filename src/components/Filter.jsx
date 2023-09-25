import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Accordian from './Accordian';
const Filter = ({HandleCategorydropDown,CategoryDropdown,AllCategoryProduct,setSelectCate,setSelectRating}) => {
  const ResetAll=()=>{
    setSelectCate('');
    setSelectRating('');
  }
  return (
    
    <form className="absolute z-10 w-[170px] rounded-lg shadow-lg p-2 ">
      {
        console.log("filter Rendered")
      }
        <h1 className='font-semibold text-center py-2 text-2xl'>Filters</h1>
    <button onClick={HandleCategorydropDown} className="text-[black] gap-1 mt-2 flex justify-center items-center   font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Categories
      {CategoryDropdown ? <BsChevronUp /> : <BsChevronDown />}
    </button>

    <div  className={`z-10 ${CategoryDropdown ? 'opacity-100' : 'opacity-0 hidden'} transition-all duration-500 ease-in  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-full`}>

     
      {
        AllCategoryProduct && AllCategoryProduct.map((ele, index) => {
          return (

            <div key={index} className="flex p-1 items-center mb-4">
              <input onInput={(e) => { setSelectCate(e.target.value) }} name='Category' type="radio" value={ele} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">{ele}</label>
            </div>
          )
        })
      }
    </div>
    <h1 className=' text-center text-[black] text-lg mt-2'>Sort By</h1>
    <div className="flex  items-start gap-2 justify-center">
      <label c >Rating:</label>
      <select onChange={(e)=>{setSelectRating(e.target.value)}} >
        <option value='1'>1 & above</option>
        <option value='2'>2 & above</option>
        <option value='3'>3 & above</option>
        <option value='4'>4 & above</option>
        <option value='5'>5</option>
        
    </select>

    </div>
  
    <button onClick={ResetAll} type='reset'> reset</button>
  </form>
  )
}

export default Filter