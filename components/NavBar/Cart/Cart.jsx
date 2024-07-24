import React, { useState, useEffect } from 'react';
import style from './Cart.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Cart = ({ isMenuOpen, toggleMenu }) => {
  const toggleMenuHandler = () => {
    toggleMenu();
  };

  return (
    <div className={style.cart_phone}>
      <a href='tg://resolve?domain=yanchivlad'>
        <img className={`${style.colored}`} src={nav_assets.phone} alt="" />
      </a>
      
      <Link to='/OpenCart'>
        <img className={`${style.colored}`} src={nav_assets.cart} alt="" />
      </Link>

      <div className={style.burger_icon} onClick={toggleMenuHandler}>
        <div className={`${style.line} ${isMenuOpen ? style.line1 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line2 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line3 : ''}`}></div>
      </div>
    </div>
  );
};

export default Cart;
