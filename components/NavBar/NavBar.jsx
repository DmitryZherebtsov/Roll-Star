import React from 'react'
import style from './NavBar.module.css'
import Logo from '../NavBar/Logo/Logo'
import Navigation from './Navigation/Navigation'
import Cart from './Cart/Cart'

const NavBar = () => {
  return (
    <div className={style.head}>
        <div className={style.nav_bar}>
          
          <div className={style.logo_block}> <Logo />     </div>

          <div className={style.nav_block}>  <Navigation /></div>

          <div className={style.cart_block}> <Cart />    </div>

        </div>
    </div>
  )
}

export default NavBar