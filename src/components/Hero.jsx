import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green-400 font-bold p-2"> GROWING WITH PASSION</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with comlogik.
        </h1>
        <div className="-z-40">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            The best and reliable healthcare system provider
          </p>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "We produce product for Hospitals",
              1000,
              "We help small businesses",
              1000,
              "We make our clients satisfied",
              1000,
              "We change the game",
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <button className="bg-green-600 rounded-md w-[200px] h-[50px] font-medium my-4 py-3 mx-auto text-black">
          <Link to="/about">Get Started </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
