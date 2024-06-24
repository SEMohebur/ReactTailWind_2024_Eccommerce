import { TbShoppingBagSearch } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import banner from "../Image/banner.png";
//props error handle
import PropTypes from "prop-types";

const NavBar = ({ cart }) => {
  return (
    <>
      <nav className=" w-full bg-indigo-500  justify-center items-center text-center md:flex md:justify-between">
        {/*Logo*/}
        <div className=" md:ml-6 text-4xl text-white flex items-center justify-center p-2 cursor-pointer">
          <TbShoppingBagSearch />
        </div>

        {/*Input*/}
        <div className=" flex items-center justify-center p-2">
          <input
            placeholder=" Find your product"
            type="text"
            className="bg-gray-300 text-gray-400 p-2 outline-none rounded-l-md"
          />
          <button className=" p-3 font-bold text-gray-500 bg-white rounded-r-md">
            <FiSearch />
          </button>
        </div>

        {/**/}
        {/*About info*/}
        <ul className="md:flex inline-block gap-4 md:mr-6 text-xl text-white">
          <li className=" hover:bg-red-500 rounded-md p-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className=" hover:bg-red-500 rounded-md p-2 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className=" hover:bg-red-500 rounded-md p-2 cursor-pointer mb-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" hover:bg-red-500 rounded-md p-2 cursor-pointer mb-1 flex items-center justify-center text-2xl">
            <Link to="/login">
              <RiAccountCircleFill />
            </Link>
          </li>
        </ul>
        <div className="  md:mr-6 text-4xl text-white flex items-center justify-center p-2 cursor-pointer hover:bg-red-500 md:rounded-md">
          <Link to="/cart">
            <TiShoppingCart />
          </Link>
          <span className=" text-red-500 flex items-center justify-center  bg-white rounded-full h-4 p-1 mb-5 text-sm font-bold pb-2 ml-1">
            <p className="mt-1">{cart.length}</p>
          </span>
        </div>
      </nav>
      <div className=" shadow-md">
        <p className=" m-5 font-serif">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          quibusdam earum corporis fugit assumenda aut, repellat, accusamus
          facilis ipsum nobis, eius vel! Animi quasi ratione nesciunt eius,
          dolore suscipit iure.
        </p>
      </div>
      <div className="  flex items-center justify-center">
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};

//props error handle
NavBar.propTypes = {
  cart: PropTypes.array,
};

export default NavBar;
