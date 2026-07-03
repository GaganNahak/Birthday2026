import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';
import { AnimatedBackground,useAnimationControls  } from 'animated-backgrounds';
import CountDown from './CountDown';
import Blast from './Blast';



function SecondPage() {

    const navigate=useNavigate()
    const controls = useAnimationControls();
    const navigator=()=>{
        console.log(11);
        navigate("/thrdpage")
    }
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
