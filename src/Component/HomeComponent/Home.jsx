import { useEffect } from "react";
import BodyCart from "./BodyCart";
import Footer from "./Footer";
import NavBar from "./NavBar";

//props error handle
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Home = ({ handleClick, cart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavBar cart={cart} />
      <BodyCart handleClick={handleClick} />
      <Footer />
    </div>
  );
};

//props error handle
Home.propTypes = {
  handleClick: PropTypes.func,
  cart: PropTypes.array,
};
export default Home;
