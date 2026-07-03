import React, { use, useEffect } from 'react'
import { AnimatedBackground,useAnimationControls  } from 'animated-backgrounds';
import CountDown from './CountDown';
import Blast from './Blast';
import { sendVisitorInfo } from "../components/sendVisitorInfo.js";


function SecondPage() {

    const controls = useAnimationControls();
useEffect(()=>{
    sendVisitorInfo()
},[])

  return (
    <div>
        <AnimatedBackground
        animationName="floatingBubbles"
            theme="cyberpunk"
            interactive={true}
            animationControls={controls}
        />
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black/70 controls'>
      
        <CountDown/>
        <Blast />
        </div>
    </div>
  )
}

export default SecondPage
