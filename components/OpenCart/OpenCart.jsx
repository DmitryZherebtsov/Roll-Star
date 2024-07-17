import React from 'react'
import style from './OpenCart.module.css'
import ContactData from './ContactData/ContactData'
import OrderedDishes from './OrderedDishes/OrderedDishes'

const OpenCart = () => {
  return (
    <div className={style.open_cart}>

      <div className={style.main_block}>

        <div className={style.mobile_version_dishes}>
          <OrderedDishes />
        </div>

        <div className={style.data} >
          <ContactData />
        </div>

        <div className={style.dishes}>
          <OrderedDishes />
        </div>
        
      </div>

      <center><p>Після відправки зачекайте 2-3 секунди до повідомлення</p></center>

    </div>
  )
}

export default OpenCart