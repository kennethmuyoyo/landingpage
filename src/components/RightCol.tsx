import React, { useState, useEffect } from 'react';
import avatar_ from '../assets/avatar.png';
import Image from 'next/image';




function RightCol() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:flex bg-transparent md:justify-end">
      {isLoading ? (
        <div >
         
        </div>
      ) : (
        <Image
          className="lg:h-[530px] bg-transparent w-[550px] shadow-gray-900 drop-shadow-4xl"
          src={avatar_}
          width={500}
          height={480}
          alt=""
        />
      )}
    </div>
  );
}

export default RightCol;
