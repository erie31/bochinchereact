

const ItemDetail = ({nombre,imagen,precio,catering}) => {
    return (
        <article>
      <img className="" src={imagen} alt="$'{nombre}" />
      <h3 className="card-title">{nombre}</h3>
      <h4>{catering}</h4>
      <span className="card-text">${precio}</span>
      
      
      
    </article>
    )
}
export default ItemDetail