import React from "react";
import { Link } from "react-router-dom";
import Reacct from "../assets/react-menu-icon.d80ce119.svg";
import Andriod from "../assets/python.a30df217 (1).svg";
import Ios from "../assets/ios-menu-icon.50dcac80.svg";
import Flutter from "../assets/flutter-menu-icon.d551807e.svg";
import Php from "../assets/php-menu-icon.7b46f406.svg";
import Homee from "../assets/computer-icons-home-house-martinez-building-house-removebg-preview.png";
const Work = () => {
  return (
    <div>
      <div className="bg-red-50 w-full h-full  flex">
        <div className="py-32 px-32 items-center  w-3/4">
          <div className="flex ">
            <Link to="/">
              {" "}
              <img src={Homee} alt="" className="px-2 w-10 h-5" />
            </Link>

            <p className="px-2">/ </p>
            <h1 className="px-4 font-bold text-orange-500"> Our Work</h1>
          </div>
          <div className="flex  mt-10">
            <h1 className="font-bold text-5xl"> Our Work</h1>
          </div>
          <p className=" text-black text-2xl  leading-6  mt-10">
            Contact us today and let us help you build that next great software
            turning disruption into opportunity
          </p>
        </div>
      </div>
      <div className="flex  w-full h-16  my-5">
        <img src={Reacct} alt="reacticon" className="mx-16" />
        <img src={Flutter} alt=" flutter" className="mx-16" />
        <img src={Andriod} alt="" className="mx-16" />
        <img src={Ios} alt="" className="mx-16" />
        <img src={Php} alt="" className="mx-16" />
      </div>
    </div>
  );
};

export default Work;
