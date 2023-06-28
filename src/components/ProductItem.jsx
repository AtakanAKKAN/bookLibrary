import { useContext } from "react";
import Button from "../UI/Button.jsx";
import { MyContext } from "../Context/MyContext.jsx";


const ProductItem = ({product}) => {

    const {name, img, about, id} = product;

    const {handleClick} = useContext(MyContext);
  
  return (
    
      <div className="w-[100%] my-5">
        <img
          className="w-[100%] object-cover"
          src={img}
          alt=""
        />
        <div className="w-full my-4">
          <h2 className="text-2xl">{name}</h2>
          <p>{about}</p>
        </div>
        
        <Button onClick={handleClick} to={`/Product-Info/${id}`}>Görüntüle</Button>
        
      </div>
   
  )
}

export default ProductItem