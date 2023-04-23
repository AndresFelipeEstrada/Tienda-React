import { useCallback, useState } from 'react'

const useToggle = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)

  const handleOrder = useCallback(() => {
    setToggle(!toggle)
    setToggleOrders(false)
  }, [toggle])

  const handleCart = useCallback(() => {
    setToggleOrders(!toggleOrders)
    setToggle(false)
  }, [toggleOrders])

  return { toggle, toggleOrders, setToggleOrders, handleOrder, handleCart }
}

export default useToggle
