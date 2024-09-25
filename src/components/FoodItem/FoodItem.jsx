import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  // Add console.log here to check if assets are being imported correctly
  console.log('Rating Stars Path:', assets.rating_stars);
  console.log('Add Icon White Path:', assets.add_icon_white);
  console.log('Remove Icon Red Path:', assets.remove_icon_red);
  console.log('Add Icon Green Path:', assets.add_icon_green);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!itemCount ? (
          <img
            className='add'
            onClick={() => setItemCount(prev => prev + 1)}
            src={assets.add_icon_white}
            alt="Add item"
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

