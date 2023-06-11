/* eslint-disable indent */
import axios from 'axios'
import BASE_URL from './baseURL'

const postProduct = async (datos) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, datos, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set the correct content type for file uploads
            }
        })
        return response.data
    } catch (error) {
        console.log('error in postReview', error.message)
    }
}

export default postProduct
