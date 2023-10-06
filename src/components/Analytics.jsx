import React from "react";
import About from "../assets/about-process.gif";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16  px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={About} alt="/" />
        <div>
          <p className="text-blue-800 font-bold flex justify-center text-3xl w-full">
            COMLOGIK'S DASHBOARD
          </p>
          <h1 className="flex justify-center font-bold text-2xl pt-4 pb-4">
            Manage your Hospital needs
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            pariatur sunt ad facere aliquam, ullam, ex eos placeat animi quas
            fugiat qui laboriosam, corrupti vel officia sit quaerat rem quos.
          </p>
          <button className="bg-blue-600 rounded-md w-[200px] h-[50px] font-medium my-4 py-3 mx-auto text-white flex justify-center">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
