
import CarTicket from "./CarTicket";
import bmw from "../assets/bmw-crop-2560x1650.jpeg-1024x660-removebg-preview.png";
import ferari from "../assets/Ferrari-Monza-SP1-removebg-preview.png";
import aston from "../assets/aston_martin_db5_833-removebg-preview.png";
import mercedes from "../assets/1955-mercedes-benz-300sl.png";



function OtheCars() {
 
  return (
    <section className="pt-20 h-screen relative">
         <h1 className="text-white text-5xl text-center font-bold pb-20">Autres Voitures</h1>
      <div className="flex justify-between">
        <CarTicket className="absolute" marque="BMW 507" picture={bmw} price="250.000$" />
        <CarTicket marque="Ferari Monza SP1" picture={ferari} price="600.000$" />
        <CarTicket marque="Aston Martin db5 833" picture={aston} price="600.000$" />
        <CarTicket  marque="Mercedes Benz 300sl" picture={mercedes} price="600.000$"/>
    </div>
  
    </section>
 
     
  );
}

export default OtheCars;
