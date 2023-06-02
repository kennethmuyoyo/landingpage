import React from 'react'
import Logooo from '../../assets/Logoooo.png'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="w-full container pl-2 md:pl-20 bg-gray-50">
      <div className="w-full flex items-center justify-between">
        <a className="font-league-spartan flex items-center text-black no-underline hover:no-underline font-bold text-xl lg:text-2xl"  href="#"> 
          <Image width={100} height={100} src={Logooo} alt='Logo'/> 
          <span className="hidden md:inline">Your Virtual Muslim Companion</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar;

