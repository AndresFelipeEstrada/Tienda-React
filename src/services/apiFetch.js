const API = 'https://api.escuelajs.co/api/v1/products'

const getData = async () => {
  try {
    const response = await fetch(API)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default getData
