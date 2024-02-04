import React from "react";
import MenuIcon from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className=" navbar max-md:ml-40 w-full flex justify-between px-16 mx-10 my-5 max-sm:mx-1 max-sm:px-0 max-sm:my-1">
      <div className="navbar-start max-sm:ml-12 ml-12">
        {/* Image logo */}
        <a className="sm:ml-0">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      {/* Navlinks desktop*/}
      <div className="navbar-end hidden md:flex max-md:mr-10">
        <ul className="menu menu-horizontal  lg:px-1 md:px-0">
          <li className="lg:px-2 hover:underline font-bold text-sm  md:px-1">
            <a href="#product">Product</a>
          </li>
          <li className="lg:px-2  md:px-0 hover:underline font-bold text-sm">
            <a href="#feature">Feature</a>
          </li>
          <li className="lg:px-2  md:px-0  hover:underline text-sm font-bold">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="lg:px-2  md:px-0 hover:underline text-sm font-bold">
            <a href="#link">.</a>
          </li>
          <button
            type="button"
            className="text-gray-400 lg:px-2  md:px-0 font-bold hover:underline 
          "
          >
            Login
          </button>
        </ul>
      </div>
      <div className="dropdown dropdown-end ">
        {/* Button for mobile */}
        <div tabIndex={0} role="button" className="  btn btn-ghost md:hidden">
          <img src={MenuIcon} alt="menu-icon" className="" />
        </div>
        {/* Mobile */}
        <ul
          tabIndex={0}
          className=" uppercase menu menu-lg dropdown-content mt-3 z-[1] px-3 py-3 rounded-none shadow-xl bg-base-100 w-72 mr-5 items-center"
        >
          <li className=" hover:underline font-bold text-sm">
            <a href="#product">Product</a>
          </li>
          <li className=" hover:underline font-bold text-sm">
            <a href="#feature">Feature</a>
          </li>
          <li className="  hover:underline text-sm font-bold">
            <a href="#pricing">Pricing</a>
          </li>
          <button
            type="button"
            className="text-gray-400 font-bold hover:underline 
            py-5 text-lg w-full uppercase border-t-2 border-t-gray-400
          "
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
