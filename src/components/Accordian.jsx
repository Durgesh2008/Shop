import React, { useState } from 'react'

const Accordian = () => {
    const [open,setopen]=useState(true)
  return (
    <>
    
<div >
  <h2 >
    <button onClick={()=>{setopen(!open)}} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" >
      <span>Category</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div className={`${open?'hidden':''}`} aria-labelledby="accordion-collapse-heading-1">
   
  </div>

</div>

    </>
  )
}

export default Accordian