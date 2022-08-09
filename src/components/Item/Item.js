import React from 'react';
import swal from 'sweetalert';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';



const Item = ({ nombre, imagen, tamaño,stock, id }) => {
  const onAdd = (qty) => {
    swal(`Has agregado ${qty} ${nombre}`);
  };

  return (
    <article className="card">
      <img className="card-img-top" src={imagen} alt="$'{nombre}" />

      <h3 className="card-title">{nombre}</h3>
      <span className="card-text">{tamaño}</span>
      <Link to={`/detail/${id}`} className='btn-primary'>Detalle</Link>
      <ItemCount stock={stock} onAdd={onAdd} initial={0} />
    </article>
  );
};

export default Item;
