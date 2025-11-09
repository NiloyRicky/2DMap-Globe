
import './App.css'
import Scene from './Scene'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, useTexture} from "@react-three/drei"
import Pins from './Pins'
function App() {
 

  return (
    <>
    
      <Canvas  onCreated={({ camera }) => {
        // ✅ Force camera to correct zoom and lock it
        camera.position.set(0, 0, 18);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
      }}
      
      camera={{ fov: 45 }}
      
       
      >
         <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
        <OrbitControls
           enableZoom={false}
           target={[0, 0, 0]} 

        />
        <ambientLight/>
<Scene/>
<Pins  />
      </Canvas>
      <div className='text-content'>
        <h3>Ecosystem</h3>
        <h2 className='h2'>We bridge sports,gaming,and<br/>
           lifestyle by transforming collectibles <br/>
           into dynamic,cross-platform asssets across mobile games</h2>
      </div>
</>
      
    
  )
}

export default App
