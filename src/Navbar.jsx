import React from "react";
import { BiRefresh } from "react-icons/bi";

function Navbar() {
  return (
    <div className="py-6 bg-white ">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <h className="flex text-2xl sm:text-4xl text-primary-dark">
          Himanshu || Portfolio
        </h>

        <a className="text-6xl text-primary-default " href="/">
          <BiRefresh />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
