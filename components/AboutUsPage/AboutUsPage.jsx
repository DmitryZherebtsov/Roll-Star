import React from 'react'
import "./AboutUsPage.css"
import { home_page } from '../../assets/assets'

const AboutUsPage = () => {
  return (
    <div className='aboutUsPage'>
      <h1>Ласкаво просимо до <br /><span className='title-text'>SUSHI BAR & ROLLSTAR!</span></h1>
        <div className="aboutUsContainer">
            <div className="row">
                <p>Ми - ваші провідні гурмани міста, які пропонують неперевершені смаки суші та ролів. Але це лише початок нашої історії! У нашому ресторані ви знайдете ще більше смакових сенсацій, завдяки нашим унікальним фіш бургерам та фіш догам.</p>
                <img className='aboutUsPageImage' src={home_page.slider_img13} />
            </div>
            <div className="row-reverse">
                <img className='aboutUsPageImage' src={home_page.slider_img14} id='image'/>
                <p> Ми - ваші провідні гурмани міста, які пропонують неперевершені смаки суші та ролів. Але це лише початок нашої історії! У нашому ресторані ви знайдете ще більше смакових сенсацій, завдяки нашим унікальним фіш бургерам та фіш догам.</p>
            </div>
            <div className="row">
                <p>Чи ви шукаєте смачну альтернативу традиційним ролам і суші, чи просто бажаєте насолодитися вишуканим поєднанням смаків - ми завжди раді вас вітати!</p>
                <img className='aboutUsPageImage' src={home_page.slider_img15} />
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage
