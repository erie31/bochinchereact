import React from 'react';
import { useState } from 'react';


const ItemCount = ({ onAdd, initial = 1, stock }) => {
  
  const [quantity, setQuantity] = useState(initial);

  const addProduct = (num) => {
    setQuantity(quantity + num);
  };

  return (
    <div className="count-container">
      <div className="display-4">
        <button
          className="btn btn-primary btn-lg active"
          onClick={() => addProduct(-1)}
          disabled ={quantity === initial}>-</button>
        <span>{quantity}</span>
        <button
          className= "btn btn-primary btn-lg active"
          onClick={() => addProduct(+1)}
          disabled={quantity === stock}
        >+</button>
      </div>

      <button
        className= "btn btn-primary" data-toggle="button"
        onClick={() => {
          onAdd(quantity);
        }}
        disabled={stock === 0 ? true : null}
      >
        Sumar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
