import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import DisplayCar from "./components/DisplayCar";
import CarTicket from "./components/CarTicket";
import OtheCars from "./components/OtherCars";

export default function App() {
  return (
    <div className="bg-black px-40 ">
      
        <Navbar />
        <Header />
        <DisplayCar />
        <OtheCars />
   
    </div>
  );
}
