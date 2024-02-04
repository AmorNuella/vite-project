import React from "react";

const Content = () => {
  return (
    <section className=" w-full h-full  max-md:mt-26 max-md:items-center max-md:justify-between ml-40 max-sm:w-full max-sm:h-2/4 text-black mt-18 max-sm:mt-2">
      <div className="flex   gap-4 text-lg max-sm:text-sm">
        <span className="bg-black  text-sm px-1 items-center justify-center py-1  text-white  rounded-full font-thin">
          New
        </span>
        <p className="font-thin text-sm py-1 text-slate-400  ">
          MONOGRAPH DASHBOARD
        </p>
      </div>
      <h1 className=" my-5  xl:text-7xl max-sm:font-body max-sm:text-4xl font-head  max-sm:font-head2  md:text-5xl max-md:text-7xl mt-2 max-sm:my-2">
        POWERFUL INSIGHTS <br /> INTO YOUR TEAM
      </h1>
      <p className="text-lg text-slate-400 my-2 max-sm:my-1 font-custom max-sm:py-1">
        Project planning and time tracking <br />
        for agile teams
      </p>
      <div className="flex mt-7 max-sm:mt-1">
        {/*button*/}
        <button
          type="button"
          className="bg-red-400 p-2 font-bold max-sm:p-1 max-sm:rounded-xl w-40 h-10 rounded-2xl text-sm text-white"
        >
          SCHEDULE A DEMO
        </button>
        <p className="p-3 text-sm text-slate-400">TO SEE A PREVIEW</p>
      </div>
    </section>
  );
};

export default Content;
