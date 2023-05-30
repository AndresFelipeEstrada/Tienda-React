import reviewIcon from '@icons/man.png'

const Review = ({ reviews }) => {
  const reviewList = reviews || []
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
        reviewList.map((review) => {
          return (
            <div key={review.id}>
              <div className='flex'>
                <div className='flex-auto flex flex-col items-center justify-center'>
                  <div className=' flex flex-col'>
                    <img className='rounded-full h-14 w-14' src={reviewIcon} alt='photo' />
                    <span className='text-headline mt-2'>{review.nombre}</span>
                  </div>
                </div>

                <div className='flex-auto w-80 my-5'>
                  <strong className=' text-headline m-2'>Amazing color</strong>
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

        <div>

          <div className='flex flex-col-1 gap-60'>
            <div>Rate us</div>
            <div>estrellas</div>
          </div>

          <div className=''>
            <form action=''>
              <div className='flex flex-col gap-5'>
                <input className='border-2 peer block min-h-full border-very-light-pink' type='text' placeholder='Name' />
                <input className='' type='text' placeholder='Titulo' />
                <input className='' type='text' placeholder='Review' />

                <button className='bg-background-button text-button-text'>Post Review</button>
              </div>
            </form>

          </div>
        </div>

      </section>
    </>
  )
}

export default Review
