import aboutPhoto from "../Component/Image/about.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className=" bg-hero-bg  h-screen bg-center bg-cover">
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className=" bg-green-500 rounded-md text-xl text-white hover:bg-green-400"
        >
          Back Home
        </Link>
      </div>
      <div className=" h-screen bg-black/50 flex items-center justify-center">
        <div className=" md:flex w-full items-center justify-between ml-10 mr-10">
          <div className="  w-auto ">
            <img src={aboutPhoto} width={5000} alt="" />
          </div>
          <div className=" w-auto ">
            <div className=" text-center ">
              <h1 className=" text-4xl font-bold text-white">
                Welcom to MoheMarket
              </h1>
              <p className=" text-gray-400 font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                laborum inventore incidunt quaerat ex, molestiae quidem maiores
                rem quae, alias qui. Saepe expedita amet corporis repudiandae
                exercitationem aperiam vel, aspernatur cumque modi? Dolorum
                corrupti id alias excepturi, quis deleniti voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
