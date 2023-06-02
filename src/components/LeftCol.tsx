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
    <motion.div className="flex flex-col w-full justify-left lg:items-start overflow-y-hidden md:px-1 md:w-1/2 animate-fade-in" {...slideAnimation('left')}>
      <motion.div {...headTextAnimation} className="text-center md:text-left">
        <h1 className="font-league-spartan-bold text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-black">Your Virtual </span>
        </h1>
        <h1 className="font-league-spartan-bold text-4xl md:text-5xl font-bold leading-tight text-green-600">
          Muslim Companion<span style={{color: 'black'}}> is almost here...</span>
        </h1>
      </motion.div>
      <motion.div {...headContentAnimation} className="leading-normal font-league-spartan md:text-xl mb-4 mt-8 text-center lg:text-justify slide-in-bottom-subtitle,font-normal text-gray-600 text-base space-y-4">
        <p>Discover Your <strong>Digital Islamic Guide!</strong></p>
        <p><span style={{color: 'green'}}>Brother AI.DAM</span> and <span style={{color: 'green'}}>Sister AI.SHA</span>. <br /> Whether you seek urgent answers, need guidance on permissible actions in Islam, or simply require a friendly chat, we are here for you.</p>
        <p><span style={{fontWeight: 'bold'}}>Navigating the path of conversion? Desiring to add more insight as a Muslim? Or simply yearning for a handy tool to keep a tally of your daily good deeds? Your quest ends here. This app is custom-built for every Muslim&apos;s unique spiritual journey.</span></p>
        <p>Let&apos;s embark on this journey of faith and together we can <span style={{color: 'green'}}>become better Muslims.</span></p> 
        <p>In Sha Allah!</p>
      </motion.div>
      <Button name='Join the waiting list' onClick={onClick} />
    </motion.div>
  )
}

export default LeftCol;
