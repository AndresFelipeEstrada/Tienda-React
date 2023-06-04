import { useState, useEffect } from 'react'
import getReview from '../services/getReview'
import postReview from '../services/postReview'

export const useReviewForm = ({ userId }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getAllReviews = async () => {
      const response = await getReview(userId)
      setReviews(response.data)
    }

    getAllReviews()
  }, [])

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
      await postReview(userId, newReview)
      const updatedReviews = await getReview(userId)
      setReviews(updatedReviews.data)
    } catch (error) {
      console.log('Error al crear la reseña:', error.message)
    }
  }

  return [reviews, handleChange, handleSubmitForm]
}
