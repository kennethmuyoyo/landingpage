import React from 'react'

function LeftCol() {
  return (
    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			<h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Main Hero Message to sell your app</h1>
			<p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Sub-hero message, not too long and not too short. Make it just right!</p>
		
			<p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our app:</p>
			<div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
				<img src="App Store.svg" className="h-12 pr-4 bounce-top-icons"/>
				<img src="Play Store.svg" className="h-12 bounce-top-icons"/>
			</div>

	</div>
  )
}

export default LeftCol