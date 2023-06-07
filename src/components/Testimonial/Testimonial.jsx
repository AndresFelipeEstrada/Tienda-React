import StarRating from '../StarRating/StarRating'

const Testimonial = () => {
  return (
    <section className='bg-white'>
      <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center text-headline'>
        Testimonios
      </h1>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <h2 className='text-center text-4xl font-bold text-paragraph tracking-tight sm:text-5xl'>
          Lee reseñas confiables de nuestros clientes
        </h2>

        <div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
          <blockquote className='rounded-lg bg-gray-100 p-8'>
            <div className='flex items-center gap-4'>
              <img
                alt='Man'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTldOKyM47R2XKniWFBjYk_9iuxbSY2J8OAA&usqp=CAU'
                className='h-16 w-16 rounded-full object-cover'
              />

              <div>
                <StarRating />
                <p className='mt-1 text-lg font-medium text-headline'>Ana López </p>
                <strong className='text-paragraph'>Diseñadora gráfica</strong>
              </div>
            </div>

            <p className='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
              Estoy realmente impresionada con los resultados que obtuve al utilizar esta plataforma de contratación de profesionales. Gracias a esta plataforma, pude conectar de manera rápida y sencilla con clientes potenciales que buscaban servicios de diseño gráfico. El proceso de registro fue muy fácil y en poco tiempo ya estaba recibiendo propuestas y mensajes de personas interesadas en mi trabajo.
            </p>
          </blockquote>

          <blockquote className='rounded-lg bg-gray-100 p-8'>
            <div className='flex items-center gap-4'>
              <img
                alt='Man'
                src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                className='h-16 w-16 rounded-full object-cover'
              />

              <div>
                <StarRating />

                <p className='mt-1 text-lg font-medium text-gray-700'>Javier Rodríguez</p>
                <strong className='text-paragraph'>Desarrollador web</strong>
              </div>
            </div>

            <p className='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
              Quiero compartir mi experiencia con esta plataforma de contratación de profesionales porque ha sido un verdadero impulso para mi carrera como desarrollador web. Antes de descubrirla, me encontraba luchando por conseguir proyectos constantemente. Era difícil encontrar oportunidades relevantes y conseguir clientes de calidad.La plataforma cuenta con una sección de valoraciones y testimonios de clientes anteriores, lo cual brinda una mayor confianza a los potenciales empleadores. Gracias a ello, he logrado obtener una reputación sólida y atraer a más clientes.
            </p>
          </blockquote>

          <blockquote className='rounded-lg bg-gray-100 p-8'>
            <div className='flex items-center gap-4'>
              <img
                alt='Man'
                src='https://aprendacctv.com/wp-content/uploads/2019/11/Security-camera-installer-02.jpg'
                className='h-16 w-16 rounded-full object-cover'
              />

              <div>
                <StarRating />

                <p className='mt-1 text-lg font-medium text-gray-700'>Jairo Andres Bermudez</p>
                <strong className='text-paragraph'>Ingeniero en sistemas</strong>
              </div>
            </div>

            <p className='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
              No puedo expresar lo suficiente lo agradecido que estoy por haber descubierto esta plataforma de contratación de profesionales. Como ingeniero especializado en instalación de cámaras de seguridad, siempre estaba buscando oportunidades para expandir mi negocio y encontrar clientes que necesitaran mis servicios.
            </p>
          </blockquote>
        </div>
      </div>
    </section>

  )
}

export default Testimonial
