import React, { useState, useEffect } from 'react';
import style from './OrderedDishes.module.css';
import { cart_assets, assets, ordered } from '../../../assets/assets';

const OrderedDishes = ({ items = ordered }) => {
  const [itemCounts, setItemCounts] = useState({});

  useEffect(() => {
    const initialCounts = {};
    items.forEach(item => {
      initialCounts[item.id] = item.count;
    });
    setItemCounts(initialCounts);
  }, [items]);

  const sum = items.reduce((total, item) => {
    return total + (itemCounts[item.id] * item.price);
  }, 0);

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setItemCounts(prev => {
      const updatedCounts = { ...prev };
      delete updatedCounts[id];
      return updatedCounts;
    });
  };

  const increaseItemCount = (id) => {
    setItemCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const decreaseItemCount = (id) => {
    if (itemCounts[id] > 0) {
      setItemCounts(prev => ({
        ...prev,
        [id]: prev[id] - 1
      }));
    }
  };

  return (
    <div className={style.ordered_food}>
      <h1>Ваші Замовлення</h1>
      <br />
      {items.map(item => (
        <div className={style.dish} key={item.id}>
          <div>
            <img className={style.ordered_food_img} src={item.image} alt={item.title} />
          </div>
          <div className={style.description}>
            <div className={style.first}>
              <h2 className={style.title}>{item.title}</h2>
              <img
                className={style.cross}
                src={cart_assets.cross}
                alt=""
                onClick={() => handleRemoveItem(item.id)}
              />
            </div>
            <div className={style.second}>
              <p className={style.grey}>{item.weight}g</p>
              <br />
            </div>

            <div className={style.three}>
                <div className={style.count}>
                  <img onClick={() => decreaseItemCount(item.id)} src={assets.minus} alt="minus" className='minus'/>

                  <div className="quantity-container">
                    <h3 className='quantity'>{itemCounts[item.id] || item.count}</h3>
                  </div>
              
                  <img onClick={() => increaseItemCount(item.id)} src={assets.plus} alt="plus" className='plus'/>
                </div>

                <div>
                  <p className={style.price}>{item.price}грн</p>
                </div>
            </div>
            
          </div>
        </div>
      ))}
      <div className={style.price_place}>
        <div className={style.price_button}>
          <p>Разом: </p>
          <p> {sum}грн</p>
        </div>
      </div>
    </div>
  );
};

export default OrderedDishes;
