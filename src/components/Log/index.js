// import deconstructObject from "../../Utils/deconstructObject"
import React, { useMemo } from 'react'
import style from './style.module.css'

function deconstructObject(inputObject, maxDepth = 10) {
   let depthCount = 0
   return deconstruct(inputObject);

   function deconstruct(obj){

      if (!Object.entries(obj).length || depthCount >= maxDepth) return <></>;
      depthCount++;

      console.log(obj)
      return Object.entries(obj)
      .map( ([key, val]) => 
         <div key={key}>
            {key} : {validatePrimitive(val) ? (<div style={{textIndent:20}}>{deconstruct(val)}</div>) : val.toString() }
         </div>
      )
   }
   function validatePrimitive(val){
     return typeof val === 'object' && val !== null
   }
}

export default function Log(props) {
   const deconstructedObject = useMemo(() => deconstructObject(props.boxState, 2), [props.boxState])
   return (
      <div className={style.log}>
         📦 Box Log (hover)
         {deconstructedObject}
      </div>

   )
}
