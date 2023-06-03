import { memo } from 'react'
import reviewIcon from '@icons/man.png'
import { useReviewForm } from '../../hooks/useReviewForm'

const Review = memo(function Review ({ userId }) {
  const [reviews, handleChange, handleSubmitForm] = useReviewForm({ userId })

  return (
    <>
      <div className='flex justify-between'>
        <p className='text-headline text-xl p-3 ml-12'>Reviews de usuarios</p>
        <p className='text-headline text-xl p-3 mr-96'>Escribe una review</p>
      </div>

      <section className='grid text-black justify-items-center grid-cols-2 grid-rows-1 gap-0 h-full '>
        <div className='w-full pl-12'>
          <hr className=' justify-center border-b border-black opacity-10' />
          {
        reviews.map((review) => {
          return (
            <div key={review.id}>
              <div className='flex'>
                <div className=' break-normal flex-auto flex flex-col items-center justify-center'>
                  <div className=' flex flex-col'>
                    <img className='rounded-full h-14 w-14' src={reviewIcon} alt='photo' />
                    <span className='text-headline mt-2'>{review.nombre}</span>
                  </div>
                </div>

                <div className='flex-auto w-80 my-5'>
                  <strong className=' text-headline m-2'>{review.titulo}</strong>
                  <div className='flex items-center m-2'>
                    <svg aria-hidden='true' className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>First star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                    <svg aria-hidden='true' className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Second star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                    <svg aria-hidden='true' className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Third star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                    <svg aria-hidden='true' className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fourth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                    <svg aria-hidden='true' className='w-5 h-5 text-gray-300 dark:text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Fifth star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
                  </div>
                  <p className=' text-paragraph m-2'>
                    {review.mensaje}
                  </p>

                  {/* <span className='text-headline'>Was this helpful?</span> */}
                </div>

              </div>
              <hr className=' justify-center border-b border-black opacity-10' />

            </div>
          )
        })
      }
        </div>

        <div className=''>
          <hr className=' justify-center border-b border-black opacity-10' />
          <div className='flex flex-col-1 gap-60 pt-3'>
            <strong className='text-headline p-1 m-1 text-lg'>Calificame</strong>
            <div>
              <div className='flex flex-col items-center gap-2'>
                <span className='flex items-center gap-4 text-sm rounded text-slate-500'>
                  <span className='flex gap-1 text-amber-400' role='img' aria-label='Rating: 4 out of 5 stars'>
                    <span aria-hidden='true'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                        <path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' />
                      </svg>
                    </span>
                    <span aria-hidden='true'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                        <path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' />
                      </svg>
                    </span>
                    <span aria-hidden='true'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                        <path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' />
                      </svg>
                    </span>
                    <span aria-hidden='true'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                        <path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' />
                      </svg>
                    </span>
                    <span aria-hidden='true'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
                      </svg>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className=''>
            <form onSubmit={handleSubmitForm}>
              <div className='flex flex-col'>
                <input onChange={handleChange} name='titulo' className='border p-1 m-1 text-paragraph border-paragraph  w-full h-12 mt-3 ' type='text' placeholder='Titulo' required />
                <input onChange={handleChange} name='nombre' className='border p-1 m-1 text-paragraph border-paragraph  w-full h-12 mt-3 ' type='text' placeholder='Nombre' required />
                <textarea onChange={handleChange} name='mensaje' className='border p-1 m-1 text-paragraph border-paragraph  w-full h-32 mt-3 resize-none' placeholder='Tu review' cols='30' rows='10' required />
                <button
                  className=' p-1 m-1 bg-background-button text-white w-full cursor-pointer text-base font-bold h-12 mt-3 mb-8'
                >Post Review
                </button>
              </div>
            </form>

          </div>
        </div>

      </section>
    </>
  )
})
export default Review
