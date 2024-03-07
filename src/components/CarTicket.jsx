import React from "react";
import Car from "../assets/Car.png";
function CarTicket() {
  return (
    <div className=" bg-gray-700 bg-opacity-50 text-white w-80 h-80 pl-5">
      <img src={Car} alt="" />
      <h2 className="pl-20">Jaguar Jx</h2>
      <p className="pl-20">80 000$</p>
      <button className="rounded-3xl bg-white text-black p-3 ml-20">
        Know more
      </button>
    </div>
  );
}

export default CarTicket;
