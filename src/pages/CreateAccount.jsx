import postProduct from '../services/postProduct'

const CreateAccount = () => {
  // const nameId = useId()
  // const emailId = useId()
  // const passwordId = useId()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { nombre, profesion, email, password, telefono, descripcion, precio, imagen, categoria } = event.target
    const datos = {
      nombre: nombre.value,
      profesion: profesion.value,
      correo: email.value,
      password: password.value,
      telefono: telefono.value,
      descripcion: descripcion.value,
      precio: precio.value,
      imagen: imagen.files[0],
      categoria: categoria.value
    }

    try {
      return await postProduct(datos)
    } catch (error) {
      console.log('error in createAccount component', error)
    }
  }

  return (
    <section className='bg-gray-50'>
      <div className='flex flex-col flex-1 items-center justify-center px-6 py-8 mx-auto lg:py-0'>
        <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-headline'>
          {/* <img className='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' /> */}
          Registrate
        </a>
        <div className='w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  '>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-headline md:text-2xl '>
              Crear tu cuenta
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='nombre' className='block mb-2 text-sm font-medium text-headline'>Nombre completo</label>
                <input type='text' name='nombre' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='andres estrada...' required />
              </div>

              <div>
                <label htmlFor='profesion' className='block mb-2 text-sm font-medium text-headline'>Profesion</label>
                <input type='text' name='profesion' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Ingeniero en sistemas...' required />
              </div>

              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-headline'>Correo electronico</label>
                <input type='email' name='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
              </div>

              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-headline'>Contraseña</label>
                <input type='password' name='password' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 ' placeholder='**********' required />
              </div>

              <div>
                <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-headline'>Confirmar contraseña</label>
                <input type='password' name='confirmPassword' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='**********' required />
              </div>

              <div>
                <label htmlFor='telefono' className='block mb-2 text-sm font-medium text-headline'>Telefono</label>
                <input type='number' name='telefono' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='311353159....' required />
              </div>

              <div>
                <label htmlFor='descripcion' className='block mb-2 text-sm font-medium text-headline'>Descripcion</label>
                <textarea name='descripcion' autoComplete='on' cols='44' rows='10' className='resize-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='lorem asda asdadasd' required />
              </div>

              <div>
                <label htmlFor='precio' className='block mb-2 text-sm font-medium text-headline'>Precio</label>
                <input type='number' name='precio' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-500' placeholder='500.000' required />
              </div>

              <div>
                <label htmlFor='file_input' className='block mb-2 text-sm font-medium text-headline'>Subir Imagen</label>
                <input id='file_input' type='file' name='imagen' className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-priary-600 focus:border-primary-600 placeholder-background-button' />
              </div>

              <div>
                <label htmlFor='categorias' className='block mb-2 text-sm font-medium text-headline'>Selecciona la categoria</label>
                <select name='categoria' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'>
                  <option value=''>Categorias</option>
                  <option value='INGENIERO'>Ingeniero</option>
                  <option value='DISENO'>Diseño</option>
                  <option value='LIMPIEZA'>Limpieza</option>
                  <option value='ASESORIA'>Asesoria</option>
                  <option value='BELLEZA'>Belleza</option>
                </select>
              </div>

              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input id='terms' name='terminos' aria-describedby='terms' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' required='' />
                </div>

                <div className='ml-3 text-sm'>
                  <label htmlFor='terms' className='font-light text-paragraph'>Yo acepto los <a className='font-medium text-primary-600 hover:underline text-black' href='#'>Terminos y condiciones</a></label>
                </div>

              </div>
              <button type='submit' className='w-full bg-background-button text-button-text focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Crear cuenta</button>
              <p className='text-sm font-light text-paragraph'>
                ¿Ya tienes una cuenta? <a href='#' className='font-medium text-black hover:underline'>Iniciar sesion</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateAccount
