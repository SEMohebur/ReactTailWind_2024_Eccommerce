import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Navigation
  const navigate = useNavigate();

  //sessionStorage clear
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  //validation check
  const validation = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      alert("Pleas Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Pleas Enter Password");
    }

    return result;
  };

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      fetch("http://localhost:3000/user/" + userName)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            alert("Pleas enter valid username");
          } else {
            if (resp.password === password) {
              alert("Success");
              sessionStorage.setItem("username", userName);
              navigate("/");
            } else {
              alert("Pleas Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          alert("Login Failed due to :" + err.message);
        });
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <form
        onSubmit={ProceedLogin}
        className="  bg-indigo-400 p-10 md:p-20 rounded-md"
      >
        {/*head Title*/}
        <div className=" flex  justify-center ">
          <h1 className=" text-3xl font-bold text-gray-100">
            User Login <hr className="mt-1" />
          </h1>
        </div>
        {/*input section*/}
        <div className=" m-4">
          {/*userName Input*/}
          <div className="mt-2 text-white text-xl">
            <label>Use Name</label>{" "}
            <span className=" text-red-500 font-bold text-2xl">*</span>
          </div>
          <div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className=" pl-2 md:w-96 rounded-md outline-none"
            />
          </div>
          {/*password input*/}
          <div className="mt-2 text-white text-xl">
            <label>Password</label>{" "}
            <span className=" text-red-500 font-bold text-2xl">*</span>
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" pl-2 md:w-96 rounded-md outline-none"
            />
          </div>
        </div>
        {/*button section*/}
        <div className=" flex justify-between">
          <div>
            <button className=" bg-red-500  hover:bg-red-400 duration-200 text-white font-semibold p-1 rounded-md">
              Login
            </button>
          </div>
          <div className=" mt-1">
            <Link
              to={"/registration"}
              className="  bg-green-500 hover:bg-green-400 duration-200 text-white font-semibold p-2 rounded-md "
            >
              New User
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
