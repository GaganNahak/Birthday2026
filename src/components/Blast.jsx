import React, { useEffect, useState, useRef } from 'react'
import WishPage from './WishPage';
import song from "../assets/the_mountain-happy-birthday-508020.mp3"
import confetti from "canvas-confetti"
import { Explode } from './Explode.js';

function Blast () {
  // const explode
  const audioRef = useRef()
  const [ isHidden, setHidden ] = useState( true )
  const [ hideWish, setHideWish ] = useState( true )
  useEffect( () => {
    setTimeout( () => {
      setHidden( false )
    }, 6000 );
  }, [] )

  const showWish = () => {
    audioRef.current.play()
    setTimeout( () => { 
      setHideWish( false )
      setHidden( true )
    new Explode(500,1000,1000)
    }, 1000 );   
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div onClick={showWish} className={` h-65 w-45 mask-radial-closest-side mask-radial-from-100% flex items-center justify-center ${ isHidden ? `hidden` : `` } egg `}>
        Tap To Break The Egg
      </div>
      <audio ref={audioRef} src={song} loop></audio>
      <WishPage isHidden={hideWish} />
    </div>
  )
}

export default Blast
