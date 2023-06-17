import '../styles/passwordRecovery.css'

const PasswordRecovery = () => {
  return (
    <section class='bg-gray-50 '>
      <div class='flex flex-col items-center justify-center mx-auto py-12'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-headline'>
            Recupera tu cuenta
          </h2>
        </div>

        <div class='w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md   sm:p-8'>
          <h2 class='mb-1 text-xl font-bold leading-tight tracking-tight text-headline md:text-2xl'>
            Cambiar Password
          </h2>
          <form class='mt-4 space-y-4 lg:mt-5 md:space-y-5' action='#'>
            <div>
              <label for='email' class='block mb-2 text-sm font-medium text-gray-900 '>Tu correo</label>
              <input type='email' name='email' id='email' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='example@gmail.com' required='' />
            </div>
            <div>
              <label for='password' class='block mb-2 text-sm font-medium text-gray-900 '>Nueva Password</label>
              <input type='password' name='password' id='password' placeholder='••••••••' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required='' />
            </div>
            <div>
              <label for='confirm-password' class='block mb-2 text-sm font-medium text-gray-900 '>Confirmar password</label>
              <input type='confirm-password' name='confirm-password' id='confirm-password' placeholder='••••••••' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required='' />
            </div>
            <div class='flex items-start'>
              <div class='flex items-center h-5'>
                <input id='newsletter' aria-describedby='newsletter' type='checkbox' class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' required='' />
              </div>
              <div class='ml-3 text-sm'>
                <label for='newsletter' class='font-light text-gray-500 '>Accepto los<a class='font-medium text-primary-600 hover:underline dark:text-primary-500' href='#'>Terminos y Condiciones</a></label>
              </div>
            </div>
            <button
              className='bg-background-button rounded-lg text-white w-full cursor-pointer text-base font-bold h-12 mt-3 mb-8'
            >Cambiar Password
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PasswordRecovery
