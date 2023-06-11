// import './menu.css'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Menu = () => {
  const { logout } = useAuth()
  return (
    <div className='absolute h-auto bg-white border-solid border-2 border-gray-200 rounded-md pt-20 pr-20 pl-20 right-12 top-16'>
      <ul className='list-none p-0 m-0'>
        <li className='text-end font-bold'>
          <Link to='/orders' className='inline-block text-black no-underline mb-5'>My orders</Link>
        </li>

        <li className='text-end font-bold'>
          <Link to='/account' className='inline-block text-black no-underline mb-5'>My account</Link>
        </li>

        <li className='text-end pt-5 border-t'>
          <Link to='/login' className='inline-block text-black mb-5 bg-background-button text-sm no-underline' onClick={() => logout()}>Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
