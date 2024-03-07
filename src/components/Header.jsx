import React from "react";
import Car from "../assets/Car.png"

function Header() {
  return (
    <section className="h-screen pt-40">
 <div className="flex justify-between items-center  text-white">
      <div className="w-3/5">
        <h1 className="text-5xl font-bold">PIXIUM <br /> <span className="text-4xl font-normal">2024</span></h1>
        <p className="text-xl pt-10 pb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          accusantium delectus illo consequuntur?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          accusantium delectus illo consequuntur?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          accusantium delectus illo consequuntur?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          accusantium delectus illo consequuntur?
        </p>
        <button className="rounded-3xl bg-white text-black p-3 font-semibold">Know more</button>
      </div>
      
        <img className="pt-20"
          src={Car}
          alt=""
        />
    
    </div>
    </section>
   
  );
}

export default Header;
