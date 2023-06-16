
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div class='absolute right-64 top-16 z-10 mt-2 w-56 origin-top-right rounded-md text-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabindex='-1'>
      <div class='py-1' role='none'>
        <Link href='#' class='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabindex='-1' id='menu-item-0'>Configuracion</Link>
        <Link href='#' class='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabindex='-1' id='menu-item-1'>Soporte</Link>
        <Link href='#' class='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabindex='-1' id='menu-item-2'>Licencias</Link>

      </div>
    </div>
  )
}

export default Menu
