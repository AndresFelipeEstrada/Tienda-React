const getProduct = async ({ id }) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error en la peticion fetch')
  }
}

export default getProduct
