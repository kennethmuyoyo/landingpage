"use client"
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Example from "@/components/layout/heroLayout";
import  { useRouter } from "next/navigation";
import { useReducer } from "react";


export default function Home() {
  const router=useRouter();
  const onButtonClick = ()=>{
    router.push("/list")
    }
  return (
    <main className=" text-gray-900 bg-gray-50 min-h-screen w-full">
      <div className="flex flex-col justify-evenly">
       <Navbar/>
       <Hero onClick={onButtonClick}/>
      </div>
    </main>
  )
}
