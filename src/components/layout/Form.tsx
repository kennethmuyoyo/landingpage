import React from 'react'
import Input from '../Input'
import Button from '../Button'

const onButtonClick = ()=>{

}

function Form() {
  return (
    
<form className='grid items-center w-full p-4 '>
    <p className="leading-normal text-base font-league-spartan-bold md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Please fill in the details below</p>
    <div className="grid gap-6 mb-6 mt-6 md:grid-cols-2">
    <Input/>
       <Input />
        
    </div>
    <div className="mb-6">
    <Input/>
    </div> 
    
    <Button name='join waiting list' onClick={onButtonClick}/>
</form>

  )
}

export default Form