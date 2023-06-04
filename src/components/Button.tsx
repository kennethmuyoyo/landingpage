"use client"
import React from 'react'

function Button({name,onClick}:{name:string,onClick:()=>void}) {
  return (
  <button 
  onClick={onClick}
  className=" bg-green-500  hover:bg-green-700 border border-green-600 shadow text-xl text-white font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-2xl">
  {name} 
  </button>
  )
}

export default Button