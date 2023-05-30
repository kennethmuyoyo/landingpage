import React from 'react'
import Logooo from '../../assets/Logoooo.png'
import Image from 'next/image'

function Navbar() {
  return (
    	<div className="w-full container p-8 pl-20 bg-gray-50">
			
		<div className="w-full flex items-center justify-between">
			<a className=" font-league-spartan flex items-center text-black no-underline hover:no-underline font-bold text-xl lg:text-2xl"  href="#"> 
				 <Image width={40} height={40} src={Logooo} alt='alt'/> Your virtual Muslim Companion
			</a>
		
		</div>

	</div>
  )
}

export default Navbar