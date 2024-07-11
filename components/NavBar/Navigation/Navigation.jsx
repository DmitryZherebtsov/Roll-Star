import React from 'react';
import style from './Navigation.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
  <div className={style.nav}>

    <nav className={style.navbar}>
      <a href="/"> Головна </a>

      <a href="/MenuPage" className={style.dropdown}> Меню <img className={style.arrow} src={nav_assets.arrow} alt="" />
          <div className={style.menu}>
            <ul className={style.options}>
              <div>
                <a href="/MenuPage"><img className={style.options_img} src={nav_assets.soup_menu_dropdown} alt="" /> <span className={style.white_text}> Супи</span> </a>
              </div>

              <div>
                <a href="/MenuPage"><img className={style.options_img} src={nav_assets.roll_menu_dropdown} alt="" /> <span className={style.white_text}> Ролли | Сети </span></a>
              </div>

              <div>
                <a href="/MenuPage"><img className={style.options_img} src={nav_assets.pizza_menu_dropdown} alt="" /> <span className={style.white_text}> Піца </span></a>
              </div>

              <div style={{paddingBottom: "1.5em"}}>
                <a href="/MenuPage"><img className={style.options_img} src={nav_assets.hot_dog_menu_dropdown} alt="" /> <span className={style.white_text}> Фіш Бургери | Хот Доги </span></a>
              </div>
            </ul>
          </div>
      </a>

      <a href="/AboutUsPage"> Про нас </a>

      <a href=""> Відгуки </a>
    </nav>

  </div>  
  );
};

export default Navigation;
