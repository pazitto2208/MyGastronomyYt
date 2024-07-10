import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemToAdd) => {
        const checkItemAlready = cartItems.find((cartItem) => {
            return cartItem._id === itemToAdd._id
        })

        if(!checkItemAlready) {
            itemToAdd.quantity = 1

            setCartItems([...cartItems, itemToAdd])
            console.log('Item added correctly')   
        } else {
            console.log('Item is already on cart')   
        }
    }

    const removeFromCart = (itemId) => {
        const cartItemsSanitized = cartItems.filter((item) => {
            return item._id !== itemId
        })
        
        setCartItems(cartItemsSanitized)

    }

    const updateCartItems = (items) => {
        setCartItems(items)
    }

    const clearCart = () => {
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{ removeFromCart, addToCart, cartItems, updateCartItems, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context) {
        console.log('you are out of CartContext')
    }

    return context
}