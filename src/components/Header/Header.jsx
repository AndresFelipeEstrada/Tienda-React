import './header.css'
import menu from '@icons/icon_menu.svg'

import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <nav className='  top-0 w-full container mx-auto flex flex-wrap items-center justify-end mt-0 py-2'>
        <div>
          <div className='pl-4 flex items-center'>
            <a className='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl' href='#'>
              <img src={menu} alt='menu' className='menu' />
            </a>
          </div>
          <div className='block lg:hidden pr-4'>
            <button id='nav-toggle' className='flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
              <svg className='fill-current h-6 w-6' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20' id='nav-content'>
            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
              <li className='mr-3'>
                <Link className='inline-block py-2 px-4 text-black font-bold no-underline' to='/'>Clothes</Link>
              </li>
              <li className='mr-3'>
                <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Electronics</Link>
              </li>
              <li className='mr-3'>
                <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Furnitures</Link>
              </li>
              <li className='mr-3'>
                <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Toys</Link>
              </li>
              <li className='mr-3'>
                <Link className='inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4' to='/'>Others</Link>
              </li>
            </ul>
            <button
              id='navAction'
              className='mx-auto lg:mx-0 hover:underline text-button-text bg-background-button font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
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
      </nav>
    </>
  )
}

export default Header
