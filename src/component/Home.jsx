import React from "react";
import Content from "./Content";
import ImageSection from "./ImageSection";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      <div className=" w-full h-full max-sm:w-full max-sm:h-screen max-sm:ml-2 ">
        <div className="h-96 w-46  bg-slate-400 float-right relative"></div>

        <div className="">
          <Navbar />
          <div className="flex w-full h-max my-8 items-start justify-start m-auto absolute max-md:flex-col-reverse max-md:items-center max-md:justify-center ">
            <Content />
            <ImageSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
