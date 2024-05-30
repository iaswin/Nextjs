import React from "react";
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-20">
        <img src="./public/assets/Logo.svg " alt="logo"></img>

        <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white px-5 py-1.5 rounded-2xl italic hover:not-italic">Hosterr Is Hiring</button>
      </div>
      <ul className="flex gap-4">
      <li>
            <a href="#">Plans</a>  
            </li>
            <li>
            <a href="#">Find Domain</a>  
            </li>
            <li>
            <a href="#">Why Hosterr</a>  
            </li>
      </ul>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default header;
