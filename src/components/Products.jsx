import { useContext } from "react";
import ProductItem from "./ProductItem";
import { MyContext } from "../Context/MyContext";

const Products = () => {

  // useContext yerine props ile göndermeyi öğren
    const {data} = useContext(MyContext);


  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-[95%] m-auto gap-10">
     {data.map((product) => (
        <ProductItem product={product} key={product.id} />
     ))}
      
    </div>
    
  );
};

export default Products;
