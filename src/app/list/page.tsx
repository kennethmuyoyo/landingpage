import Form from '@/components/layout/Form'
import FormLeftSide from '@/components/layout/FormLeftSide'
import FormRightSide from '@/components/layout/FormRightSide'
import IconGroup from '@/components/layout/IconGroup'
import Navbar from '@/components/layout/Navbar'
import router from 'next/router'
import React from 'react'

function page() {
 
    
  return (
    <main className='flex flex-col w-full font-league-spartan '>
      
      <div className='bg-gray-100 text-black flex flex-col md:flex-row justify-center gap-3 p-12 w-screen md:px-20 lg:px-48'>

      <div className=' md:flex md:w-1/2 md:max-h-screen items-center '>
      <FormLeftSide/>
      </div>


      <div className='bg-white md:w-1/2 flex flex-col  justify-center md:my-12  py-10 px-6 shadow rounded-2xl hover:shadow-2xl  transition-all duration-300'>
        <FormRightSide/>
       
      </div>

      <div className=' bottom-4 left-4 p-4  md:hidden'>
          <IconGroup/>
        </div>
      
      </div>
    </main>
  )
}

export default page