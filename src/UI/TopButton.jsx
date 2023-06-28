import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const ScrollToTopButton = () => {
  
  const {handleClick} = useContext(MyContext)
 
  return (
    <button className="text-2xl" onClick={handleClick}>Başa Dön</button>
  );
};

export default ScrollToTopButton;
