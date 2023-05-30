import React from 'react'
import LeftCol from '../LeftCol'
import RightCol from '../RightCol'

function Hero({onClick}:{onClick:()=>void}) {
  return (
    <div className=" py-2 md:p-6 px-12  mx-12 flex  flex-col md:flex-row items-center lg:justify-between lg:p-16">
        <LeftCol onClick={onClick}/>
        <RightCol/>
    </div>
  )
}

export default Hero