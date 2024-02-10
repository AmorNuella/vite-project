import React from "react";
import MyForm from "./MyForm";
import Ghana from "../assets/flag-for-ghana (5).svg";
import Email from "../assets/kisspng-computer-icons-email-icon-design-pictogram-5b23bc95450a84.4840794715290686932828.jpg";

const Contact = () => {
  const number = "0531469862";
  return (
    <div className="   h-full w-full m-10   justify-between items-center  text-black">
      <div className="flex h-3/4  w-full  bg-slate-100  ">
        <div className="w-2/4 h-full justify-start mt-10  ml-8">
          <h1 className="font-bold text-6xl py-5">Lets Talk Business</h1>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing . <br /> my
            quality cvcvbn zdfgh
          </p>
          <div className=" my-6">
            <div className="flex font ">
              <img src={Ghana} alt=" country" className="w-5 h-6 gap-1 pt-1" />
              <p className=" text-lg ">Call us:</p>
              <a className=" text-lg  font-bold  items-center   pl-3">
                {number}
              </a>
            </div>
            <div className="flex py-2">
              <img src={Email} alt="my email" className="w-5 h-6 gap-1 pt-1" />
              <p className=" text-lg">Email us:</p>
              <a
                href="adwoaboakyewaaa1234@gmail.com"
                className="text-lg pl-2 font-bold"
              >
                adwoaboakyewaaa1234@gmail.com
              </a>
            </div>
          </div>
          <h1 className="font-bold text-5xl my-4">Hire Dedicated Developers</h1>
          <p className=" text-lg ">
            To Upscale your software development capabilities
          </p>
          <div className="flex gap-2  mt-4">
            <p className="text-lg pt-2">Starts at</p>
            <h1 className="font-bold text-3xl">$24/hr & $3250/mo</h1>
          </div>
          <p className="my-2">
            You can send email to
            <a href="adwoaboakyewaaa1234@gmail.com" className="text-red-400">
              adwoaboakyewaaa1234@gmail.com
            </a>
          </p>
        </div>
        <div className="w-2/4 h-full">
          <MyForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
