import { memo, useCallback, useId, useState } from 'react'

const Filters = ({ setFilters, filters, priceRange }) => {
  const minPriceId = useId()
  const maxPriceId = useId()
  const categoryId = useId()

  const [selectedOption, setSelectedOption] = useState(null)

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
      <div class='flex gap-8 m-10'>
        <div class='relative'>
          <details class='group [&_summary::-webkit-details-marker]:hidden'>
            <summary
              class='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'
            >
              <span class='text-sm font-medium'> Categorias </span>

              <span class='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div
              class='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'
            >
              <div class='w-96 rounded border border-gray-200 bg-white'>
                <header class='flex items-center justify-between p-4'>
                  <span class='text-sm text-gray-700'> Elige una categoria </span>

                  <button
                    type='button'
                    class='text-sm text-gray-900 underline underline-offset-4'
                  >
                    Reiniciar
                  </button>
                </header>

                <ul class='space-y-1 border-t border-gray-200 p-4'>
                  <li>
                    <label for={categoryId} class='inline-flex items-center gap-2'>
                      <input
                        type='checkbox'
                        id='FilterInStock'
                        value='todas'
                        checked={selectedOption === 'todas'}
                        onChange={handleChangeCategory}
                        class='h-5 w-5 rounded border-gray-300'
                      />

                      <span class='text-sm font-medium text-gray-700'>
                        Todas
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterPreOrder'
                      class='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterPreOrder'
                        value='Ingeniero'
                        checked={selectedOption === 'Ingeniero'}
                        onChange={handleChangeCategory}
                        class='h-5 w-5 rounded border-gray-300'
                      />

                      <span class='text-sm font-medium text-gray-700'>
                        Tecnicos
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      for='FilterOutOfStock'
                      class='inline-flex items-center gap-2'
                    >
                      <input
                        type='checkbox'
                        id='FilterOutOfStock'
                        value='Limpieza'
                        checked={selectedOption === 'Limpieza'}
                        onChange={handleChangeCategory}
                        class='h-5 w-5 rounded border-gray-300'
                      />

                      <span class='text-sm font-medium text-gray-700'>
                        Limpieza
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class='relative'>
          <details class='group [&_summary::-webkit-details-marker]:hidden'>
            <summary
              class='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'
            >
              <span class='text-sm font-medium'> Precio </span>

              <span class='transition group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='h-4 w-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div
              class='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'
            >
              <div class='w-96 rounded border border-gray-200 bg-white'>
                <header class='flex items-center justify-between p-4'>
                  <span class='text-sm text-gray-700'>
                    Escoge un rango de precio
                  </span>

                  <button
                    type='button'
                    class='text-sm text-gray-900 underline underline-offset-4'
                  >
                    Reinicar
                  </button>
                </header>

                <div class='border-t border-gray-200 p-4'>
                  <div class='flex justify-between gap-4'>
                    <label for={minPriceId} class='flex items-center gap-2'>
                      <span class='text-sm text-gray-600'>$</span>

                      <input
                        type='number'
                        id={minPriceId}
                        placeholder='Desde'
                        value={filters.minPrice}
                        onChange={handleChangeMinPrice}
                        class='w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black'
                      />
                    </label>

                    <label for={maxPriceId} class='flex items-center gap-2'>
                      <span class='text-sm text-gray-600'>$</span>

                      <input
                        type='number'
                        id={maxPriceId}
                        placeholder='Hasta'
                        value={filters.maxPrice}
                        onChange={handleChangeMaxPrice}
                        class='w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-black'
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
