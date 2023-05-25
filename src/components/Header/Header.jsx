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
      <nav className='top-0 mt-0 py-2'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>

            <div className=''>
              <Link to='/'>
                <img className='h-12' src={logo} alt='logo' />
              </Link>
            </div>

            <div>
              <div className='pl-4 flex items-center justify-end'>
                <a className='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl' href='#'>
                  <img src={menu} alt='menu' className='menu' />
                </a>
              </div>
              <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20' id='nav-content'>
                <ul className='list-reset lg:flex justify-end flex-1 items-center'>
                  <li className='mr-3'>
                    <Link className='inline-block py-2 px-4 text-black font-bold no-underline' to='/'>Ropa</Link>
                  </li>
                  <li className='mr-3'>
                    <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Electronicos</Link>
                  </li>
                  <li className='mr-3'>
                    <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Muebles</Link>
                  </li>
                  <li className='mr-3'>
                    <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Juguetes</Link>
                  </li>
                  <li className='mr-3'>
                    <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Otros</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='hidden sm:block'>
              <button
                id='navAction'
                className='mx-auto lg:mx-0 justify-end hover:underline text-button-text bg-background-button font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
              >
                {
                  isAuthenticated
                    ? (<Cart />)
                    : (<Link to='/login' className='inicio'>Iniciar Sesion</Link>)
                }
              </button>
            </div>

          </div>
          <hr className='border-b border-gray-100 opacity-25 my-0 py-0' />
        </div>
      </nav>
    </>
  )
}

export default Header
