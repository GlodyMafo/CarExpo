import React, { useRef, useState } from "react";

function CarTicket(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      className=" bg-gray-700 bg-opacity-50 text-white w-[280px] h-120"
      onClick={toggleModal}
    >
      <img className="max-w-[250px] pt-4 pl-10" src={props.picture} alt="" />
      <h2 className="text-2xl text-center font-bold">{props.marque} </h2>
      <p className="pt-4 text-center">{props.price}</p>
      <div className="flex justify-around mt-4 mb-8">
        <btn
          onClick={toggleModal}
          className="rounded-3xl text-center bg-white text-black py-2 px-4 cursor-pointer"
        >
          Know more
        </btn>
      </div>
     
    </div>
  );
}

export default CarTicket;
