import React, { useState, useEffect } from 'react';
import MenuElement from './MenuElement/MenuElement'
import {menu_items_list, assets} from "../../assets/assets"
import "./MenuPage.css"
import MenuNav from './MenuNav/MenuNav';

const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [category, setGlobalCategory] = useState('pizza');

  const addToCart = (NewItem) => {
    setCartItems(prevItems => [...prevItems, NewItem]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const filteredMenuItems = category===""? menu_items_list : menu_items_list.filter(item => item.type === category);

  return (
    <div className='menupage' id='menu'>
      <MenuNav setGlobalCategory={setGlobalCategory} />
      <div className="menupage-container">
        {filteredMenuItems.map((item) => (
          <MenuElement 
            key={item.id} 
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuPage
