import { useState } from 'react'
import { Link } from 'react-router-dom'


const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input  type='number' onChange={handleChange} value={count}/>
            <button  onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
       <> <div>
            <p>{count}</p>
            <button className='btn-primary' onClick={decrement}>-</button>
            <button className='btn-primary' onClick={increment}>+</button>
        </div>
        <div>
            <button className='btn-primary' onClick={() => onConfirm(count)}>Agregar al carrito</button>

        </div>
        </>
    )
}


const ItemDetail = ({nombre,imagen,precio,stock,catering, category}) => {
    const [inputType] = useState('button')
    const [quantity, setQuantity] = useState(0)
    

    const  handleOnAdd = (quantity) => {
               setQuantity(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <article className="">
            
            <header className="card-title">
                <h2 className="card-text">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className=""/>
            </picture>
            <section>
                <p className="">
                    Categoria: {category}
                </p>
                <p className="">
                    Descripción: {catering}
                </p>
                <p className="">
                    Precio: {precio}
                </p>
            </section>           
            <footer className=''>
                {
                    quantity === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail