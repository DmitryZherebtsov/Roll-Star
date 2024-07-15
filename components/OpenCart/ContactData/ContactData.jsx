import React, { useState } from 'react'
import style from './ContactData.module.css'
import { ordered, ordered_final } from '../../../assets/assets';

const ContactData = () => {

  const [userData, setUserData] = useState({
    firstName: '',  // Тут в userData будуть вписуватися дані від корисувача
    lastName: '', // кожен елемент для кожного поля форми
    phone: '',
    email: '',
    street: '',
    house: '',
    entrance: '',
    floor: '',
    apartment: '',
    comment: '',
    numberOfPersons: '',
    paymentMethod: ''
  });

  const handleChange = (e) => { // тригериться на зміни в полі вводу
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData, 
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData); // Вивід данних в консольку
    // console.log(ordered);
    const combinedData = [userData, ...ordered_final];

    // console.log(combinedData);

    const combinedArray = [combinedData]
    console.log(combinedArray);
    
    alert("Ваше замовлення було відправлено!");
  };

  return (
    <div className={style.contact_data}>
      <form onSubmit={handleSubmit} method="post">
        <div className={style.info_data}>
          <h1>Контактні Данні </h1>
          <hr />
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Ім'я"
                type="text"
                name="firstName" // ghjcnj ім'я поля
                value={userData.firstName} // тут userData отримує значення поля
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="Прізвище"
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='+380 xx xx xx xxx'
                maxLength={12}
                value={userData.phone}
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="rollstar@gmail.com"
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={style.info_data}>
          <h1>Адреса </h1>
          <hr />
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Вулиця"
                type="text"
                name="street"
                value={userData.street}
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="Дiм"
                type="text"
                name="house"
                value={userData.house}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Підʼїзд"
                type="text"
                name="entrance"
                value={userData.entrance}
                onChange={handleChange}
              />
            </div>
            <div className={style.border}>
              <input
                placeholder="Поверх"
                type="text"
                name="floor"
                value={userData.floor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Квартира/Офіс"
                type="text"
                name="apartment"
                value={userData.apartment}
                onChange={handleChange}
              />
            </div>
            <div className={style.border}>
              <input
                placeholder="Коментар"
                type="text"
                name="comment"
                value={userData.comment}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={style.info_data}>
          <br />
          <h1>Вкажіть кiлькiсть персон </h1>
          <hr />
          <div className={style.border}>
            <input
              type="tel"
              maxLength={4}
              placeholder='Кількість осіб'
              name="numberOfPersons"
              value={userData.numberOfPersons}
              onChange={handleChange}
              required
            />
            <span>*</span>
          </div>
        </div>
        <div className={style.info_data}>
          <h1>Спосіб Оплати </h1>
          <hr />
          <div className={style.payment_type}>
            <label className="custom-radio-btn">
              <input
                type="radio"
                name="paymentMethod"
                value="Готівкою"
                checked={userData.paymentMethod === 'Готівкою'}
                onChange={handleChange}
              />
              <span className={style.label}>Готівкою</span>
            </label>
            <label className="custom-radio-btn left">
              <input
                type="radio"
                name="paymentMethod"
                value="Картою"
                checked={userData.paymentMethod === 'Картою'}
                onChange={handleChange}
              />
              <span className={style.label}>Картою</span>
            </label>
          </div>
        </div>
        <p style={{ margin: '1em 0' }}>
          * Після того, як це замовлення буде відправлено, вам зателефонують для підтвердження
        </p>
        <div className={style.btn}>
          <button className={style.button_submit} type='submit'>Відправити</button>
        </div>
      </form>
    </div>
  )
}

export default ContactData;
