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
            <li><Link to='/'>Головна</Link></li>
            <hr />
            <li><Link to='/MenuPage'>Меню</Link></li>
            <hr />
            <li><Link to='/Reviews'>Відгуки</Link></li>
            <hr />
            <li><Link to='/AboutUsPage'>Про Нас</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar;
