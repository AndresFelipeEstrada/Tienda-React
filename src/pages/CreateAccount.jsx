import { useId } from 'react'

const CreateAccount = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  return (
    <section class='bg-gray-50'>
      <div class='flex flex-col flex-1 items-center justify-center px-6 py-8 mx-auto lg:py-0'>
        <a href='#' class='flex items-center mb-6 text-2xl font-semibold text-headline'>
          {/* <img class='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' /> */}
          Registrate
        </a>
        <div class='w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  '>
          <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class='text-xl font-bold leading-tight tracking-tight text-headline md:text-2xl '>
              Crear tu cuenta
            </h1>
            <form class='space-y-4 md:space-y-6'>
              <div>
                <label for='nombre' class='block mb-2 text-sm font-medium text-headline'>Nombre completo</label>
                <input type='text' name='nombre' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='andres estrada...' required />
              </div>
              <div>
                <label for='profesion' class='block mb-2 text-sm font-medium text-headline'>Profesion</label>
                <input type='text' name='profesion' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Ingeniero en sistemas...' required />
              </div>
              <div>
                <label for='telefono' class='block mb-2 text-sm font-medium text-headline'>Telefono</label>
                <input type='number' name='telefono' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='311353159....' required />
              </div>
              <div>
                <label for='email' class='block mb-2 text-sm font-medium text-headline'>Correo electronico</label>
                <input type='email' name='email' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
              </div>
              <div>
                <label for='password' class='block mb-2 text-sm font-medium text-headline'>Contraseña</label>
                <input type='password' name='password' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 ' placeholder='**********' required />
              </div>
              <div>
                <label for='confirm-password' class='block mb-2 text-sm font-medium text-headline'>Confirmar contraseña</label>
                <input type='password' name='confirm-password' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='**********' required />
              </div>
              <div>
                <label for='descripcion' className='block mb-2 text-sm font-medium text-headline'>Descripcion</label>
                <textarea name='descripcion' autoComplete='on' cols='44' rows='10' className='resize-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='lorem asda asdadasd' required />
              </div>
              <div>
                <label for='precio' class='block mb-2 text-sm font-medium text-headline'>Precio</label>
                <input type='number' name='precio' class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='500.000' required />
              </div>
              <div>
                <label for='file_input' class='block mb-2 text-sm font-medium text-headline'>Subir Imagen</label>
                <input id='file_input' type='file' class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-priary-600 focus:border-primary-600 placeholder-background-button' />
              </div>
              <div>

                <label for='categorias' class='block mb-2 text-sm font-medium text-headline'>Selecciona la categoria</label>
                <select id='countries' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'>
                  <option selected>Categorias</option>
                  <option value='Mantenimiento'>Mantenimiento</option>
                  <option value='Limpieza'>Limpieza</option>
                  <option value='Asesoria'>Asesoria</option>
                  <option value='Diseño'>Diseño</option>
                </select>

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
