import React from 'react'

function Cards({index,isHide}) {
console.log(isHide);

  return (
    <div className={`absolute top-55 h-60 w-50 bg-gray-600 ${isHide?`hidden`:``}`}>
      
    </div>
  )
}

export default Cards
