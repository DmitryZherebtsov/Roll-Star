import React, { useState } from 'react'
import style from './NavBar.module.css'
import Logo from '../NavBar/Logo/Logo'
import Navigation from './Navigation/Navigation'
import Cart from './Cart/Cart'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div>
      <div className={style.head}>
        <div className={style.nav_bar}>
          <div className={style.logo_block}> <Logo />      </div>
          <div className={style.nav_block}>  <Navigation /></div>
          <div className={style.cart_block}> <Cart toggleMenu={toggleMenu} /></div>
        </div>
      </div>

      {isMenuOpen && (
        <div>
          <ul className={style.burger_nav}>
            <li><Link to='/' onClick={closeMenu}>Головна</Link></li>
            <hr />
            <li><Link to='/MenuPage' onClick={closeMenu}>Меню</Link></li>
            <hr />
            <li><Link to='/Reviews' onClick={closeMenu}>Відгуки</Link></li>
            <hr />
            <li><Link to='/AboutUsPage' onClick={closeMenu}>Про Нас</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar;
