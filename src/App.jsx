
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import DisplayCar from "./components/DisplayCar";
import OtheCars from "./components/OtherCars";
import React, { useRef } from 'react';
import { isDesktop } from 'react-device-detect';



export default function App() {

  const ref=useRef(null);
  const handleClick=()=>{
   ref.current?.scrollIntoView({behavior:'smooth'})
  }

  if (!isDesktop) {
    return (
        <div>
            <h1 className="text-5xl font-bold ">Désolé, ce site est accessible uniquement sur des écrans d'ordinateurs.</h1>
        </div>
    );
}

  return (
  
    <div className="bg-black desktop-only">
      <div className=" px-40 bg-center h-screen" style={{ backgroundImage: "url('src/assets/2187256.jpg')",}}>
          <Navbar />
          <Header />
          <div className="hero">
        <a onClick={handleClick} className="scroll-link cursor-pointer">
          <svg
            className="mouse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 130"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fill-rule="evenodd">
              <rect
                width="70"
                height="118"
                x="1.5"
                y="1.5"
                stroke="#FFF"
                stroke-width="3"
                rx="36"
              />
              <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF" />
            </g>
          </svg>
        </a>
      </div>
      </div>
      <DisplayCar ref={ref} />
      <div className=" px-40 bg-center h-sreen" style={{ backgroundImage: "url('src/assets/2187256.jpg')"}}>
      <OtheCars />
      </div>

    </div>
  );
}
