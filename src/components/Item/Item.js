import React from 'react';
import swal from 'sweetalert';
import ItemCount from '../ItemCount';



const Item = ({ nombre, imagen, tamaño,stock }) => {
  const onAdd = (qty) => {
    swal(`Has agregado ${qty} ${nombre}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={imagen} alt="" />

      <h3 className="product-card__name">{nombre}</h3>
      <span className="product-card__name">{tamaño}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
