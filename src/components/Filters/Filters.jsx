import { memo, useId } from 'react'

const Filters = ({ onChange, filters }) => {
  const priceId = useId()

  return (
    <div>
      <label htmlFor={priceId}>Precio a partir de :</label>
      <input type='range' id={priceId} onChange={onChange} value={filters.minPrice} min='0' max='2000' />
      <span>{filters.minPrice}</span>
    </div>
  )
}

export default memo(Filters)
