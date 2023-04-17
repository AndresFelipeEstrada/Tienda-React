import { useId } from 'react'
import '../styles/createAccount.css'

const CreateAccount = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  return (
    <div className='CreateAccount'>
      <div className='CreateAccount-container'>
        <h1 className='title'>My account</h1>
        <form action='/' className='form'>
          <div>
            <label htmlFor={nameId} className='label'>Name</label>
            <input id={nameId} type='text' placeholder='Teff' className='input input-name' />
            <label htmlFor={emailId} className='label'>Email</label>
            <input id={emailId} type='text' placeholder='platzi@example.com' className='input input-email' />
            <label htmlFor={passwordId} className='label'>Password</label>
            <input id={passwordId} type='password' placeholder='*********' className='input input-password' />
          </div>
          <input type='submit' value='Create' className='primary-button login-button' />
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
