import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
const Filter = ({HandleCategorydropDown,CategoryDropdown,AllCategoryProduct,setSelectCate,setSelectRating}) => {
  const ResetAll=()=>{
    setSelectCate('');
    setSelectRating('');
  }
  return (
    
    <form className="fixed top-[13%] flex flex-col items-center justify-start  z-50 w-[190px] bg-[#36c5d2]   shadow-lg p-2 ">
     
        <h1 className='font-semibold text-[white] text-center py-2 text-xl'>Filters</h1>
    <button onClick={HandleCategorydropDown} className="text-[white] gap-1 mt-2 flex justify-center items-center   font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Categories
      {CategoryDropdown ? <BsChevronUp /> : <BsChevronDown />}
    </button>

    <div  className={`z-10 ${CategoryDropdown ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity  bg-[#36c5d2] duration-500 ease-in  text-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-full`}>

     
      {
        AllCategoryProduct && AllCategoryProduct.map((ele, index) => {
          return (

            <div key={index} className="flex p-1 items-center mb-4">
              <input onInput={(e) => { setSelectCate(e.target.value) }} name='Category' type="radio" value={ele} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="ml-2 text-sm text-white font-medium  dark:text-gray-300 capitalize">{ele}</label>
            </div>
          )
        })
      }
    </div>
    
    <div className="flex flex-col  items-center gap-2 justify-center">
      <label className='text-white text-center' >Rating:</label>
      <select className='bg-[#36c5d2] text-white border-none outline-none' onChange={(e)=>{setSelectRating(e.target.value)}} >
        <option value='1'>1 & above</option>
        <option value='2'>2 & above</option>
        <option value='3'>3 & above</option>
        <option value='4'>4 & above</option>
        <option value='5'>5</option>
        
    </select>

    </div>
  
    <button className='text-white my-4 bg-[#467177] p-2 font-semibold rounded-md' onClick={ResetAll} type='reset'>Clear All</button>
  </form>
  )
}

export default Filter