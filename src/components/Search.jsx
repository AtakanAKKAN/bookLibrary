import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";

const Search = () => {
  const { data } = useContext(MyContext);

  const [filteredList, setFilteredList] = new useState(data);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = data.filter((item) => {
      return item.name.toLowerCase().indexOf(query) !== -1;
    });
    setFilteredList(updatedList);
  };

 

  return (
    <>
      <div className="flex w-[70%] m-auto justify-center items-center my-5">
        <div className="w-full h-full ">
            <input
              onChange={filterBySearch}
              className="w-full p-[0.6rem] box-border outline-none hover:border-red-400 focus:border-red-400 border-solid border-2 rounded"
              type="text"
              placeholder="Kitap ismi giriniz..."
            />
        </div>
        <Button className="!bg-red-400 !w-[10rem]">Ara</Button>
      </div>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-[95%] m-auto gap-10">
        {filteredList.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Search;
