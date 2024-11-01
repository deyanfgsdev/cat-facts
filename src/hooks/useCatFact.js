import { useState, useEffect } from 'react'

const FACT_API_URL = 'https://catfact.ninja/fact'

const useCatFact = () => {
  const [fact, setFact] = useState('')

  const fetchFact = () => {
    return fetch(FACT_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch fact')
        }

        return response.json()
      })
      .then((data) => {
        const { fact } = data

        return fact
      }).catch((error) => {
        console.error(error.message)
      })
  }

  const refreshFact = () => {
    fetchFact().then((newFact) => {
      setFact(newFact)
    })
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export default useCatFact
