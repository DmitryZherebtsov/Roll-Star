// MenuNav.jsx
import React, { useEffect } from 'react'
import { assets } from '../../../assets/assets'
import "./MenuNav.css"

const MenuNav = ({ category, setGlobalCategory }) => {
 
  useEffect(() => {
    setGlobalCategory(category);
  }, [category, setGlobalCategory]);

  const handleCategoryChange = (newCategory) => {
    setGlobalCategory(newCategory);
  };

  return (
    <div className='menunav'>
      <div className="menunav-container">
        <div className='dish_nav'>
          <div className={category === 'sushi' ? 'set_rolls clicked' : 'set_rolls'}
              onClick={() => handleCategoryChange('sushi')}>
            <img
              src={assets.set_rolls}
              alt="" />
            <p className={category === 'sushi' ? 'set_rolls clicked' : 'set_rolls'}>Ролли | Сети</p>
          </div>
        </div>

        <div className='dish_nav'>
          <div className={category === 'pizza' ? 'set_rolls clicked' : 'set_rolls'}
              onClick={() => handleCategoryChange('pizza')}>
            <img
              src={assets.pizza}
              alt="" />
            <p className={category === 'pizza' ? 'set_rolls clicked' : 'set_rolls'}>Піца</p>
          </div>
        </div>

        <div className='dish_nav'>
          <div className={category === 'soups' ? 'set_rolls clicked' : 'set_rolls'}
              onClick={() => handleCategoryChange('soups')}>
            <img
              src={assets.soup}
              alt="" />
            <p className={category === 'soups' ? 'set_rolls clicked' : 'set_rolls'}>Супи</p>
          </div>
        </div>

        <div className='dish_nav'>
          <div className={category === 'fishburger' ? 'set_rolls clicked' : 'set_rolls'}
              onClick={() => handleCategoryChange('fishburger')}>
            <img
              src={assets.fishburger}
              alt="" />
            <p className={category === 'fishburger' ? 'set_rolls clicked' : 'set_rolls'}>Фіш-Доги</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MenuNav
