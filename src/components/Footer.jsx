import { Link } from "react-router-dom";
import ScrollToTopButton from "../UI/TopButton";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-600 p-8 absolute bottom-0 right-0 left-0 footer">
      <div className="w-[95%] flex justify-between m-auto items-center">
        <div className="flex flex-col text-xl max-sm:text-lg">
          <span>GitHub Hesaplarımız:</span>
          <div className="text-white ">
            <Link to="https://github.com/AtakanAKKAN" target="_blank" className="hover:underline">
              Atakan
            </Link>
            <Link to="https://github.com/bunyaminkardes" target="_blank" className="mx-3 hover:underline">
              Bünyamin
            </Link>
            
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
