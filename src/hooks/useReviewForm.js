import { useState } from 'react'
import postReview from '../services/postReview'
import getReview from '../services/getReview'

export const useReviewForm = ({ id, reviewsInfo }) => {
  const [reviews, setReviews] = useState(reviewsInfo)

  const [newReview, setNewReview] = useState({
    titulo: '',
    nombre: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewReview(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await postReview(id, newReview)
      const updatedReviews = await getReview(id)
      setReviews(updatedReviews.data)
    } catch (error) {
      console.log('Error al crear la reseña:', error.message)
    }
  }

  return { reviews, handleChange, handleSubmitForm }
}
