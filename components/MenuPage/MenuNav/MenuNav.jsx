import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import "./MenuNav.css"

const MenuNav = ({setGlobalCategory}) => {
    
    const [category, setCategory] = useState('pizza');
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
            setClickedCategory('pizza');
        } else {
            setCategory(newCategory);
            setClickedCategory(newCategory);
        }
    };

    return (
        <div className='menunav'>
            <div className="menunav-container">
                {/* <img onClick={() => handleCategoryChange('sushi')}
                    className={category==="sushi"?"active":""} 
                    src={category === "sushi" ? assets.sushi_menu_active : assets.sushi_menu} />
                <img onClick={() => handleCategoryChange('pizza')}
                    className={category==="pizza"?"active":""} 
                    src={category === "pizza" ? assets.pizza_menu_active : assets.pizza_menu} alt="" />
                <img onClick={() => handleCategoryChange('soups')} 
                    className={category==="soups"?"active":""} 
                    src={category === "soups" ? assets.soups_menu_active : assets.soups_menu} alt="" />
                <img onClick={() => handleCategoryChange('fishburger')}
                    className={category==="fishburger"?"active":""} 
                    src={category === "fishburger" ? assets.fishburger_menu_active : assets.fishburger_menu} alt="" />
                */}
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
