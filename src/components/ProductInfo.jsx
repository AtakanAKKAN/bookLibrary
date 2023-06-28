import { useParams } from "react-router-dom";
import ProductInfoContact from "./ProductInfoContact";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const ProductInfo = () => {
  
  const {data} = useContext(MyContext)

  const {id} = useParams();

  const product = data.find(product => product.id === Number(id));

  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center my-5">
      <ProductInfoContact product={product}  />
    </div>
  );
};

export default ProductInfo;


