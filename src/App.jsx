import { useState, useEffect } from 'react'

const FACT_API_URL = 'https://catfact.ninja/fact'
const FACT_IMAGE_URL = 'https://cataas.com/cat'

const App = () => {
  const [fact, setFact] = useState('')
  const [factImage, setFactImage] = useState('')

  useEffect(() => {
    fetch(FACT_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      }).catch((error) => {
        console.error(error.message)
      })
  }, [])

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

  return (
    <div className='cat-facts-app'>
      <h1>Cat Facts</h1>
      {fact && <p className='fact'>{fact}</p>}
      {factImage && <img src={factImage} alt='Random image from fact first word' className='fact-image' />}
    </div>
  )
}

export default App
