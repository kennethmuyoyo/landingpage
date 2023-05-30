"use client"
import React from 'react'

function Button({name,onClick}:{name:string,onClick:()=>void}) {
  return (
  <button 
  onClick={onClick}
  className=" bg-transparent hover:bg-green-600 border border-green-600 shadow te text-black font-semibold hover:text-white py-4 px-4 hover:border-transparent rounded-2xl">
  {name} 
  </button>
  )
}

export default Button