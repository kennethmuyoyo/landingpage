"use client"
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Example from "@/components/layout/heroLayout";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading

  const onButtonClick = () => {
    setIsLoading(true); // Set loading to true on button click
    router.push("/list");
  };

  return (
    <main className="text-gray-900 bg-gray-50 min-h-screen w-full">
      <div className="flex flex-col justify-evenly">
        <Navbar />
        <Hero onClick={onButtonClick} />
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
          <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
               role="status">
              <span
               className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
  
}
