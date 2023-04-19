import { memo, useId } from 'react'

const Filters = ({ onChange, filters }) => {
  const priceId = useId()

  return (
    <div>
      {/* <label htmlFor={priceId}>Precio a partir de :</label>
      <input type='range' id={priceId} onChange={onChange} value={filters.minPrice} min='0' max='2000' /> */}

      <label htmlFor={priceId} className='mb-2 inline-block text-neutral-700 dark:text-neutral-00'>Precio a partir de :</label>
      <input id={priceId} type='range' value={filters.minPrice} onChange={onChange} min='0' max='2000' className='transparent h-1.5 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200' />
      <span> ${filters.minPrice}</span>
    </div>

  )
}

export default memo(Filters)
