import React from 'react'

export default function(inputObject) {
   
   return deconstruct(inputObject);

   function deconstruct(obj){
      return Object.entries(obj)
      .map( ([key, val]) => 
         <div>
            {key}: {validatePrimitive(val) ? deconstruct(val) : val }
         </div>
      )
   }
   function validatePrimitive(val){
     return typeof val === 'object' && val !== null
   }
}