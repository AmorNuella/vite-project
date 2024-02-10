import React from "react";
import { Link } from "react-router-dom";
import Homee from "../assets/computer-icons-home-house-martinez-building-house-removebg-preview.png";
import Reacct from "../assets/react-menu-icon.d80ce119.svg";
import Andriod from "../assets/python.a30df217 (1).svg";
import Ios from "../assets/ios-menu-icon.50dcac80.svg";
import Flutter from "../assets/flutter-menu-icon.d551807e.svg";
import Php from "../assets/php-menu-icon.7b46f406.svg";
import Tailwind from "../assets/tailwind-css.svg";
import Net from "../assets/dot-net-menu-icon.3302b5a1.svg";
import Java from "../assets/javascript-menu-icon.3ce3a419.svg";
import Html from "../assets/html3.svg";
import Python from "../assets/python.a30df217 (1).svg";

const Features = () => {
  return (
    <div className=" items-center justify-between ml-32">
      <h1 className="px-10 py-5 font-bold text-3xl my-10 text-center text-orange-700">
        Our Technical Stack for Web Application Development
      </h1>
      <div className="w-full   border-lg h-24 mt-2 bg-slate-50  ">
        <ul className=" flex ">
          <li className="font-bold  px-10 py-5 text-3xl  bg-slate-300">
            Frontend
          </li>
          <Link to="/" className=" px-16   mx-6  text-3xl w-40 ml-3">
            <img src={Html} alt="reacticon" className="mx-2  w-10 h-16" />
            <li>HTML</li>
          </Link>

          <Link to="/" className=" px-16  mx-6   text-3xl w-40 ml-3">
            <img src={Tailwind} alt="reacticon" className="mx-2 w-10 h-16" />
            <li>Tailwind</li>
          </Link>

          <Link to="/">
            <li className=" px-16  mx-6  text-3xl w-40 ml-3">
              <img src={Java} alt="reacticon" className="mx-2 w-10 h-16" />
              Javascript
            </li>
          </Link>

          <Link to="/" className=" px-16    text-3xl w-40 ml-3">
            <img src={Reacct} alt="reacticon" className="mx-2 w-10 h-16" />
            <li> Reactjs</li>
          </Link>
        </ul>
      </div>

      <div className="w-full   border-lg h-24 mt-5 bg-slate-50 ">
        <ul className=" flex  border-black">
          <li className="font-bold  px-10 py-5 text-3xl  bg-slate-300">
            Backend
          </li>
          <Link to="/" className=" px-16 mx-6    text-3xl w-40 ml-3">
            <img src={Net} alt="reacticon" className="mx-2 w-10 h-16" />
            <li>.Net</li>
          </Link>

          <Link to="/" className=" px-16     mx-6  text-3xl w-40 ml-3">
            <img src={Php} alt="reacticon" className="mx-2 w-10 h-16" />
            <li>php</li>
          </Link>

          <Link to="/" className=" px-16  mx-6    text-3xl w-40 ml-3">
            <img src={Python} alt="reacticon" className="mx-2 w-10 h-16" />
            <li> Python</li>
          </Link>
        </ul>
      </div>
      <div className="w-full   border-lg h-24 mt-5 bg-slate-50 ">
        <ul className=" flex ">
          <li className="font-bold px-14 text-3xl py-5 bg-slate-300">Mobile</li>
          <Link to="/" className=" px-16 mx-6    text-3xl w-40 ml-3">
            <img src={Andriod} alt="reacticon" className="mx-2   w-10 h-16" />
            <li>Andriod</li>
          </Link>

          <Link to="/" className=" px-16 mx-6    text-3xl w-40 ml-3">
            <img src={Ios} alt="reacticon" className="mx-2 w-10 h-16" />
            <li>IOS</li>
          </Link>

          <Link to="/" className=" px-16  mx-6   text-3xl w-40 ml-3">
            <img src={Flutter} alt="reacticon" className="mx-2 w-10 h-16" />
            <li> Futter</li>
          </Link>
        </ul>
      </div>
      <div className="w-full mr-10 h-16  bg-orange-400 rounded-full  items-center justify-between   p-3 mt-8 my-7">
        <Link to="/" className="flex px-80">
          <img src={Homee} alt="" className="px-2 w-10 h-5  mt-2" />
          <p className="text-white font-bold text-xl  py-1">Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Features;
