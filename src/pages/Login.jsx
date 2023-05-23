// import '../styles/login.css'
import { Toaster, toast } from 'sonner'

import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '@logos/logo_yard_sale.svg'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [magicWord, setMagicWord] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState(null)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()

    if (magicWord.username === 'root' && magicWord.password === '123') {
      login()
      navigate('/')
    }

    toast.error('Error al iniciar sesion')
    setError('Error al iniciar sesion')
  }, [magicWord])

  const handleChangeUsername = (event) => {
    setMagicWord(prevState => ({
      ...prevState,
      username: event.target.value
    }))
  }

  const handleChangePassword = (event) => {
    setMagicWord(prevState => ({
      ...prevState,
      password: event.target.value
    }))
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src={logo}
            alt='logo'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-headline'>
            Ingresar a tu cuenta
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='flex flex-col '>
            <label htmlFor='email' className='text-sm font-bold mb-1 text-paragraph'>Email address</label>
            <input type='text' defaultValue={magicWord.username} onChange={handleChangeUsername} placeholder='platzi@example.cm' className='bg-gray-100 rounded-lg h-8 text-paragraph text-base p-1 mb-5' />

            <label htmlFor='password' className='text-sm font-bold mb-1 text-paragraph'>Password</label>
            <input type='password' defaultValue={magicWord.password} onChange={handleChangePassword} placeholder='*********' className='bg-gray-100 text-paragraph rounded-lg h-8 text-base p-1 mb-5' />
            {error && <p className='text-red-700'>{error}</p>}
            <button
              className='bg-background-button rounded-lg text-white w-full cursor-pointer text-base font-bold h-12 mt-3 mb-8'
              onClick={handleSubmit}
            >Log in
            </button>
          </form>

          <Link to='/password-recovery' className='text-background-button text-sm text-center no-underline mb-12'>Forgot my password</Link>

          <Link onClick={() => window.scrollTo(0, 0)} to='/signup' className='bg-white rounded-lg text-background-button w-full cursor-pointer text-sm font-bold h-12 border-2 border-solid border-background-button no-underline flex items-center justify-center'>Sign up</Link>

        </div>
      </div>
      <Toaster richColors />
    </>
  )
}

export default Login
