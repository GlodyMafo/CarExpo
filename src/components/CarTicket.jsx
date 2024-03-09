import React from "react";
import Car from "../assets/Car.png";
function CarTicket(props) {
  return (
    <div className=" bg-gray-700 bg-opacity-50 text-white w-85 h-120 ">
      <img className="max-w-80 pt-4" src={props.picture} alt="" />
      <h2 className="text-2xl text-center font-bold text-center" >{props.marque} </h2>
      <p className="pt-4 text-center">{props.price}</p>
      <div className="flex justify-around mt-4 mb-8">
      <btn className="rounded-3xl text-center bg-white text-black py-2 px-4">
        Know more
      </btn>
      </div>
    </div>
  );
}

export default CarTicket;
