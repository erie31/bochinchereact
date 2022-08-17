import CartContext from './../context/cartContext'
import {useContext} from 'react';
import Table from 'react-bootstrap/Table';


const CartD = () =>{
    const {cart, clearCart, removeItem} = useContext(CartContext)

    const total = cart.reduce((acc, sum) => {
        return acc + sum.total
    }, 0)

    console.log(total)
    return(
        <div className='table'>
            <h3>{cart.length === 0 ? 'No hay productos/servicios agregados' :  'Este es tu pedido'}</h3>
            <Table >
                <thead className='col-auto'>
                    <tr><th/>
                    <th>Servicios</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((c) => {
                        return (
                        <tr key={c.id}>
                        <button className="bi bi-trash" alt='delete' onClick={() => removeItem(c.id) } id={c.id}/>
                        <td>{c.nombre}</td>
                        <td>${c.precio}</td>
                        <td>{c.quantity}</td>
                        <td>${c.total}</td>
                        </tr>)
                    })}
                    <tr>
                    <td colSpan={4}>Total</td>
                    <td>${total}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='containerButton'>

                {cart.length !== 0 && <button className='col-auto btn-primary' onClick={clearCart}>Eliminar carro</button>}
                {cart.length !== 0 && <button className='col-auto btn-primary'>Pagar</button>}
            </div>
        </div>
    )
}

export default CartD