import React from "react";
import logo1 from "../assets/logo-1.svg";
import logo2 from "../assets/logo-2.svg";
import logo3 from "../assets/logo-3.svg";
import logo4 from "../assets/logo-4.svg";
import logo5 from "../assets/logo-5.svg";

const Banar = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="container columns-3xs mx-auto flex items-center justify-between mt-48 gap-4">
          <div>
            <img src={logo1} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo2} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo3} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo4} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo5} alt="LOGO" className="md:w-36" />
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className="md:hidden container row-auto mx-auto grid items-center justify-between mt-48 gap-6">
        <div className="flex flex-row justify-between items-center gap-4 w-[90%] mx-auto">
          <div>
            <img src={logo1} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo2} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo3} alt="LOGO" className="md:w-36" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-9 w-64 mx-auto">
          <div>
            <img src={logo4} alt="LOGO" className="md:w-36" />
          </div>
          <div>
            <img src={logo5} alt="LOGO" className="md:w-36" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banar;
