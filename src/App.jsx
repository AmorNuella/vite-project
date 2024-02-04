import React from "react";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import ImageSection from "./component/ImageSection";

const App = () => {
  return (
    <div className=" w-full h-full max-sm:w-full max-sm:h-screen ">
      <div className="h-96 w-46  bg-slate-400 float-right relative"></div>
      <div className="">
        <Navbar />
        <div className="flex w-full h-max my-8 items-start justify-start m-auto absolute max-md:flex-col-reverse max-md:items-center max-md:justify-center ">
          <Content />
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default App;
