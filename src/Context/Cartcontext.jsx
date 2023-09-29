const { createContext, useState } = require("react");

export const ShopConText=createContext();


const Cartcontext = ({children}) => {
const [Cart,setCart]=useState([]);
const [Value, setValue] = useState('');
const [IsuserLogin,setIsuserLogin]=useState(false);

  return (
    <ShopConText.Provider value={{Cart,setCart,Value, setValue,IsuserLogin,setIsuserLogin}}>
        {children}
    </ShopConText.Provider>
  )
}

export default Cartcontext;