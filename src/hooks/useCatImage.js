import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says'

const useCatImage = ({ fact }) => {
  const [catImageURL, setCatImageURL] = useState('')

  useEffect(() => {
    const getCatRandomImage = async () => {
      try {
        const factFirstWord = fact.split(' ')[0]

        const response = await fetch(`${CAT_PREFIX_IMAGE_URL}/${factFirstWord}`)

        if (!response.ok) {
          throw new Error('Failed to fetch image')
        }

        const { url } = response

        setCatImageURL(url)
      } catch (error) {
        console.error(error.message)
      }
    }

    if (fact) {
      getCatRandomImage()
    }
  }, [fact])

  return [catImageURL]
}

export default useCatImage
