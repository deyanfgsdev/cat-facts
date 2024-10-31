import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat'

const useCatImage = ({ fact }) => {
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    const getCatRandomImage = async () => {
      try {
        const factFirstWord = fact.split(' ')[0]

        const response = await fetch(`https://cataas.com/cat/says/${factFirstWord}?json=true`)

        if (!response.ok) {
          throw new Error('Failed to fetch image')
        }

        const data = await response.json()
        const { _id } = data

        const newCatImage = `${CAT_PREFIX_IMAGE_URL}/${_id}`
        setCatImage(newCatImage)
      } catch (error) {
        console.error(error.message)
      }
    }

    if (fact) {
      getCatRandomImage()
    }
  }, [fact])

  return [catImage]
}

export default useCatImage
