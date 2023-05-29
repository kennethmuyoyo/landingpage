import React from 'react'
import LeftCol from '../LeftCol'
import RightCol from '../RightCol'

function Hero() {
  return (
    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <LeftCol/>
        <RightCol/>
        
    </div>
  )
}

export default Hero