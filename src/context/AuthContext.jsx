import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const MY_AUTH = 'AUTH'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH) ?? false)

  const login = useCallback(() => {
    window.localStorage.setItem(MY_AUTH, true)
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated
    }), [login, logout, isAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propType = {
  children: PropTypes.object
}
