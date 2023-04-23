import { memo, useCallback, useId } from 'react'

const Filters = ({ setFilters, filters }) => {
  const priceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }, [filters])

  const handleChangeCategory = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }, [filters])

  return (
    <>
      <div>
        <label htmlFor={priceId} className='mb-2 inline-block text-neutral-700 dark:text-neutral-00'>Precio a partir de :</label>
        <input id={priceId} type='range' value={filters.minPrice} onChange={handleChangeMinPrice} min='0' max='2000' className='transparent h-1.5 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200' />
        <span> ${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria:</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='Clothes'>Clothes</option>
          <option value='Electronics'>Electronics</option>
          <option value='Furniture'>Furniture</option>
          <option value='Shoes'>Shoes</option>
          <option value='Others'>Others</option>
        </select>
      </div>
    </>

  )
}

export default memo(Filters)
