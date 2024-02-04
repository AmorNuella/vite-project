import React from "react";
import Devices from "../assets/illustration-devices.svg";

function ImageSection() {
  return (
    <section className="w-full h-full  relative mt-1 overflow-hidden max-sm:w-11/12 max-sm:h-36 max-md:h-96  max-sm:mt-0 max-sm:ml-32 max-md:mr-0">
      <img
        src={Devices}
        alt="mydevice"
        className="w-full ml-10 max-sm:mt-0  h-96 max-sm:mt- max-sm:h-36 max-sm:items-center max-sm:justify-between max-sm:ml-6"
      />
    </section>
  );
}

export default ImageSection;
