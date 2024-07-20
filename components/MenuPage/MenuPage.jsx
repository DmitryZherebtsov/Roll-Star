import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuElement from './MenuElement/MenuElement';
import { menu_items_list, assets } from "../../assets/assets";
import "./MenuPage.css";
import MenuNav from './MenuNav/MenuNav';

const MenuPage = () => {
  const {category: initialCategory} = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [category, setGlobalCategory] = useState(initialCategory || 'pizza');

  const addToCart = (NewItem) => {
    setCartItems(prevItems => [...prevItems, NewItem]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setGlobalCategory(initialCategory || 'pizza');
  }, [initialCategory]);

  const filteredMenuItems = category === "" ? menu_items_list : menu_items_list.filter(item => item.type === category);

  return (
    <div className='menupage' id='menu'>
      <MenuNav category={category} setGlobalCategory={setGlobalCategory} />
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
  );
}

export default MenuPage;
