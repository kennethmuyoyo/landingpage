import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AI_SHA from '../assets/AI_SHA.png';
import circle from '../assets/circle.svg';


const imgVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
}

const MobileRightCol: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:hidden bg-transparent">
      {isLoading ? (
        <div>
          {/* Loading state */}
        </div>
      ) : (
        <>
          <motion.div
            variants={imgVariants}
            className="app__header-img"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imgVariants}
              className="overlay_circle"
            >
              <Image src={circle} alt="profile_circle" width={350} height={350} />
            </motion.div>
            <Image src={AI_SHA} alt="profile_bg" width={300} height={300} />
          </motion.div>
              </>
      )}
    </div>
  );
      }  

export default MobileRightCol;


