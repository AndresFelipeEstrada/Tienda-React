import { memo, useCallback, useId, useState } from 'react'

const Filters = ({ setFilters, filters, priceRange }) => {
  const minPriceId = useId()
  const maxPriceId = useId()
  const categoryId = useId()

  const [selectedOption, setSelectedOption] = useState('')

  const handleChangeMinPrice = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }, [filters])

  const handleChangeMaxPrice = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }, [filters])

  const handleChangeCategory = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
    setSelectedOption(event.target.value)
  }, [filters])

  return (
    <>
      <div className='flex gap-8 m-10'>
        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary
              className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'
            >
              <span className='text-sm font-medium'> Categorias </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div
              className='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'
            >
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'> Elige una categoria </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    Reiniciar
                  </button>
                </header>

                <ul className='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label htmlFor={categoryId} className='inline-flex items-center gap-2'>
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        value='todas'
                        checked={selectedOption === 'todas'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Todas
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor='FilterPreOrder'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        value='Ingeniero'
                        checked={selectedOption === 'Ingeniero'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Tecnicos
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        value='Limpieza'
                        checked={selectedOption === 'Limpieza'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Limpieza
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor='FilterOutOfStock'
                      className='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        value='Asesoria'
                        checked={selectedOption === 'Asesoria'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Asesoria
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div className='relative'>
          <details className='group [&_summary::-webkit-details-marker]:hidden'>
            <summary
              className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'
            >
              <span className='text-sm font-medium'> Precio </span>

              <span className='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div
              className='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'
            >
              <div className='w-96 rounded border border-gray-200 bg-white'>
                <header className='flex items-center justify-between p-4'>
                  <span className='text-sm text-gray-700'>
                    Escoge un rango de precio
                  </span>

                  <button
                    type='button'
                    className='text-sm text-gray-900 underline underline-offset-4'
                  >
                    Reinicar
                  </button>
                </header>

                <div className='border-t border-gray-200 p-4'>
                  <div className='flex justify-between gap-4'>
                    <label htmlFor={minPriceId} className='flex items-center gap-2'>
                      <span className='text-sm text-gray-600'>$</span>

                      <input
                        type='number'
                        id={minPriceId}
                        placeholder='Desde'
                        value={filters.minPrice}
                        onChange={handleChangeMinPrice}
                        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black'
                      />
                    </label>

                    <label htmlFor={maxPriceId} className='flex items-center gap-2'>
                      <span className='text-sm text-gray-600'>$</span>

                      <input
                        type='number'
                        id={maxPriceId}
                        placeholder='Hasta'
                        value={filters.maxPrice}
                        onChange={handleChangeMaxPrice}
                        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black'
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </>

  )
}

export default memo(Filters)
