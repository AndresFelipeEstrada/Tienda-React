const Review = () => {
  return (
    <>
      <section className='grid text-black justify-items-center grid-cols-2 grid-rows-1 gap-0 h-full '>

        <div className='w-full pl-12'>
          <p className='text-headline text-xl p-5'>Customer Reviews</p>
          <hr className=' justify-center border-b border-black opacity-30' />

          {/* review information */}
          <div className='flex'>

            <div className=' flex-auto'>
              <div className='flex justify-center items-center'>
                <img className=' p-1 rounded-full justify-center' src='https://randomuser.me/api/portraits/women/81.jpg' alt='photo' />
              </div>
              <span className='text-headline flex justify-center'>Tessa Jacob</span>
            </div>
            <div className='flex-auto p-2 w-80'>
              <strong className=' text-headline'>Amazing color</strong>
              <p className=' my-8 text-paragraph'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quaerat dignissimos ad quas odit ab cupiditate, hic sunt, inventore voluptatibus ullam. Dicta magni ipsum rem repellendus, animi fuga totam amet!
              </p>

              <span className=' text-headline'>Was this helpful?</span>
            </div>

          </div>

        </div>

        <div className='text-headline text-xl p-5'>
          Write a Review
        </div>
      </section>
    </>
  )
}

export default Review
