import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '../motion'; 

function LeftCol({onClick}:{onClick:()=>void}) {
  return (
    <motion.div className="flex flex-col w-full lg:w-2/3 justify-center lg:items-start overflow-y-hidden md:px-1 animate-fade-in" {...slideAnimation('left')}>
      <motion.div {...headTextAnimation} className="text-left">
        <h1 className="font-league-spartan-bold text-4xl md:text-6xl text-black font-bold leading-tight text-center lg:w-2/3">Your Virtual </h1>
        <h1 className="font-league-spartan-bold text-4xl md:text-6xl text-green-600 font-bold leading-tight text-center lg">Muslim Companion</h1>
      </motion.div>
      <motion.div {...headContentAnimation} className="leading-normal font-league-spartan md:text-xl mb-4 mt-8 text-center lg:text-left slide-in-bottom-subtitle,font-normal text-gray-600 text-base space-y-4">
        <p>Discover Your <strong>Digital Islamic Guide!</strong></p>
        <p>Dive into an interactive Islamic experience with your Virtual Muslim Companions: <strong>Brother AI.DAM and Sister AI.SHA.</strong> Whether you seek urgent answers, need guidance on permissible actions in Islam, or simply require a friendly chat, we are here for you.</p>
        <p>Navigating the path of conversion? Desiring to add more insight as a Muslim? Or simply yearning for a handy tool to keep a tally of your daily good deeds? Your quest ends here. This app is custom-built for every Muslim's unique spiritual journey.</p>
        <p>Join our Waiting List today! We assure you of a spam-free experience!</p> 
        <p>Let's embark on this journey of faith together and become better Muslims.</p> 
        <p>In Sha Allah!</p>
      </motion.div>
      <Button name='Join waiting list' onClick={onClick} />
    </motion.div>
  )
}

export default LeftCol;

