import React from 'react'
import './DivideElement.css';
import { nav_assets } from '../../../assets/assets'

const DivideElement = () => {
  return (
    <div className='divide_block'>
        <hr className='divide_line' />
        <img className='divide_logo' src={nav_assets.logo} />
        <hr className='divide_line' />
    </div>
  )
}

export default DivideElement
