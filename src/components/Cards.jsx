import React, { useEffect, useState } from 'react'
import img1 from "../assets/IMG_20250827_210706.jpg"
import img2 from "../assets/IMG-20251004-WA0002.jpg"
import img3 from "../assets/IMG-20251011-WA0004.jpg"

function Cards({index,isHide}) {
let imgArr=[img1,img2,img3]
const [swap,setSwap]=useState(false)
useEffect(()=>{
  setSwap(true)
},[index])

  return (
    <div className={`absolute top-55 h-65 w-50   ${isHide?`hidden`:``}`}>
      <img src={imgArr[index]} alt="Loading Ghusuri" className='h-65 w-50 object-cover absolute top-0 z-10' />
      <img  onAnimationEnd={()=>{setSwap(false)}} src={index===0?imgArr[2]:imgArr[index-1]} alt="Loading Ghusuri" className={`h-65 w-50 object-cover absolute top-0 z-0 ${swap?`swap`:``}`} />
    </div>
  )
}

export default Cards
