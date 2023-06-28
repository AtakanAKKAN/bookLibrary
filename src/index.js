import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./Context/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>
);
