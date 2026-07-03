import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Loader() {
     const [loaderwidth,setLoaderwidth]=useState(0)
      const navigate=useNavigate()
    useEffect(()=>{
  const updater=setInterval(() => {
    setLoaderwidth(prev=>Math.min(prev+10,110))
  }, 450);
  return ()=>clearInterval(updater)
 },[])
 if (loaderwidth===110) {
   setLoaderwidth(0)
       navigate("/sndpage")
 }
  return (
    <div className='h-6 w-[90vw] border-2 rounded-3xl'>
      <div className={`bg-pink-500 h-5.5 rounded-3xl`} style={{width:`${loaderwidth}%`}}></div>
     </div>
  )
}

export default Loader
