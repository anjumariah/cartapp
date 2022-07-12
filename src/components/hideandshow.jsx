import React, { useState } from 'react'
import './hideandshow.css'
export default function Hideandshow() {
 const [display,setDisplay] = useState(false);

 const handleChange = () => {
   setDisplay(!display)
   console.log(display);
 }
  return (

    <div>
        
        <button className='hideShow' onClick={handleChange}>
        hideNshow
    </button>
    {display &&
         
           <div className='container' ></div> }
            
       
    </div>
  )
}
