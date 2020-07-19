import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber'

export default function (){
   const controls = useRef()
   useFrame(() => controls.current.update())
   return <orbitControls ref={controls} />
}
