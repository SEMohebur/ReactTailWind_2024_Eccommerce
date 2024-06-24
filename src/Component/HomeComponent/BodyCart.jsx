import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
//tost msg
import { ToastContainer } from "react-toastify";

const BodyCart = ({ handleClick }) => {
  //Data Fetch Info
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItem(data.products));
  }, []);

  return (
    <>
      <div className=" p-5">
        {/*Tost msg*/}
        <ToastContainer />
        {/*loading condition div ,,,*/}
        {item == 0 ? (
          <div className=" flex items-center justify-center bg text-4xl">
            Loading...
          </div>
        ) : (
          ""
        )}
        {/*loading condition div ,,,*/}
        <div className="grid grid-row-4 md:grid-cols-4 grid-cols-2 gap-10">
          {/*products cart*/}
          {item.map((element) => {
            return (
              <div
                key={element.id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div className=" relative flex justify-end">
                  <span className=" absolute bg-red-500 text-white p-1 m-1 font-semibold rounded-full">
                    {element.discountPercentage} %
                  </span>
                  <img src={element.thumbnail} className="h-40" alt="name" />
                </div>
                <div className=" flex items-center justify-between m-1">
                  <span className=" text-gray-600 font-semibold">
                    Stock-{element.stock}
                  </span>
                  <span className=" text-indigo-600 font-semibold">
                    {element.brand}
                  </span>
                </div>
                <hr className=" mx-4" />

                <div className="px-6 py-4">
                  <h1 className="font-bold text-xl text-gray-500 mb-2">
                    {element.title}
                  </h1>
                  <p className="text-gray-700  text-sm font-thin">
                    {element.description.slice(1, 30)}
                  </p>
                  <p className="text-red-500  text-md font-bold mt-2">
                    $ {element.price}
                  </p>
                  <span className=" flex items-center gap-1">
                    <FaStar className=" text-yellow-500" />
                    {element.rating}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <button
                    onClick={() => handleClick(element)}
                    className="bg-blue-500 hover:bg-blue-700 duration-200 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

BodyCart.propTypes = {
  handleClick: PropTypes.func,
};

export default BodyCart;
