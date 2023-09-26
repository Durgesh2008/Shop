const { createContext, useState } = require("react");

export const ShopConText=createContext();


const Cartcontext = ({children}) => {
const [Cart,setCart]=useState([]);
const [Value, setValue] = useState('');

  return (
    <ShopConText.Provider value={{Cart,setCart,Value, setValue}}>
        {children}
    </ShopConText.Provider>
  )
}

export default Cartcontext;