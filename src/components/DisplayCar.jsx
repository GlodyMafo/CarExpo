import React from "react";
import Car from "../assets/Car.png";

function DisplayCar() {
  return (
    <section className="h-screen flex flex-col items-center">
      <h1 className="text-white text-5xl font-bold ">Meilleure Vente</h1>

      <div className="pt-20 pl-20">
        <h2 className="text-white text-3xl font-semibold">PIXIUM 2024</h2>
        <p className="text-white w-3/12">
          Les dimensions de la Porsche 911 Carrera et Targa sont de 4 519 mm en
          longueur, 1 852 mm en laeur, 1 298 mm en hauteur et de 2 450 mm en
          empattement. Le poids total est de 1 505 à 1 580 kg à vide avec une
          charge autorisée à hauteur de 455 kg.
        </p>
      </div>
      <img className="pl-20 " src={Car} alt="" />
    </section>
  );
}

export default DisplayCar;
