import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import "./index.css";
import MainHeader from "./components/MainHeader";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHeader />
              <Products />
            </>
          }
        />
        <Route path="/Search" element={<Search />} />
        <Route path="/Product-Info/:id" element={<ProductInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
