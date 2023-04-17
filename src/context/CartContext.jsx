import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'sonner'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = useCallback(product => {
    const nuevosItems = [...cart, product]
    setCart(nuevosItems)
    toast.success('Producto agregado al carrito')
  }, [cart])

  const removeFromCart = useCallback(product => {
    setCart(prevState => prevState.filter((item) => item.id !== product.id))
    toast.error('Producto eliminado del carrito')
  }, [cart])

  const sumTotal = useMemo(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    return total
  }, [cart])

  const productInCart = useCallback((product) => {
    return cart.some(item => item.id === product.id)
  }, [cart])

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      sumTotal,
      productInCart
    }), [cart, addToCart, removeFromCart, sumTotal, productInCart]
  )

  return (

    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.prototype = {
  children: PropTypes.object
}

export default CartProvider
