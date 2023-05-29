import Navbar from "@/components/Navbar";
import Hero from "@/components/layout/Hero";


export default function Home() {
  return (
    <main className="leading-normal tracking-normal text-gray-900 bg-white p-4">
      <div className="h-screen pb-14 bg-right bg-cover">
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}
