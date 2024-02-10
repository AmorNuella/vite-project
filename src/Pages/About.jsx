import React from "react";
import { Link } from "react-router-dom";
import Web from "../assets/web-application-development.webp";
import Homee from "../assets/computer-icons-home-house-martinez-building-house-removebg-preview.png";
const About = () => {
  return (
    <div className="bg-red-50 w-full h-full  flex max-sm:flex-col-reverse max-sm:w-full max-sm:bg-orange-100">
      <div className="py-32 px-32 items-center  w-3/4">
        <div className="flex ">
          <Link to="/">
            <img src={Homee} alt="" className="px-2 w-10 h-5" />
          </Link>
          <p className="px-2">/ </p>
          <h1 className="px-4 font-bold text-orange-500"> About Nuellacode</h1>
        </div>
        <div className="flex  mt-10">
          <p className="font-bold text-5xl"> About</p>
          <h1 className="px-4 text-5xl"> Nuellacode</h1>
        </div>
        <p className=" text-black text-2xl  leading-6  mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Vitaerepudiandae corporis id alias! Nostrum <br />
          obcaecati fugaquibusdam corrupti odit officia molestias vero repellat,
          <br />
        </p>
        <button className="bg-orange-500 w-96 h-8 mt-10 text-white text-xl rounded-md">
          <Link to="/work">See more</Link>
        </button>
        <button className="bg-black w-96 h-8 mt-10 text-white text-xl rounded-md">
          <Link to="/contact">Talk to us</Link>
        </button>
      </div>
      <div className=" items-center  w-2/4  mt-32 ml-10 max-sm:w-3/4 max-sm:h-2/4">
        <img
          src={Web}
          alt="image"
          className=" items-center  drop-shadow-lg shadow-lg w-90 max-sm:w-3/4"
        />
      </div>
    </div>
  );
};

export default About;
