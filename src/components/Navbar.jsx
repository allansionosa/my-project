import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, SetNav] = useState(true);

  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <a href="/" className="w-full text-3xl font-bold text-green-500">
        COMLOGIK.
      </a>
      <ul className="hidden md:flex">
        <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
          <Link to="/company">Company</Link>
        </li>
        <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? " fixed left-0 top-0 w-[90%] h-full border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <a href="/" className="w-full text-3xl font-bold text-green-500 m-4">
          COMLOGIK.
        </a>
        <ul onClick={handleNav} className="uppercase block md:hidden">
          <li className="p-4  border-b border-gray-600 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
            <Link to="/company">Company</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
