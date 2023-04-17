import { useId } from 'react'
import '../styles/myAccount.css'

const MyAccount = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  return (
    <div className='MyAccount'>
      <div className='MyAccount-container'>
        <h1 className='title'>My account</h1>
        <form action='/' className='form'>
          <div>
            <label htmlFor={nameId} className='label'>Name</label>
            <p className='value'>Camila Yokoo</p>
            <label htmlFor={emailId} className='label'>Email</label>
            <p className='value'>camilayokoo@gmail.com</p>
            <label htmlFor={passwordId} className='label'>Password</label>
            <p className='value'>*********</p>
          </div>
          <input type='submit' value='Edit' className='secondary-button login-button' />
        </form>
      </div>
    </div>
  )
}

export default MyAccount
