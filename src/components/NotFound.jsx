import "../NotFound.css";
import ButtonFound from "../UI/ButtonFound.jsx";

const NotFound = () => {


  return (
    <section class="page_404 w-full m-auto flex flex-col justify-center items-center">
      <h2 className="text-8xl z-10">404</h2>

      <div className="w-[35%] -my-[1%]">
        <img
          className="w-full object-contain"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-10 justify-center items-center mb-5">
        <h1 className="text-4xl">Look like you're lost</h1>
        <h2 className="text-3xl">the page you are looking for not avaible!</h2>
      </div>

      <ButtonFound to="/bookLibrary" className="text-3xl" >Go to Home</ButtonFound>
    </section>
  );
};

export default NotFound;
