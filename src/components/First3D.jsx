import React, { useRef } from 'react';
import {useGLTF, Stage, PresentationControls} from "@react-three/drei"

export default function Firt3D(props) {
const{scene}=useGLTF("./scene.gltf")

  return <primitive object={scene} {...props}/>
}


