import {createContext} from "react";
import ProductData from "../ProductData"


export const MyContext = createContext();

export const MyProvider = ({children}) => {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    

    const data = ProductData

    const value = {
        data,
        handleClick,
    }

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

