import { useId } from 'react'
import '../styles/createAccount.css'

const CreateAccount = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  return (
    <section class='bg-gray-50'>
      <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a href='#' class='flex items-center mb-6 text-2xl font-semibold text-headline'>
          {/* <img class='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' /> */}
          Registrate
        </a>
        <div class='w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  '>
          <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class='text-xl font-bold leading-tight tracking-tight text-headline md:text-2xl '>
              Crear tu cuenta
            </h1>
            <form class='space-y-4 md:space-y-6' action='#'>
              <div>
                <label for='email' class='block mb-2 text-sm font-medium text-paragraph'>Your email</label>
                <input type='email' name='email' id='email' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required='' />
              </div>
              <div>
                <label for='password' class='block mb-2 text-sm font-medium text-paragraph'>Password</label>
                <input type='password' name='password' id='password' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='**********' required='' />
              </div>
              <div>
                <label for='confirm-password' class='block mb-2 text-sm font-medium text-paragraph'>Confirm password</label>
                <input type='email' name='email' id='email' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required='' />
              </div>
              <div class='flex items-start'>
                <div class='flex items-center h-5'>
                  <input id='terms' aria-describedby='terms' type='checkbox' class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' required='' />
                </div>
                <div class='ml-3 text-sm'>
                  <label for='terms' class='font-light text-paragraph'>Yo acepto los <a class='font-medium text-primary-600 hover:underline text-black' href='#'>Terminos y condiciones</a></label>
                </div>
              </div>
              <button type='submit' class='w-full bg-background-button text-button-text focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Crear cuenta</button>
              <p class='text-sm font-light text-paragraph'>
                ¿Ya tienes una cuenta? <a href='#' class='font-medium text-black hover:underline'>Iniciar sesion</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateAccount
