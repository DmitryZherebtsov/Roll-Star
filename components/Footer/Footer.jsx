import React from 'react'
import style from './Footer.module.css'
import { nav_assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className={style.footer}>
        <footer>
            <hr />
            
            <img className={style.navigation_footer_img} src={nav_assets.logo} alt="" />

            <nav className={style.navigation_footer}>
                <div className={style.mobile_footer}>
                    <ul className={style.f_nav}>
                        <h4>Навігація:</h4>
                        <a href='/'>Головна</a>
                        <a href='/MenuPage'>Меню</a>
                        <a href='/AboutUsPage'>Про нас</a>
                        <a href='/Reviews'>Відгуки</a>
                    </ul>
                </div>

                <div className={style.mobile_footer}>
                    <ul>
                        <h4>Оформити замовлення:</h4>
                        <li>+38(098)090-57-857</li>
                    </ul>
                </div>

                <div className={style.mobile_footer}>
                    <ul>
                        <h4>Графік роботи:</h4>
                        <li>з 11:00 до 22:00</li>
                    </ul>
                </div>

                <div className={style.mobile_footer}>
                    <ul>
                        <h4>Соц мережі:</h4>
                        <a href="https://www.instagram.com/rollstar.vinnytsia/">
                            <div className={style.socials}>
                                <img className={style.socials_img} src={nav_assets.instagram} alt="" />
                                <li>rollstar.vinnytsia</li>
                            </div>
                        </a>

                        <a  href="mailto:rollstar@gmail.com">
                            <div className={style.socials}>
                                <img src={nav_assets.gmail} alt="" />
                                <li>rollstar@gmail.com</li>
                            </div>
                        </a>
                    </ul>
                </div>

                <div className={style.mobile_footer}>
                    <ul>
                        <h4>Адресса:</h4>
                        <p>М. Вінниця</p>
                        <p>вул. Матроса Кішки 10-а</p>
                    </ul>
                </div>
            </nav>
        </footer>

        <div className={style.bottom_text}>
            <p className={style.navigation_footer}>© 2024 Rollstar</p>
            <p className={style.navigation_footer}>Cуші-бар в Вінниці</p>
            <br />
            <div className={style.navigation_footer}>Created by MINDSCAPE</div>
        </div>

    </div>
  )
}

export default Footer