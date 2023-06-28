import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-5 bg-[#212528] text-white">
      <div className="w-[95%] m-auto flex justify-between items-center text-3xl">
        <Link to="/bookLibrary">App</Link>
        <ul className="flex gap-16 text-2xl">
          <li className="max-sm:hidden">Kitaplar</li>
          <li>
            <Link to="bookLibrary/Search" className="opacity-75">
              Kitap Ara
            </Link>
          </li>
          <li className="relative opacity-75 max-sm:hidden">
            Yayınevleri
            <span className="absolute top-2 ml-1">
              <AiFillCaretDown />
            </span>
          </li>
          <li className="relative opacity-75 max-sm:hidden">
            Türler
            <span className="absolute top-2 ml-1">
              <AiFillCaretDown />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
