import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import CartContext from '../../context/cartContext'
const ItemDetail = ({ id, nombre, imagen, category, catering, precio, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    
    const productQuantity = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = { id, nombre, precio, quantity }

        addItem(productToAdd)
    }


    return (
        <article>
            <header className='card-title'>
                <h2 className='card-text'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre}/>
            </picture>
            <section>
                <p className="text-muted">
                    Categoria: {category}
                </p>
                <p className="text-muted">
                    Descripción: {catering}
                </p>
                <p className="text-muted">
                    Precio: {precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (<Link to='/cart'>Finalizar compra</Link>)
                }
            </footer>
        </article>
    )
}

export default ItemDetail