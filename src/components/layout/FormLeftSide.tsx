import React from 'react'
import Input from '../Input'
import IconGroup from './IconGroup'

function FormLeftSide() {
  return (
    <div className='flex flex-col gap-2 '>
        <h1 className=" font-league-spartan-bold text-4xl md:text-6xl text-black font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Let us help you </h1> 
        <h1 className=" font-league-spartan-bold text-4xl md:text-6xl text-black font-bold leading-tight text-center md:text-left slide-in-bottom-h1">in your </h1>
        <h1 className=" font-league-spartan-bold text-4xl md:text-6xl text-green-600 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">spiritual journey</h1>
        <p  className="leading-normal text-base font-league-spartan md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Register your interest now</p>
        <div className='hidden md:flex'>
          <IconGroup/>
        </div>
    </div>
  )
}

export default FormLeftSide