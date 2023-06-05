import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import MobileRightCol from './MobileRightCol'
import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '../motion'; 

function LeftCol({onClick}:{onClick:()=>void}) {
  return (
    <motion.div className="flex flex-col w-full justify-left lg:items-start overflow-y-hidden px-1 lg:px-3 lg:w-1/2 animate-fade-in" {...slideAnimation('left')}>
      <motion.div {...headTextAnimation} className="text-center lg:text-left">
        <h1 className="font-league-spartan-bold text-4xl lg:text-5xl font-bold leading-tight">
          <span className="text-black">Your Virtual </span>
        </h1>
        <h1 className="font-league-spartan-bold text-4xl lg:text-5xl font-bold leading-tight text-green-600">
          Muslim Companion<span style={{color: 'black'}}> is almost here...</span>
        </h1>
      </motion.div>
      <motion.div {...headContentAnimation} className="leading-normal font-league-spartan lg:text-xl mb-4 mt-8 text-center lg:text-justify slide-in-bottom-subtitle font-normal text-gray-600 text-base space-y-4">
        <p>Discover <span style={{color: 'green'}}>Brother AI.DAM</span> and <span style={{color: 'green'}}>Sister AI.SHA they are here to help you</span>. <br /> Whether you seek urgent answers, need guidance on permissible actions in Islam, or simply require a friendly chat, we are here for you.</p>
        <MobileRightCol /> {/* The image is placed independently outside the paragraph content */}
        <p><span style={{fontWeight: 'bold'}}>Navigating the path of conversion? Desiring to add more insight as a Muslim? Or simply yearning for a handy tool to keep a tally of your daily good deeds? Your quest ends here. This app is custom-built for every Muslim&apos;s unique spiritual journey.</span></p>
        <p>Let&apos;s embark on this journey of faith and together we can <span style={{color: 'green'}}>become better Muslims.</span></p> 
        <p>In Sha Allah!</p>
      </motion.div>

      <Button name='Join Waiting List' onClick={onClick} />
    </motion.div>
  )
}


export default LeftCol;
