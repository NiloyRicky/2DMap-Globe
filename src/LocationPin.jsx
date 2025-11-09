import { Html } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import "./App.css"

import { CiGlobe } from "react-icons/ci";
function LocationPin({ lat, lon, radius, name,team,image,country }) {
  const [hover, setHover] = useState(false);
  


  function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
}

  const [x, y, z] = latLongToVector3(lat, lon, radius);
  const dir = new THREE.Vector3(x, y, z).normalize();
  const pos = dir.multiplyScalar(radius+0.4);

  return (
    <group 
      position={pos.toArray()} 
      lookAt={[0, 0, 0]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
         {/*  Round Head */}
      <mesh position={[0, -0.09, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/*  Straight Stick (instead of cone) */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.92, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* ✅ Hover Card */}
      {hover && (
        <Html distanceFactor={25}>
          <div className="card-div">
            <img src={image}/>
            <div className="card-content">
              <p style={{fontSize:"7px",marginTop:"2px"}}>{name}<br/><br/>
              {team}</p>
              <div style={{display:"flex",gap:"2px",marginTop:"2px"}}>
                <CiGlobe size={9}/>
                <p style={{fontSize:"7px",marginTop:"1px"}}>{country}</p>
              </div>

            </div>


          </div>
        </Html>
      )}
    </group>
  );
}

export default LocationPin