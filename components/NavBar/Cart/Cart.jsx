import React, { useState } from 'react';
import style from './Cart.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Cart = ({ isMenuOpen, toggleMenu }) => {

  // const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  // const togglePhoneMenuHandler = (e) => {
  //   e.preventDefault();
  //   setIsPhoneMenuOpen((prev) => !prev);
  // };


  return (
    <div className={style.cart_phone}>
      <a href='tel:+380682711816'>
        <img className={`${style.colored}`} src={nav_assets.phone} alt="" />
      </a>

      
      <Link to='/OpenCart'>
        <img className={`${style.colored}`} src={nav_assets.cart} alt="" />
      </Link>

      <div className={style.burger_icon} onClick={toggleMenu}>
        <div className={`${style.line} ${isMenuOpen ? style.line1 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line2 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line3 : ''}`}></div>
      </div>

      {/* {isPhoneMenuOpen && (
        <div className={style.phone_menu}>
          <div className={style.arrow}></div>
          <div className={style.menu_content}>
            <p>+380682711816</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Cart;
