import React, { useState } from 'react'
import { GrFormNextLink } from "react-icons/gr";
import birthdaySong from "../assets/the_mountain-happy-birthday-508020.mp3"
import Cake from './Cake';
import confetti from "canvas-confetti"
import { Explode } from './Explode.js';
import Cards from './Cards.jsx';

function WishPage({isHidden}) {
  const [index,setIndex]=useState(0)
  const [isHide,setIsHide]=useState(true)
  // let isHide=true;
  const blast=()=>{
    new Explode()
    setIndex(prev=>prev+1)
    setIsHide(false)
    console.log(index);
    console.log(isHide);
    
  }
  return (
    <div className={`w-[90vw] h-90 bg-linear-65 ${isHidden?`hidden`:`flex flex-col justify-center items-center`}  from-purple-500 to-pink-500 rounded  pop-card` }>
     <div className='flex items-center justify-center flex-col'>
       <Cake/>
      <div className='font-mochi text-center text-gray-300'>
        Happy Birthday Ghusuri (Krishna)
      </div>
      <button onClick={blast} className='flex flex-row font-mochi font-extralight items-center justify-center text-white bg-green-400 p-1 w-30 rounded relative top-20'>Next <GrFormNextLink /></button>
     </div>
     <Cards index={index} isHide={isHide}/>
    </div>
  )
}

export default WishPage
