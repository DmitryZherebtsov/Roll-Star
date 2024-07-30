import React from 'react';
import style from './Cart.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Cart = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={style.cart_phone}>
      <div>
        <a href='tel:+380682711816' aria-label="Phone number +380682711816">
          <img className={style.colored} src={nav_assets.phone} alt="Phone icon" />
        </a>
      </div>
      
      <div>
        <Link to='/OpenCart' aria-label="Open Cart">
          <img className={style.colored} src={nav_assets.cart} alt="Cart icon" />
        </Link>
      </div>

      <div className={style.burger_icon} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Menu">
        <div className={`${style.line} ${isMenuOpen ? style.line1 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line2 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line3 : ''}`}></div>
      </div>
    </div>
  );
};

export default Cart;
