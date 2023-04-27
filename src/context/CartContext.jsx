import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'sonner'

const KEY = 'products'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const getInitialCart = () => {
    try {
      const storedValue = window.localStorage.getItem(KEY)
      return storedValue ? JSON.parse(storedValue) : []
    } catch (error) {
      return []
    }
  }

  const [cart, setCart] = useState(getInitialCart())

  const addToCart = useCallback(product => {
    const nuevosItems = [...cart, product]
    setCart(nuevosItems)

    window.localStorage.setItem(KEY, JSON.stringify(nuevosItems))

    toast.success('Producto agregado al carrito')
  }, [cart])

  const removeFromCart = useCallback(product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))

    let cartItems = JSON.parse(window.localStorage.getItem(KEY))
    cartItems = cartItems.filter(item => item.id !== product.id)

    window.localStorage.setItem(KEY, JSON.stringify(cartItems))

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
      setCart,
      addToCart,
      removeFromCart,
      sumTotal,
      productInCart
    }), [cart, addToCart, removeFromCart, sumTotal, productInCart])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.prototype = {
  children: PropTypes.object
}
