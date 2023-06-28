import Button from "../UI/Button";

const ProductInfoContact = ({ product }) => {
  return (
    <>
      <h2 className="text-3xl">{product.name}</h2>
      <span className="text-xl my-5 w-[50%] text-center max-sm:text-justify max-sm:w-[90%]">
        {product.info}
      </span>
      <Button className="my-3" to="/bookLibrary">
        Ana Sayfa
      </Button>
      {/* React Router Link Yönetme */}
      <div className="w-[350px] h-[550px]">
        <img className="w-full h-full object-cover" src={product.img} alt="" />
      </div>
    </>
  );
};

export default ProductInfoContact;
