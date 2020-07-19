import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Controls, useControl } from 'react-three-gui';
import logo from './logo.svg';
import Camera from "./components/Camera"
import Log from "./components/Log"
import Box from "./components/Box"
import './App.css';


const generateBoxes = (nOfBoxes, setBoxState)  => 
  Array(nOfBoxes).fill(1)
      .map( (box, i) => {
        const RADIUS = 2;
        const x = 0 + RADIUS * Math.cos(360/nOfBoxes * box * i)
        const y = 0 + RADIUS * Math.sin(360/nOfBoxes * box * i)
            return <Box key={i} position={[x, y, 0]} setBoxState={setBoxState} animate/>
      }
      )


function App() {
  const [boxState, setBoxState] = useState({})
  const [boxPosition, setPosition] = useState([0,0,0])
  const { size } = useThree();

  // debudding GUI
  const rotationX = useControl('rotationx', { group: 'Test', type: 'number' });
  const rotationY = useControl('rotationy', { group: 'Test', type: 'number' });
  const rotationZ = useControl('rotationz', { group: 'Test', type: 'number' });
  const colorGUI = useControl('Material color', { group: 'Test', type: 'color' });

  return (
    <div className="App">
      <img src={logo} className="App-logo spin" alt="logo" style={{width:50}} />
      <header className="App-header">
        <Log boxState={boxState} />
        <Canvas style={{position:"absolute"}} >
          {/* <Camera position={[0, 0, 10]} /> */}

          {/* <gridHelper args={[size,10]} /> */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} lookAt={[0,0,0]} />
          {/* <Box 
            position={boxPosition} 
            setBoxState={setBoxState}
            rotation-x={rotationX}
            rotation-y={rotationY}
            rotation-z={rotationZ}
            // color={colorGUI}
            animate
            /> */}
            {generateBoxes(100, setBoxState)}
        </Canvas>
        {/* <Controls /> */}

      </header>
    </div>
  );
}

export default App;
