import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and toggle state
  const [hovered, setHover] = useState(false)
  const [toggle, settoggle] = useState(false)
  
  const setBoxState = e => {
     props.setBoxState({ toggle, hovered, position: props.position.toString() })
  }
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => props.animate ? (mesh.current.rotation.x = mesh.current.rotation.y += 0.01) : null)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={toggle ? [2.5, 2.5, 2.5] : [1.5, 1.5, 1.5]}
      onClick={(e) => {settoggle(!toggle); return setBoxState(e)}}
      onPointerOver={(e) => {setHover(false);return setBoxState(e)}}
      onPointerOut={(e) => {setHover(true); return setBoxState(e)}} >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : props.color ? props.color : 'orange'} opacity={0.8} />
    </mesh>
  )
}