import React from 'react'
import ai_avatar from '../assets/ai_avatar.png'
import Image from 'next/image'

function RightCol() {
  return (
   
   
    <div className=" lg:flex  pb-14">
    <Image
    className="object-cover "
    src={ai_avatar}
    width={430}
    height={480}
    alt=""
    />
</div>
    
  )
}

export default RightCol