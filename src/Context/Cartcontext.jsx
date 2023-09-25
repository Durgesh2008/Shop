const { createContext, useState } = require("react");

export const ShopConText=createContext();


const Cartcontext = ({children}) => {
const [Cart,setCart]=useState([]);

  return (
    <ShopConText.Provider value={{Cart,setCart}}>
        {children}
    </ShopConText.Provider>
  )
}

export default Cartcontext;