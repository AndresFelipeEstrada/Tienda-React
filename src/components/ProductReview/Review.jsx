import { memo } from 'react'
import reviewIcon from '@icons/man.png'
import { useReviewForm } from '../../hooks/useReviewForm'
import StarRating from '../StarRating/StarRating'

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
                  <strong className=' text-headline'>{review.titulo}</strong>
                  <StarRating />
                  <p className=' text-paragraph'>
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

                <StarRating />
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
