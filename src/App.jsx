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
      })
  }, [])

  useEffect(() => {
    const getRandomCatFactImage = async () => {
      const factFirstWord = fact.split(' ')[0]

      const response = await fetch(`https://cataas.com/cat/says/${factFirstWord}?json=true`)
      const data = await response.json()
      const { _id } = data

      const newFactImage = `${FACT_IMAGE_URL}/${_id}`
      setFactImage(newFactImage)
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
