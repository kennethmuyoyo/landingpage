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
    <div >
      {isLoading ? (
        <div>
          {/* Loading state */}
        </div>
      ) : (
          <div className="max-h-full">
            <Image
              src={AI_SHA}
              sizes="(max-width: 380px) 100vw, 380px"
              width={350}
              height={350}
              layout="responsive"
              alt=""
            />
          </div>
      )}
    </div>
  );
}

export default RightCol;
