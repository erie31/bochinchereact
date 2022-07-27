import React from 'react';
import { useState } from 'react';


const ItemCount = ({ onAdd, initial, stock }) => {
  
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="display-4">
        <button
          className="btn btn-primary btn-lg active"
          onClick={() => addProduct(-1)}
          disabled ={qty === initial}>-</button>
        <span className="count-container__qty">{qty}</span>
        <button
          className= "btn btn-primary btn-lg active"
          onClick={() => addProduct(+1)}
          disabled={qty === stock}
        >+</button>
      </div>

      <button
        className= "btn btn-primary" data-toggle="button"
        onClick={() => {
          onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Sumar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
