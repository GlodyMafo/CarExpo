import React from "react";
import Logo from "../assets/voiture-musclee.png";
function Navbar() {
  return (
    <div className="flex justify-around items-center pt-10 text-white">
      <p className="text-5xl font-bold "> <span className="text-[#0099DD]">GaRi</span> Exposition.</p>
      
      {/* <ul className="flex justify-between">
        <li className="text-2xl">
          <a className="no-underline pl-12">Home</a>
          <a className="no-underline pl-12">Top Selling</a>
          <a className="no-underline pl-12">Cars</a>
          <a className="no-underline pl-12">Contact</a>
        </li>
      </ul> */}
    </div>
  );
}

export default Navbar;
