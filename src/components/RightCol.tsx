import React from 'react'
import ai_avatar_pic from '../assets/ai_avatar_pic.png'
import Image from 'next/image'

function RightCol() {
  return (
   
   
    <div className=" lg:flex bg-transparent md:justify-end">
    <Image
    className=" lg:h-[530px] bg-transparent w-[550px] shadow-gray-900 drop-shadow-4xl animate-pulse-in"
    src={ai_avatar_pic}
    width={500}
    height={480}
    alt=""
    />
</div>
    
  )
}

export default RightCol