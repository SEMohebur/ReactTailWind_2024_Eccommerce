import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" bg-gray-500 w-full h-screen flex items-center justify-center">
      <div className=" bg-white">
        <h1 className=" flex items-center justify-center text-3xl text-gray-500 mt-5">
          Contact Us
        </h1>
        <hr />
        <form className=" p-5">
          <div className="name m-2">
            <div>
              <label>Name*</label>
            </div>
            <input type="text" className=" border outline-none pl-2" />
          </div>
          <div className="name m-2">
            <div>
              <label>Name*</label>
            </div>
            <input type="text" className=" border outline-none pl-2" />
          </div>
          <div>
            <div>
              <label>Message*</label>
            </div>
            <input
              type="text"
              className=" w-full h-20 border outline-none p-2"
            />
          </div>
          <div className=" flex items-center justify-center m-2 bg-green-400 text-white font-bold">
            <Link to="/">Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
