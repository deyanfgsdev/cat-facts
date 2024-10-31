import { useState, useEffect } from 'react'

const FACT_API_URL = 'https://catfact.ninja/fact'

const useFact = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(FACT_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch fact')
        }

        return response.json()
      })
      .then((data) => {
        const { fact } = data
        setFact(fact)
      }).catch((error) => {
        console.error(error.message)
      })
  }, [])

  return [fact]
}

export default useFact
