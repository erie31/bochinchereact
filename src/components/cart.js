import CartContext from './../context/cartContext'
import {useContext} from 'react';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


const CartD = () =>{
    const {cart, clearCart, removeItem} = useContext(CartContext)
let totalCart = 0;
let subTotal= 0;
    

    
    return(
        <div className='table'>
            <h3>{cart.length === 0 ? 'No hay productos/servicios agregados' :  'Este es tu pedido'}</h3>
            <Table >
                <thead className='col-auto'>
                    <tr><th/>
                    <th>Servicios</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((c) => {

                       totalCart += c.quantity*c.precio
                       subTotal =  c.precio * c.quantity
                        return (
                        <tr key={c.id}>
                       <td> <button className="bi bi-trash" alt='delete' onClick={() => removeItem(c.id) } id={c.id}/></td>
                        <td>{c.nombre}</td>
                        <td>${c.precio}</td>
                        <td>{c.quantity}</td>
                        <td>${subTotal}</td>
                        </tr>)
                    })}
                    <tr>
                    <td colSpan={4}>Total</td>
                    <td>${totalCart}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='containerButton'>

                {cart.length !== 0 && <button className='col-auto btn-primary' onClick={clearCart}>Eliminar carro</button>}
                {cart.length !== 0 && <button className='col-auto btn-primary'><Link className='btn-primary' to='/checkout'>Iniciar pago</Link></button>}
            </div>
        </div>
    )
}

export default CartD