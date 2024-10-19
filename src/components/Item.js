import React from 'react';

const Item = ({ name, brand, price, weight, store, quantity, image, onEdit, onDelete }) => {
  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p> {/* Display quantity */}
      
      {/* Edit and Delete Icons */}
      <div className="item-actions">
        <span className="edit-icon" onClick={onEdit}>✏️</span>
        <span className="delete-icon" onClick={onDelete}>🗑️</span>
      </div>
    </div>
  );
};

export default Item;
