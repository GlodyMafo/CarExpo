import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei"
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import DisplayCar from "./components/DisplayCar";
import CarTicket from "./components/CarTicket";
import OtheCars from "./components/OtherCars";
import { BoxGeometry } from "three";
import Firt3D from "./components/First3D";

export default function App() {
  return (
    <div className="bg-black">
      <div className=" px-40 bg-center h-screen" style={{ backgroundImage: "url('src/assets/2187256.jpg')",}}>
          <Navbar />
          <Header />
      </div>
      <DisplayCar />
      <OtheCars />
    </div>
  );
}
