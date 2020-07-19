import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

export default function Camera(props) {
   const ref = useRef()
   const { setDefaultCamera, aspect } = useThree()
   // Make the camera known to the system
   useEffect(() => void setDefaultCamera(ref.current), [])
   // Update it every frame
   useFrame(() => ref.current.updateMatrixWorld())
   return <perspectiveCamera ref={ref} args={[45, aspect, 1, 2000]} {...props} />
 }
 