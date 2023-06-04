// RightCol.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AI_SHA from '../assets/AI_SHA.png'; 
import { motion } from 'framer-motion';

const imgVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

function RightCol() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:flex hidden bg-transparent md:justify-end md:w-1/2">
      {isLoading ? (
        <div>
          {/* Loading state */}
        </div>
      ) : (
        <motion.div
          variants={imgVariants}
          initial='hidden'
          animate='visible'
          className="transform perspective-[500px] rotate-y-20 rotate-x-10">
            <Image
              className='w-full h-full'
              src={AI_SHA}
              sizes="500px"
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
      )}
    </div>
  );
}

export default RightCol;
