import { memo, useCallback, useId, useState } from 'react'

const Filters = ({ setFilters, filters }) => {
  const categoryId = useId()

  const [selectedOption, setSelectedOption] = useState('')

  const handleChangeCategory = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
    setSelectedOption(event.target.value)
  }, [filters])

  const clearFilters = () => {
    setFilters({
      category: 'todas',
      minPrice: 0,
      maxPrice: 1000000
    })
  }

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
                    onClick={clearFilters}
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
                        value='PINTOR'
                        checked={selectedOption === 'PINTOR'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Pintor
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
                        value='ALBAÑIL'
                        checked={selectedOption === 'ALBAÑIL'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Albañil
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
                        value='FONTANERO'
                        checked={selectedOption === 'FONTANERO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Fontanero
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
                        value='CARPINTERO'
                        checked={selectedOption === 'CARPINTERO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Carpintero
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
                        value='ELECTRICISTA'
                        checked={selectedOption === 'ELECTRICISTA'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Electricista
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
                        value='CERRAJERO'
                        checked={selectedOption === 'CERRAJERO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Cerrajero
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
                        value='ELECTRONICO'
                        checked={selectedOption === 'ELECTRONICO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Electronico
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
                        value='JARDINERO'
                        checked={selectedOption === 'JARDINERO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Jardinero
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
                        value='TECNICO'
                        checked={selectedOption === 'TECNICO'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Tecnico
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
                        value='MASAJISTA'
                        checked={selectedOption === 'MASAJISTA'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Masajista
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
                        value='MANICURISTA'
                        checked={selectedOption === 'MANICURISTA'}
                        onChange={handleChangeCategory}
                        className='h-5 w-5 rounded border-gray-300'
                      />

                      <span className='text-sm font-medium text-gray-700'>
                        Manicurista
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

      </div>
    </>

  )
}

export default memo(Filters)
