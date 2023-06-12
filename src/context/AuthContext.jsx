import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const MY_AUTH = 'AUTH'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH) ?? false)
  const [userInfo, setUserInfo] = useState({})

  const login = useCallback((userData) => {
    window.localStorage.setItem(MY_AUTH, true)
    setIsAuthenticated(true)
    setUserInfo(userData)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH)
    setIsAuthenticated(false)
    setUserInfo({})
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      userInfo
    }), [login, logout, isAuthenticated, userInfo])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propType = {
  children: PropTypes.object
}
