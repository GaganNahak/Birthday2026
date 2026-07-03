import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { AnimatedBackground,useAnimationControls  } from 'animated-backgrounds';
import Loader from './Loader';

function Home() {
 
      const controls = useAnimationControls();
 
  return (
    <>
     <AnimatedBackground 
            animationName="starryNight"
            theme="cyberpunk"
            interactive={true}
            animationControls={controls}
          />
 <div className='h-[100vh] w-[100vw]  text-pink-400  flex items-center flex-col justify-center controls'>
     <FaHeart className='text-6xl animate-bounce z-10'/>
     <div className='bg-white rounded-full  h-4 w-8 animate-[var(--animation)] sizer transform translate-y-[-10px] z-0'></div>
     <div>
      <p className='text-[20px] font-semibold font-mochi'>Preparing Something Special</p>
     </div>
     <Loader/>
    </div>
    </>
   
  )
}

export default Home
