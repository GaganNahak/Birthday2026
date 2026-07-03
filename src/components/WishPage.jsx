import React, { useState } from 'react'
import { GrFormNextLink } from "react-icons/gr";
import birthdaySong from "../assets/the_mountain-happy-birthday-508020.mp3"
import Cake from './Cake';
import confetti from "canvas-confetti"
import { Explode } from './Explode.js';
import Cards from './Cards.jsx';

function WishPage({isHidden}) {
  const [index,setIndex]=useState(-1)
  const [isHide,setIsHide]=useState(true)
  
  const blast=()=>{
    new Explode(200,400,400)
    setIndex(prev=>{
      if(prev>=2){
        return prev=0
      }else{
        setIsHide(false)
        return prev+1
      }
    })    
  }
  function hide(){
setIsHide(true)
setIndex(-1)
}
  return (
    <div className={`w-[250px] h-90 bg-linear-65 ${isHidden?`hidden`:`flex flex-col justify-center items-center`}  from-purple-500 to-pink-500 rounded  pop-card` }>
     <div className='flex items-center justify-center flex-col'>
       <Cake/>
      <div className='font-mochi text-center text-gray-300'>
        Happy Birthday Ghusuri (Krishna)
      </div>
      <button onClick={blast} className='  flex flex-row font-mochi font-extralight items-center justify-center text-white bg-green-400 p-1 w-30 rounded relative top-25'>{index<2?  <>Next <GrFormNextLink /></>:"Previous"}</button>
     </div>
     <div onClick={hide} className={`bg-red-600 text-white w-5 h-5 flex items-center justify-center  relative top-[-210px] left-[-100px] z-20 rounded-full ${isHide?`hidden`:``}`}>X</div>
     <Cards index={index} isHide={isHide} />
    </div>
  )
}

export default WishPage
