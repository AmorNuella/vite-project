import React from "react";
import { Link } from "react-router-dom";
import Java from "../assets/javascript-developer.webp";
import Homee from "../assets/computer-icons-home-house-martinez-building-house-removebg-preview.png";
const More = () => {
  return (
    <div className="bg-red-50 w-full h-full  flex">
      <div className="py-32 px-32 items-center  w-3/4">
        <div className="flex ">
          <Link to="/">
            <img src={Homee} alt="" className="px-2 w-10 h-5" />
          </Link>
          <p className="px-2">/ </p>
          <h1 className="px-4 font-bold text-orange-500"> Contact Us</h1>
        </div>
        <div className="flex  mt-10">
          <p className="flex">
            <span className="font-bold text-5xl">
              {" "}
              Want to know more about us?
            </span>

            <h1 className="px-4 text-5xl"> contact us now </h1>
          </p>
        </div>
        <p className=" text-black text-2xl  leading-6  mt-10">
          Contact us today and let us help you build that next great software
          turning disruption into opportunity
        </p>
        <button className="bg-orange-500 w-96 h-8 mt-10 text-white text-xl rounded-md">
          <Link to="/work">Learn more</Link>
        </button>
        <button className="bg-black w-96 h-8 mt-10 text-white text-xl rounded-md">
          <Link to="/contact">Contact us</Link>
        </button>
      </div>
      <div className=" items-center  w-2/4  mt-32 ml-10">
        <img
          src={Java}
          alt="image"
          className=" items-center  drop-shadow-lg shadow-lg w-90"
        />
      </div>
    </div>
  );
};

export default More;
