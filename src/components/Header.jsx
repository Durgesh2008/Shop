import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopConText } from "../Context/Cartcontext";
import { FaSearch,FaRegUserCircle } from "react-icons/fa";
import {FcShop} from 'react-icons/fc'

const Header = () => {
  const { Cart, Value, setValue,IsuserLogin } = useContext(ShopConText);
  const SearchItemFunction = (e) => {
    setValue(e.target.value.trim());
  };

  return (
    <>
      <header className="text-gray-600 bg-[#2874f0] w-full body-font sticky top-0 z-10  shadow-lg mx-auto">
        <div className="container w-[80%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link
            to={"/"}
            className="flex w-[20%]  title-font font-medium items-center text-[white] mb-4 md:mb-0 "
          >
            <div className="w-3/4 flex items-center justify-center">
            <FcShop className="h-1/4 w-1/4"/>
            <span className="ml-3 font-semibold text-xl">Shop</span>
            </div>
          </Link>
          <div className="w-[45%]">
            <div className="relative flex items-center w-full h-12 rounded-[6px] focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <FaSearch />
              </div>

              <input
                onInput={SearchItemFunction}
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                value={Value}
              />
            </div>
          </div>
          <nav className="md:ml-auto w-[30%] flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 text-[white] font-medium">
              Home
            </Link>
            <Link to={"/cart"} className="mr-5 text-[white] font-medium">
              Cart ({Cart.length})
            </Link>
            {
              !IsuserLogin?(<Link to={"/login"} className="mr-5 text-[white] font-medium">
              Login
               </Link>):(<figure className="flex justify-center items-center gap-1">
              <FaRegUserCircle className="text-white h-10 w-6"/>
              <figcaption className="text-white" >User</figcaption>
            </figure>)
            }
            
            

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
