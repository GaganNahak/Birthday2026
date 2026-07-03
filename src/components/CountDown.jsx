import React, { useEffect, useState } from 'react'

function CountDown() {
const [count,setCount]=useState(5)
useEffect(()=>{
    const counter=setInterval(() => {
        setCount(prev=>{
          if(prev<=0){
            clearInterval(counter)
            return -1
          }
         return Math.min(prev-1,6)
        })
        console.log(count);
        
    }, 1000);
    return ()=>clearInterval(counter)
},[])
  return (
    <div className={`w-[250px] h-100 bg-linear-65  from-purple-500 to-pink-500 rounded  pop-card ${count>=0?``:`hidden`}`}>
      <div className='text-center font-mochi text-white translate-y-2'>
        <u>Time To Celebrate</u>
      </div>
      <div className='h-[100%] w-[100%] p-2 grid grid-cols-2 gap-3  items-center translate-y-[-10px] '> 
        <p className='countDownCards'>
        00 DAYS
      </p>
      <p className='countDownCards'>
        00 HOURS
      </p>
      <p className='countDownCards'>
        00 MINUTES
      </p>
      <p className='countDownCards '>
        {count<10?`0`+count:count} SECONDS
      </p>
      </div>
    </div>
  )
}

export default CountDown
