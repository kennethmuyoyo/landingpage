"use client"
import React from 'react'
import Button from './Button'




function LeftCol({onClick}:{onClick:()=>void}) {



  return (
    <div className="flex flex-col w-full md:w-1/2 justify-center lg:items-start overflow-y-hidden">
			<h1 className="my-4 font-league-spartan-bold text-4xl md:text-6xl text-black font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Your Virtual 
Muslim Companion</h1>
			<p className="leading-normal text-base font-league-spartan md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">You can choose Brother AI.DAM or Sister AI.SHA to talk with when you have an urgent question that needs an answer; advice on what is right or permissible in Islam or just a friend to chat with if you are happy or sad. We are here to help you.</p>

<p className="leading-normal text-base font-league-spartan md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Whether you are thinking of reverting, need extra advice as a Muslim or just need ongoing reminders and a place to keep track of your good deeds, this is an app for you.</p>

<p className="leading-normal text-base font-league-spartan md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Add your details to the Waiting List - we promise we won’t spam!</p>

		
<Button name='join waiting list' onClick={onClick}/>
			
	</div>
  )
}



export default LeftCol