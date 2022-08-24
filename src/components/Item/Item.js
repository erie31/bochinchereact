import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ nombre, imagen, tamaño, id }) => {
 
  return (
    <article className="card">
      <img className="card-img-top" src={imagen} alt={nombre} />

      <h3 className="card-title">{nombre}</h3>
      <span className="card-text">{tamaño}</span>
      <Link to={`/detail/${id}`} className='btn-primary'>Detalle</Link>
      
    </article>
  );
};

export default Item;
