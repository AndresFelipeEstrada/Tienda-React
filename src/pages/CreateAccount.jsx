import { Link, useNavigate } from 'react-router-dom'
import postProduct from '../services/postProduct'

const CreateAccount = () => {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()

    const { nombre, profesion, email, password, telefono, descripcion, imagen, categoria } = event.target

    const formData = new FormData()
    formData.append('nombre', nombre.value)
    formData.append('profesion', profesion.value)
    formData.append('correo', email.value)
    formData.append('password', password.value)
    formData.append('telefono', telefono.value)
    formData.append('descripcion', descripcion.value)
    formData.append('imagen', imagen.files[0])
    formData.append('categoria', categoria.value)

    try {
      await postProduct(formData)
      navigate('/product-list')
    } catch (error) {
      console.log('Error in createAccount component', error)
    }
  }

  return (
    <section className='bg-gray-50 py-12'>
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
                <label htmlFor='file_input' className='block mb-2 text-sm font-medium text-headline'>Subir Imagen</label>
                <input id='file_input' type='file' name='imagen' className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-priary-600 focus:border-primary-600 placeholder-background-button' />
              </div>

              <div>
                <label htmlFor='categorias' className='block mb-2 text-sm font-medium text-headline'>Selecciona la categoria</label>
                <select name='categoria' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'>
                  <option value=''>Categorias</option>
                  <option value='PINTOR'>PINTOR</option>
                  <option value='ALBAÑIL'>ALBAÑIL</option>
                  <option value='FONTANERO'>FONTANERO</option>
                  <option value='CARPINTERO'>CARPINTERO</option>
                  <option value='ELECTRICISTA'>ELECTRICISTA</option>
                  <option value='CERRAJERO'>CERRAJERO</option>
                  <option value='ELECTRONICO'>ELECTRONICO</option>
                  <option value='JARDINERO'>JARDINERO</option>
                  <option value='TECNICO'>TECNICO</option>
                  <option value='MASAJISTA'>MASAJISTA</option>
                  <option value='MANICURISTA'>MANICURISTA</option>
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
              <button
                type='submit' className='w-full bg-background-button text-button-text focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >Crear cuenta
              </button>
              <p className='text-sm font-light text-paragraph'>
                ¿Ya tienes una cuenta? <Link to='/login' className='font-medium text-black hover:underline'>Iniciar sesion</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateAccount
