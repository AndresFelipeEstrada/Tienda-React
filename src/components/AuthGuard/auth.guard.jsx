import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { publicRoutes } from '../../routes/routes'

const AuthGuard = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />
}

export default AuthGuard
