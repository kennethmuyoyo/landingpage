import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AI_SHA from '../assets/AI_SHA.png'; // Change this to the path of your PNG file

function RightCol() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:flex bg-transparent md:justify-end md:w-1/2">
      {isLoading ? (
        <div>
          {/* Loading state */}
        </div>
      ) : (
        <div className="transform perspective-[500px] rotate-y-20 rotate-x-10">
            <Image
              className='w-full h-full'
              src={AI_SHA}
              sizes="500px"
              width={500}
              height={500}
              alt=""
            />
          </div>
      )}
    </div>
  );
}

export default RightCol;
