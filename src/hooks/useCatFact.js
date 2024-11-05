import { useState, useEffect } from 'react'

import { fetchFact } from '../services/facts'

const useCatFact = () => {
  const [fact, setFact] = useState(null)

  const refreshFact = () => {
    fetchFact().then((newFact) => {
      setFact(newFact)
    })
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export default useCatFact
