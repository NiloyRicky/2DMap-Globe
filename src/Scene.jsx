//import React, { useRef } from 'react'
import { useTexture} from "@react-three/drei"
import * as THREE from"three"
//import { useFrame } from '@react-three/fiber';
const url2="https://www.mapsnworld.com/world-map/world-map-800.jpg"
const url1="https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg"
function Scene() {
     const texture=useTexture(url1);

   




  return (
    <mesh   raycast={() => null} >
      
      <sphereGeometry args={[6,64,32]}/>
      <meshStandardMaterial map={texture} color="white" transparent side={THREE.DoubleSide}/>
    
      
    </mesh>
  )
}

export default Scene