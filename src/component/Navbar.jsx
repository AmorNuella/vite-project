import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo.svg";

function Navbar() {
  const Navlink = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Contact", path: "/more" },
    { id: 4, link: "Features", path: "/features" },
  ];
  return (
    <div className=" navbar max-md:ml-40 w-full flex justify-between px-16 mx-10 my-5 max-sm:mx-1 max-sm:px-0 max-sm:my-1 max-sm:ml-2">
      <div className="navbar-start max-sm:ml-12 ml-12">
        {/* Image logo */}
        <a className="sm:ml-0">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      {/* Navlinks desktop*/}
      <div className="navbar-end hidden md:flex max-md:mr-10">
        <ul className="menu menu-horizontal  lg:px-1 md:px-0">
          {Navlink.map((link) => (
            <li
              className="lg:px-2 hover:underline font-bold text-sm  md:px-1"
              key={link.id}
            >
              <Link
                to={link.path}
                className="lg:px-2  md:px-0 hover:underline text-sm font-bold"
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-end ">
        {/* Button for mobile */}
        <div tabIndex={0} role="button" className="  btn btn-ghost md:hidden">
          <img src={MenuIcon} alt="menu-icon" className="" />
        </div>
        {/* Mobile nav list */}
        <ul
          tabIndex={0}
          className=" uppercase menu menu-lg dropdown-content mt-3 z-[1] px-3 py-3 rounded-none shadow-xl bg-base-100 w-72 mr-5 items-center"
        >
          <li className=" hover:underline font-bold text-sm">
            <Link to="/"> Home</Link>
          </li>
          <li className=" hover:underline font-bold text-sm">
            <Link to="/about"> About</Link>
          </li>
          <li className="  hover:underline text-sm font-bold">
            <Link to="/more"> Contact</Link>
          </li>
          <li className="  hover:underline text-sm font-bold">
            <Link to="/features"> Features</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
