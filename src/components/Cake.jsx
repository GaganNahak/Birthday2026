import React from 'react'
// import cake from "../assets/"
import { MotionIcon } from 'motion-icons-react';

function Cake() {
  return (
    <div className='relative bottom-10 flex justify-center items-center flex-col'>
      <MotionIcon name="Cake" animation="bounce" interactive size={50} color='yellow'  />
      <div className='h-2 w-15 bg-gray-600 rounded-full  cakeShadow'></div>
    </div>
  )
}

export default Cake
