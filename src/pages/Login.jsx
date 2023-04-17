import '../styles/login.css'
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
    <div className='Login'>
      <div className='Login-container'>
        <img src={logo} alt='logo' className='logo-login' />
        <form className='form'>
          <label htmlFor='email' className='label'>Email address</label>
          <input type='text' defaultValue={magicWord.username} onChange={handleChangeUsername} placeholder='platzi@example.cm' className='input input-email' />

          <label htmlFor='password' className='label'>Password</label>
          <input type='password' defaultValue={magicWord.password} onChange={handleChangePassword} placeholder='*********' className='input input-password' />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            className='primary-button login-button'
            onClick={handleSubmit}
          >Log in
          </button>
        </form>

        <Link to='/password-recovery' className='password-redirect'>Forgot my password</Link>

        <Link to='/signup' className='secondary-button signup-button'>Sign up</Link>
      </div>

      <Toaster richColors />
    </div>
  )
}

export default Login
