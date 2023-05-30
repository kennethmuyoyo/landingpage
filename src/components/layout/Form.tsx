import React from 'react'
import Input from '../Input'
import Button from '../Button'

const onButtonClick = ()=>{

}

function Form() {
  return (
    
<form className='grid items-center w-full p-8 '>
    <p className="leading-normal text-base font-league-spartan-bold md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Please fill in the details below</p>
    <div className="grid gap-6 mb-6 mt-6 md:grid-cols-2">
    <Input label='Name'/>
       <Input label='Other names'/>
        
    </div>
    <div className="mb-6">
    <Input label='Email'/>
    </div> 
    
    <Button name='join waiting list' onClick={onButtonClick}/>
</form>

  )
}

export default Form