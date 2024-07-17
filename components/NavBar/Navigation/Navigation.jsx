import React from 'react';
import style from './Navigation.module.css';
import { nav_assets, dropdown_res } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navbar}>
        <Link to='/'>Головна </Link>

        <Link to='/MenuPage' className={style.dropdown}>Меню 
          
        <img className={style.arrow} src={nav_assets.arrow} alt="" />

          <div className={style.menu}>
            <ul className={style.options}>
              {dropdown_res.map(item => (
              <div>
                <Link to={`/MenuPage/${item.type}`}>
                  <img className={style.options_img}  src={item.image}/>
                  <span className={style.white_text}>{item.name}</span>
                </Link>
              </div>
              ))}
            </ul>

          </div>
{/* 
          <div className={style.menu}>
            <ul className={style.options}>
              <div>
                <Link to='/MenuPage/soups'>
                  <img className={style.options_img} src={nav_assets.soup_menu_dropdown} alt="" />
                  <span className={style.white_text}> Супи</span>
                </Link>
              </div>

              <div>
                <Link to='/MenuPage/sushi'>
                  <img className={style.options_img} src={nav_assets.roll_menu_dropdown} alt="" />
                  <span className={style.white_text}> Ролли | Сети </span>
                </Link>
              </div>

              <div>
                <Link to='/MenuPage/pizza'>
                  <img className={style.options_img} src={nav_assets.pizza_menu_dropdown} alt="" />
                  <span className={style.white_text}> Піца </span>
                </Link>
              </div>

              <div style={{paddingBottom: "1.5em"}}>
                <Link to='/MenuPage/fishburger'>
                  <img className={style.options_img} src={nav_assets.hot_dog_menu_dropdown} alt="" />
                  <span className={style.white_text}> Фіш Бургери | Хот Доги </span>
                </Link>
              </div>
            </ul>
          </div> */}
        </Link>

        <Link to='/AboutUsPage'> Про нас </Link>
        <Link to='/Reviews'> Відгуки </Link>
      </nav>
    </div>
  );
};

export default Navigation;
