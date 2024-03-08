import React, { useRef } from 'react';
import {useGLTF} from "@react-three/drei"
import {useFrame } from "@react-three/fiber";


export default function Second3D(props) {
const{scene}=useGLTF("./scene.gltf")
const objectRef = useRef();

useFrame(() => {
  objectRef.current.rotation.y += 0.01;
});

  return <primitive  ref={objectRef} object={scene} />
}


