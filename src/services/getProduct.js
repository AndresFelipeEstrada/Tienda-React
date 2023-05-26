// const getUser = 'http://127.0.0.1:8000/productos/v1/product?format=json'
const getProduct = async ({ id }) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/productos/v1/product/${id}?format=json`)
    const data = await response.json()
    console.log('Uno: ' + data)
    return data
  } catch (error) {
    throw new Error('Error en la peticion fetch')
  }
}

export default getProduct
