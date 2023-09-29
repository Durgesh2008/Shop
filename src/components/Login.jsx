import React, { useContext, useState } from 'react'
import { ShopConText } from '../Context/Cartcontext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { setIsuserLogin} = useContext(ShopConText);
    const [Crediential,setCrediential]=useState({
        username:'',password:''
    });
   
    const handleInput=(e)=>{
     setCrediential({...Crediential,[e.target.name]:e.target.value})
    }
    const LoginHandle=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('https://fakestoreapi.com/auth/login',Crediential);
            const resData=await res.data;
            console.log(resData)
            setIsuserLogin(true)
        } catch (error) {
            alert("login failed")
        }
    }
     return (
 <>

 <section className="bg-gray-50 dark:bg-gray-900 py-3 ">
  <div className="flex flex-col items-center justify-center px-6 py-1 mx-auto my-2">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in 
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input onInput={handleInput} type="text" name="username" value={Crediential.username}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onInput={handleInput} type="password" name="password" value={Crediential.password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input  id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link to={'/'} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  <button onClick={LoginHandle} type="submit" className=" w-3/4 mx-auto bg-red-400 text-white  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transform active:scale-75 transition-transform">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to={'/'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
 </>
  )
}

export default Login