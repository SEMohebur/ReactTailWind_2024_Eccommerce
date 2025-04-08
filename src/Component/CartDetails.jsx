import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartDetails = ({ cart, setCart }) => {
  /* product Increment method*/
  const increment = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((item) => {
        return item.id === product.id
          ? { ...exsit, quantity: exsit.quantity + 1 }
          : item;
      })
    );
  };

  /* product decrement method*/
  const decrement = (product) => {
    if (product.quantity <= 1) {
      alert("1 Product roming");
    } else {
      const exsit = cart.find((x) => {
        return x.id === product.id;
      });
      setCart(
        cart.map((item) => {
          return item.id === product.id
            ? { ...exsit, quantity: exsit.quantity - 1 }
            : item;
        })
      );
    }
  };

  /* remove product method*/
  const removeCard = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.quantity > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  /*Total Price count method*/

  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className=" w-full h-screen ">
      <div className="flex items-center gap-4 justify-center">
        <Link
          to="/"
          className=" bg-green-400 hover:bg-green-500 duration-200 rounded-md text-white p-1 mt-2 "
        >
          Back Home
        </Link>
        <p className=" text-2xl font-bold text-gray-600">
          Total:$ {totalPrice}
        </p>
      </div>
      {cart.length === 0 && (
        <div className=" flex items-center justify-center ">
          <h1 className=" m-2 text-xl font-bold text-gray-500">
            {" "}
            Card is empty pleas selact a product
          </h1>
          <Link
            to="/"
            className=" bg-red-500 text-white font-bold p-1 rounded-md m-2"
          >
            Shop Now
          </Link>
        </div>
      )}
      <div className=" card-container w-full h-screen  ">
        <div className=" card-product grid grid-row-4 md:grid-cols-5 grid-cols-1 gap-10">
          {cart.map((item) => {
            return (
              <div
                key={item.id}
                className=" cardBox shadow rounded flex m-2 p-2"
              >
                <div className="card-product-container">
                  <div className="card-img-box ">
                    <img
                      className=" w-20 text-center"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>
                  <div className=" card_detail text-xl">
                    <h2>{item.title}</h2>
                    <h3 className=" text-red-500"> Price : ${item.price}</h3>
                    <button
                      onClick={() => decrement(item)}
                      className=" quantityDec"
                    >
                      -
                    </button>
                    <input
                      className=" border w-8 h-5"
                      type="text"
                      value={item.quantity}
                    ></input>
                    <button
                      onClick={() => increment(item)}
                      className=" quantityInc"
                    >
                      +
                    </button>
                    <h3> Sub Total: $ {item.price * item.quantity}</h3>
                  </div>
                  <button
                    onClick={() => removeCard(item)}
                    className=" remove text-red-500 font-bold bg-gray-200 w-8 p-1 rounded-full hover:bg-red-500 hover:text-white duration-200 "
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <button className=" bg-red-500 text-white p-2 rounded-md">
              Check Out
            </button>
            <p className=" text-2xl font-bold text-gray-600">
              Total:$ {totalPrice}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

CartDetails.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default CartDetails;
