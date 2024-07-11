import React, { useState } from 'react';
import { assets } from "../../../assets/assets";
import "./MenuElement.css";

const MenuElement = ({ item, addToCart }) => {
  const [itemCount, setItemCount] = useState(0);

  const increaseItemCount = () => {
    setItemCount(prev => prev + 1);
  };

  const decreaseItemCount = () => {
    if (itemCount > 0) {
      setItemCount(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (itemCount > 0){
      const NewItem = { id: item.id, title: item.title, description: item.description, weight: item.weight, price: item.price, count: itemCount }
      addToCart(NewItem);
      setItemCount(0);
    }
  };

  return (
    // <div className='menu-card'>
    //   <img src={item.image} alt={item.title} />
    //   <div className="content-container">
    //     <h1 className="title">{item.title}</h1>
    //     <div className="description-container">
    //       <h2 className="description">{item.description}</h2>
    //     </div>
    //     <div className='flex-container'>
    //       <div className="middle-container">
    //         <h3 className="weight">{item.weight} грам</h3>
    //         <h3 className="price">{item.price} ₴</h3>
    //       </div>
    //       <div className="bottom-container">
    //         <div className="add-menu">
    //           <img onClick={decreaseItemCount} src={assets.minus} alt="minus" className='minus'/>
    //           <div className="quantity-container">
    //             <h3 className='quantity'>{itemCount}</h3>
    //           </div>
    //           <img onClick={increaseItemCount} src={assets.plus} alt="plus" className='plus'/>
    //         </div>
    //         <button onClick={handleAddToCart}><h3>У кошик</h3></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='menu-card'>

        <div className='dish_img'>
          <img src={item.image} alt={item.title} />
        </div>

        <div className='info_dish'>
          <div>
            <h1 className="title">{item.title}</h1>
          </div>

          <div className="description-container">
            <p className="description">{item.description}</p>
          </div>
        </div>

        <div className='price'>
          <h3 className="weight">{item.weight} грам</h3>
          <h3 className="price">{item.price} ₴</h3>
        </div>

        <div className='to_card'>
              <div className='plus_minus'>
               <img onClick={decreaseItemCount} src={assets.minus} alt="minus" className='minus'/>
               
               <div className="quantity-container">
                 <h3 className='quantity'>{itemCount}</h3>
               </div>
               
               <img onClick={increaseItemCount} src={assets.plus} alt="plus" className='plus'/>
              </div>
              <button className='knopka' onClick={handleAddToCart}><h3>У кошик</h3></button>
        </div>

    </div>
  );
};

export default MenuElement;
