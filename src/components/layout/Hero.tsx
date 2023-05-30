import React from 'react'
import LeftCol from '../LeftCol'
import RightCol from '../RightCol'

function Hero({onClick}:{onClick:()=>void}) {
  return (
    <div className=" px-12 mx-12 flex flex-col  items-center md:px-2 md:mx-6 lg:justify-between lg:flex-row lg:p-2 lg:px-20">
        <LeftCol onClick={onClick}/>
        <RightCol/>
    </div>
  )
}

export default Hero