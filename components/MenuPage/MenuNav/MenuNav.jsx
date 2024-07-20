import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import "./MenuNav.css"

const MenuNav = ({setGlobalCategory}) => {
    
    const [category, setCategory] = useState('');
    const [clickedCategory, setClickedCategory] = useState('');

    useEffect(() => {
        setGlobalCategory(category);
    }, [category, setGlobalCategory]);

    const handleCategoryChange = (newCategory) => {
        if (clickedCategory === newCategory) {
            setCategory('pizza');
            setClickedCategory('');
        } else if (category === newCategory) {
            setCategory('pizza');
            setClickedCategory('');
        } else {
            setCategory(newCategory);
            setClickedCategory(newCategory);
        }
    };

    return (
        <div className='menunav'>
            <div className="menunav-container">
                <div className='dish_nav'>
                    <div className={clickedCategory === 'sushi' ? 'set_rolls clicked' : 'set_rolls'}
                        onClick={() => handleCategoryChange('sushi')}>
                        <img
                            src={assets.set_rolls}
                            alt="" />
                        <p className={clickedCategory === 'sushi' ? 'set_rolls clicked' : 'set_rolls'}>Ролли | Сети</p>
                    </div>
                </div>

                <div className='dish_nav'>
                    <div className={clickedCategory === 'pizza' ? 'set_rolls clicked' : 'set_rolls'}
                        onClick={() => handleCategoryChange('pizza')}>
                        <img
                            src={assets.pizza}
                            alt="" />
                        <p className={clickedCategory === 'pizza' ? 'set_rolls clicked' : 'set_rolls'}>Піца</p>
                    </div>
                </div>

                <div className='dish_nav'>
                    <div className={clickedCategory === 'soups' ? 'set_rolls clicked' : 'set_rolls'}
                        onClick={() => handleCategoryChange('soups')}>
                        <img
                            src={assets.soup}
                            alt="" />
                        <p className={clickedCategory === 'soups' ? 'set_rolls clicked' : 'set_rolls'}>Супи</p>
                    </div>
                </div>

                <div className='dish_nav'>
                    <div className={clickedCategory === 'fishburger' ? 'set_rolls clicked' : 'set_rolls'}
                        onClick={() => handleCategoryChange('fishburger')}>
                        <img
                            src={assets.fishburger}
                            alt="" />
                        <p className={clickedCategory === 'fishburger' ? 'set_rolls clicked' : 'set_rolls'}>Фіш-Доги</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MenuNav
