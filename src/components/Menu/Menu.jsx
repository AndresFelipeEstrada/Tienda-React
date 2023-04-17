import { Link } from 'react-router-dom'
import './menu.css'
import { useAuth } from '../../hooks/useAuth'

const Menu = () => {
  const { logout } = useAuth()
  return (
    <div className='desktop-menu'>
      <ul>
        <li>
          <Link to='/orders' className='title'>My orders</Link>
        </li>

        <li>
          <Link to='/account'>My account</Link>
        </li>

        <li>
          <Link to='/login' onClick={() => logout()}>Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
