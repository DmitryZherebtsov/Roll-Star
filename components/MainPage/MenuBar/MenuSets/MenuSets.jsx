import React from 'react';
import './MenuSets.css';
import { menu_home_page } from '../../../../assets/assets';
import { Link } from 'react-router-dom';

const MenuSets = () => {
  return (
    <div className="menu-home-page">
      {menu_home_page.map(item => (
        <div key={item._id} className="menu-item">
          <Link to='/MenuPage'><img src={item.image} alt={item.description} className="menu-image" /></Link>
          <div className="name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default MenuSets;
