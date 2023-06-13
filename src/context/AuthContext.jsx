import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const MY_AUTH = 'AUTH'
const MY_USER = 'USER_DATA'

export const AuthContext = createContext({
  isAuthenticated: false,
  userInfo: {},
  login: () => {},
  logout: () => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH) ?? false)
  const [userInfo, setUserInfo] = useState(JSON.parse(window.localStorage.getItem(MY_USER)) ?? {})

  const login = useCallback((userData) => {
    window.localStorage.setItem(MY_AUTH, true)
    setIsAuthenticated(true)
    setUserInfo(userData)
    window.localStorage.setItem(MY_USER, JSON.stringify(userData))
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH)
    window.localStorage.removeItem(MY_USER)
    setIsAuthenticated(false)
    setUserInfo({})
  }, [])

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      userInfo,
      setUserInfo
    }), [login, logout, isAuthenticated, userInfo])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propType = {
  children: PropTypes.object
}
