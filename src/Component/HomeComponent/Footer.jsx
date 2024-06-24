import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-600 grid grid-row-4 md:grid-cols-4 gap-2 text-center p-2 ">
        {/* About Saction */}
        <div className="About ">
          <h1 className=" text-2xl font-bold font-serif text-gray-100">
            About Us
          </h1>
          <ul className="   text-gray-400 font-mono cursor-pointer p-1 ">
            <li> About ocz.com</li>
            <li>Terms & Conditions</li>
            <li>Accessibility Statement</li>
            <li>Privacy Policy</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Detail Saction */}
        <div className="Detail ">
          <h1 className="text-2xl font-bold font-serif text-white">Detail</h1>
          <ul className="  text-gray-400 font-mono cursor-pointer p-1 ">
            <li> Products-Collection</li>
            <li>Product Item</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/*Contact Saction*/}
        <div className=" text-gray-400">
          <h1 className=" text-2xl text-white font-bold">Contact</h1>
          <ul>
            <a
              href="https://www.facebook.com/md.mohebur.566/"
              className=" flex items-center justify-center gap-2"
            >
              Facebook <FaFacebookSquare />
            </a>
            <li className=" flex items-center justify-center gap-2">
              Instagram <CiInstagram />
            </li>
            <li className=" flex items-center justify-center gap-2">
              LinkedinIn <FaLinkedinIn />
            </li>
            <li className=" flex items-center justify-center gap-2">
              Whatsapp <FaWhatsappSquare />
            </li>
          </ul>
        </div>

        {/* Adress Saction */}
        <div className="Adress ">
          <h1 className="text-2xl font-bold font-serif text-white">Adress</h1>
          <ul className="text-gray-400 font-mono cursor-pointer p-1 ">
            <li> Country : Bangladesh</li>
            <li> city : Dhaka</li>
            <li> District : Narayanganj</li>
          </ul>
        </div>
      </div>
      <div className=" w-full p-2 flex items-center justify-center bg-gray-400 ">
        <h1>© 2023-2024 MoheMarket.com</h1>
      </div>
    </>
  );
};

export default Footer;
