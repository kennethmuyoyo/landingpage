"use client"
import React from 'react'
import Button from './Button'




function LeftCol({onClick}:{onClick:()=>void}) {



  return (
    <animateMotion className="flex flex-col w-full lg:w-2/3 justify-center lg:items-start overflow-y-hidden md:px-4 animate-fade-in">
			<h1 className="my-2 font-league-spartan-bold text-4xl md:text-6xl  text-black font-bold leading-tight text-center  slide-in-bottom-h1 ">Your Virtual </h1>
			<h1 className=" font-league-spartan-bold text-4xl md:text-6xl text-green-600  font-bold leading-tight text-center lg:text-left slide-in-bottom-h1 ">Muslim Companion</h1>
						<p className="leading-normal text-base text-gray-800 font-league-spartan md:text-xl mb-4 mt-8 text-center lg:text-left slide-in-bottom-subtitle">You can choose Brother AI.DAM or Sister AI.SHA to talk with when you have an urgent question that needs an answer; advice on what is right or permissible in Islam or just a friend to chat with if you are happy or sad. We are here to help you.</p>

			<p className="leading-normal text-base text-gray-800 font-league-spartan md:text-xl mb-4 text-center lg:text-left slide-in-bottom-subtitle">Whether you are thinking of reverting, need extra advice as a Muslim or just need ongoing reminders and a place to keep track of your good deeds, this is an app for you.</p>

			<p className="leading-normal text-base text-gray-800 font-league-spartan md:text-xl mb-8 text-center lg:text-left slide-in-bottom-subtitle">Add your details to the Waiting List - we promise we won’t spam!</p>

					
		<Button name='join waiting list' onClick={onClick}/>
			
	</animateMotion>
  )
}



export default LeftCol