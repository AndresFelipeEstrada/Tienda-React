import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import '../styles/global.css'

import Layout from '../containers/Layout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import SendEmail from '../pages/SendEmail'
import NewPassword from '../pages/NewPassword'
import MyAccount from '../pages/MyAccount'
import CreateAccount from '../pages/CreateAccount'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'

import { CartProvider } from '../context/CartContext'
import { FiltersProvider } from '../context/FilterContext'
import { useAuth } from '../hooks/useAuth'

import { privateRoutes, publicRoutes } from './routes'
import AuthGuard from '../components/AuthGuard/auth.guard'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../containers/ProductList'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <CartProvider>
      <FiltersProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={publicRoutes.HOME} element={<Home />} />
              <Route path={publicRoutes.PRODUCT_LIST} element={<ProductList />} />
              <Route path={publicRoutes.PRODUCT_DETAIL} element={<ProductDetail />} />
              <Route path={publicRoutes.LOGIN} element={isAuthenticated ? <Navigate to='/' /> : <Login />} />
              <Route path={publicRoutes.SIGNUP} element={<CreateAccount />} />
              <Route path={publicRoutes.PASSWORD_RECOVERY} element={<PasswordRecovery />} />

              <Route element={<AuthGuard />}>
                <Route path={privateRoutes.NEW_PASSWORD} element={<NewPassword />} />
                <Route path={privateRoutes.ACCOUNT} element={<MyAccount />} />
                <Route path={privateRoutes.SEND_EMAIL} element={<SendEmail />} />
                <Route path={privateRoutes.CHECKOUT} element={<Checkout />} />
                <Route path={privateRoutes.ORDERS} element={<Orders />} />
              </Route>

              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FiltersProvider>
    </CartProvider>

  )
}

export default App
