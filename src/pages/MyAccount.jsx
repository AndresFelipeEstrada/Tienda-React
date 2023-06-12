import { useId } from 'react'
// import '../styles/myAccount.css'

const MyAccount = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmPassword = useId()
  return (
    <div className='grid w-full h-screen place-items-center'>
      <div className='grid grid-rows-1 w-72 '>
        <h1 className='text-lg mb-9 text-headline text-center'>Mi cuenta</h1>
        <form action='/' className='flex flex-col'>
          <div>
            <label htmlFor={nameId} className='text-sm font-bold mb-1 text-headline'>Nombre</label>
            <p className='text-very-gray text-lg my-6'>Luisa Yokoo</p>
            <label htmlFor={emailId} className='text-sm font-bold mb-1 text-headline'>Correo</label>
            <p className='text-very-gray text-lg my-6'>luisayokoo@gmail.com</p>
            <label htmlFor={passwordId} className='text-sm font-bold mb-1 text-headline'>Password</label>
            <p className='text-very-gray text-lg my-6'>*********</p>
            <label htmlFor={confirmPassword} className='text-sm font-bold mb-1 text-headline'>Confirmar Password</label>
            <p className='text-very-gray text-lg my-6'>*********</p>
          </div>
          <input type='submit' value='Editar' className='bg-background-button rounded-lg border-solid w-full cursor-pointer text-lg font-bold h-12 my-8' />
        </form>
      </div>
    </div>
  )
}

export default MyAccount
