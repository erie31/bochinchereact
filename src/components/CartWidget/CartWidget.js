import './CartWidget.css'
<<<<<<< HEAD
const CartWidget = () => {
    return (
        <div className="cart fa fa-shopping-cart">
            "40" 
        </div>
=======
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart' className="cart fa fa-shopping-cart">
           { quantity }
        </Link>
>>>>>>> RenderingYFireBase
    )
}
export default CartWidget