import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import '../styles/global.css'

import Layout from '../containers/Layout'

import { privateRoutes, publicRoutes } from './routes'
import { CartProvider } from '../context/CartContext'
import { FiltersProvider } from '../context/FilterContext'
import { useAuth } from '../hooks/useAuth'
import AuthGuard from '../components/AuthGuard/auth.guard'

function App () {
  const { isAuthenticated } = useAuth()

  const Home = lazy(() => import('../pages/Home'))
  const ProductList = lazy(() => import('../containers/ProductList'))
  const ProductDetail = lazy(() => import('../pages/ProductDetail'))
  const Login = lazy(() => import('../pages/Login'))
  const CreateAccount = lazy(() => import('../pages/CreateAccount'))
  const PasswordRecovery = lazy(() => import('../pages/PasswordRecovery'))

  const NewPassword = lazy(() => import('../pages/NewPassword'))
  const MyAccount = lazy(() => import('../pages/MyAccount'))
  const SendEmail = lazy(() => import('../pages/SendEmail'))
  const Checkout = lazy(() => import('../pages/Checkout'))
  const Orders = lazy(() => import('../pages/Orders'))
  const NotFound = lazy(() => import('../pages/NotFound'))

  return (
    <CartProvider>
      <FiltersProvider>
        <BrowserRouter>
          <Suspense fallback={
            <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
              <div className='border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64' />
            </div>
}
          >

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
          </Suspense>
        </BrowserRouter>
      </FiltersProvider>
    </CartProvider>

  )
}

export default App
