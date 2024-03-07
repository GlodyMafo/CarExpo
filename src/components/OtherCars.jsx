import React from "react";
import CarTicket from "./CarTicket";

function OtheCars() {
  return (
    <section className="flex flex-col items-center h-screen">
         <h1 className="text-white text-5xl font-bold pb-20">Autres Voitures</h1>
      <div className="flex justify-between">
        <CarTicket />
        <CarTicket />
        <CarTicket />
    </div>
    </section>
 
     
  );
}

export default OtheCars;
