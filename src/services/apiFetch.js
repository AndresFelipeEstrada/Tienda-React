// const API = 'https://api.escuelajs.co/api/v1/products'
const DJANGO = 'http://127.0.0.1:8000/productos/v1/product?format=json'

const getData = async () => {
  try {
    const response = await fetch(DJANGO)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default getData
