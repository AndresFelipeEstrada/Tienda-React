import './header.css'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'

import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <nav>
        <img src={menu} alt='menu' className='menu' />

        <div className='navbar-left'>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='logo' />
          </Link>

          <ul>
            <li>
              <Link to='/'>All</Link>
            </li>
            <li>
              <Link to='/'>Clothes</Link>
            </li>
            <li>
              <Link to='/'>Electronics</Link>
            </li>
            <li>
              <Link to='/'>Furnitures</Link>
            </li>
            <li>
              <Link to='/'>Toys</Link>
            </li>
            <li>
              <Link to='/'>Others</Link>
            </li>
          </ul>
        </div>

        {
  isAuthenticated
    ? (<Cart />)
    : (<Link to='/login' className='inicio'>Iniciar Sesion</Link>)
}
      </nav>

    </>
  )
}

export default Header
