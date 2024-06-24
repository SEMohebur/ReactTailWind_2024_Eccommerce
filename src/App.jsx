import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/HomeComponent/Home";
import About from "./Component/About";

import Contact from "./Component/Contact";
import CartDetails from "./Component/CartDetails";
import { useState } from "react";

//tost msg
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./Component/LoginRegistration/Registration";
import Login from "./Component/LoginRegistration/Login";

const App = () => {
  // tost msg
  const notify = () => toast("Your desired product has been selected!");

  //Add to cart products, props pass to home component and home to BodyCart
  const [cart, setCart] = useState([]);

  const handleClick = (element) => {
    notify();
    const exsit = cart.find((x) => {
      return x.id === element.id;
    });
    if (exsit) {
      alert("This Product is all ready added");
    } else {
      setCart([...cart, { ...element, quantity: 1 }]);
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handleClick={handleClick} cart={cart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<CartDetails cart={cart} setCart={setCart} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
