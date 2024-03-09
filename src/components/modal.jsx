import React, { useRef, useState } from "react";

function CarModal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        className="rounded-3xl text-center bg-white text-black py-2 px-4"
        onClick={toggleModal}
      >
        Ok
      </button>

      {modal && (
        <div>
          <div className=" w-1/4 px-8 bg-gray-300 absolute" >
            <div className="flex justify-between ">
            <h1 className="text-2xl font-bold py-4">BMW 507</h1>
            <p className="text-2xl font-bold py-4 cursor-pointer" onClick={toggleModal}>X</p>
            </div>
           
            <img className="pb-4" src="src/assets/bmw-crop-2560x1650.jpeg-1024x660.jpg" alt="" />
            <p className="text-xl pb-4">
              Magnifique roadster produit entre 1955 et 1959, la BMW 507 a été
              conçue par Albrecht von Goertz. À l'époque, le moteur de la BMW
              507 est le premier moteur V8 de la marque. Elle peut rouler
              jusqu'à 217 km/h, avec une accélération de 0 à 100 en 11 secondes.
              Présentée à l'époque comme la voiture haut de gamme qui allait
              rivaliser avec les italiennes de prestige, elle connaît
              malheureusement un échec commercial qui coupe court à sa
              production. Avec seulement 254 unités produites, la BMW 507 fait
              désormais partie des voitures les plus chères du monde..
            </p>
            <p className="text-xl font-bold pb-4">Prix : 250.000$</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default CarModal;
