import React from 'react'
import {FaTwitter} from'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

function IconGroup() {
  return (
    <div className='flex flex-row gap-1'>
        <FaInstagram/>
        <FaTwitter/>
        <FaGoogle/>
    </div>
  )
}

export default IconGroup
