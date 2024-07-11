import React from 'react'
import style from './Cart.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
      <div className={style.cart_phone}>
        
        <a href='tg://resolve?domain=yanchivlad'>
            <img className={`${style.colored}`} src={nav_assets.phone} alt="" />
        </a>
        
        <Link to='/OpenCart'>
            <img className={`${style.colored}`} src={nav_assets.cart} alt="" />
        </Link>

        <Link>
            <img className={`${style.colored} ${style.burger}`} src={nav_assets.burger} alt="" />
        </Link>
      
      </div>
  )
}

export default Cart
