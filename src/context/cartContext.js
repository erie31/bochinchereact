import { useState, createContext} from 'react'


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let acc = 0

        cart.forEach(prod => {
        acc += prod.quantity
        })

        return acc
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    const getTotal = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.quantity * prod.price
        })

        return acc
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext