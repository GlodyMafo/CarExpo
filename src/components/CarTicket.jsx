import React, { useRef, useState } from "react";

function CarTicket(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      className=" bg-gray-700 bg-opacity-50 text-white w-85 h-120"
      onClick={toggleModal}
    >
      <img className="max-w-80 pt-4" src={props.picture} alt="" />
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
      {/* {modal && (
        <div className="justify-around">
              <div className=" w-2/4 px-8 bg-gray-300 text-black absolute">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold py-4">BMW 507</h1>
            <p
              className="text-2xl font-bold py-4 cursor-pointer"
              onClick={toggleModal}
            >
              X
            </p>
          </div>

          <img
            className="pb-4"
            src="src/assets/bmw-crop-2560x1650.jpeg-1024x660.jpg"
            alt=""
          />
          <p className="text-xl pb-4">
            Magnifique roadster produit entre 1955 et 1959, la BMW 507 a été
            conçue par Albrecht von Goertz. Présentée à l'époque comme la
            voiture haut de gamme qui allait rivaliser avec les italiennes de
            prestige, elle connaît malheureusement un échec commercial qui coupe
            court à sa production. Avec seulement 254 unités produites, la BMW
            507 fait désormais partie des voitures les plus chères du monde..
          </p>
          <p className="text-xl font-bold pb-4">Prix : 250.000$</p>
        </div>
        </div>
    
      )} */}
    </div>
  );
}

export default CarTicket;
