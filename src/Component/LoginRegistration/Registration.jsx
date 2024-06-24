import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  //All State
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [country, countryChange] = useState("india");
  const [address, addressChange] = useState("");
  const [gender, genderChange] = useState("male");

  //Navigate
  const navigate = useNavigate();

  //Validation
  const isValidate = () => {
    let isProcead = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isProcead = false;
      errormessage += "UserName ";
    }
    if (name === null || name === "") {
      isProcead = false;
      errormessage += "FullName ";
    }
    if (password === null || password === "") {
      isProcead = false;
      errormessage += "Password ";
    }
    if (email === null || email === "") {
      isProcead = false;
      errormessage += "email ";
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      isProcead = false;
      errormessage += " phone ";
    }

    if (address === null || address === "") {
      isProcead = false;
      errormessage += " Address ";
    }

    if (!isProcead) {
      alert(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProcead = false;
        alert("Pleas enter the valid email");
      }
    }
    return isProcead;
  };

  //Form Submit method and data post db.json
  const handleSubmit = (e) => {
    e.preventDefault();
    let stateObj = {
      id,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };
    if (isValidate()) {
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(stateObj),
      })
        .then(() => {
          alert("registration succesfull");
          navigate("/login");
        })
        .catch((err) => {
          alert("faild:" + err.message);
        });
    }
  };
  //Form Submit method and data post db.jsonqee
  return (
    <div className=" h-screen flex items-center justify-center ">
      <div className="  bg-gray-300 flex items-center justify-center">
        <div className="  border ">
          {/*Title Section*/}
          <div className=" border text-center bg-gray-400">
            <h1 className="text-white text-xl font-bold">User Registration</h1>
          </div>
          {/*form */}
          <form onSubmit={handleSubmit}>
            <div className=" container md:grid grid-cols-2 m-2 ">
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">User Name</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={id}
                    onChange={(e) => idChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  />
                </div>
              </div>
              {/*label-input*/}
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">Password</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => passwordChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  />
                </div>
              </div>
              {/*label-input*/}
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">full Name</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => nameChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  />
                </div>
              </div>
              {/*label-input*/}
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">Email</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => emailChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  />
                </div>
              </div>
              {/*label-input*/}
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">Phone</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  />
                </div>
              </div>
              {/*label-input*/}
              {/*label-input*/}
              <div className=" card">
                <div>
                  <label className="text-gray-500">Country</label>{" "}
                  <span className="text-red-500 font-bold text-xl">*</span>
                </div>
                <div className=" w-full">
                  <select
                    value={country}
                    onChange={(e) => countryChange(e.target.value)}
                    className=" outline-none text-gray-500 text-center rounded-md cursor-pointer mr-2"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              {/*label-input*/}
            </div>
            {/*textArea*/}
            <div className=" m-2">
              <div>
                <label className="text-gray-500">Address</label>
              </div>
              <div>
                <input
                  value={address}
                  onChange={(e) => addressChange(e.target.value)}
                  className=" w-full h-20 rounded-md outline-none pl-2 pr-2 text-gray-500"
                />
              </div>
            </div>
            {/*textArea*/}

            {/*gender*/}
            <div className=" m-2 text-gray-500 ">
              <div className="gender ">
                <label>Gender</label>
              </div>
              <div className=" flex gap-3 text-sm">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => genderChange(e.target.value)}
                  />
                  <label>Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => genderChange(e.target.value)}
                  />
                  <label>Female</label>
                </div>
              </div>
            </div>
            {/* submit button*/}
            <div className=" flex items-center justify-center m-2 gap-2">
              <button className=" bg-indigo-500 text-white p-1 rounded-md hover:bg-indigo-400 duration-200">
                Register
              </button>
              <button className=" bg-red-500 text-white p-1 rounded-md hover:bg-red-400 duration-200">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
