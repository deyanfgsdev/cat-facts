import { useState, useEffect } from 'react'

const FACT_IMAGE_URL = 'https://cataas.com/cat'

const useFactImage = ({ fact }) => {
  const [factImage, setFactImage] = useState('')

  useEffect(() => {
    const getRandomCatFactImage = async () => {
      try {
        const factFirstWord = fact.split(' ')[0]

        const response = await fetch(`https://cataas.com/cat/says/${factFirstWord}?json=true`)

        if (!response.ok) {
          throw new Error('Failed to fetch image')
        }

        const data = await response.json()
        const { _id } = data

        const newFactImage = `${FACT_IMAGE_URL}/${_id}`
        setFactImage(newFactImage)
      } catch (error) {
        console.error(error.message)
      }
    }

    if (fact) {
      getRandomCatFactImage()
    }
  }, [fact])

  return [factImage]
}

export default useFactImage
