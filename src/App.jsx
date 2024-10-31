import { useState, useEffect } from 'react'

const FACT_API_URL = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(FACT_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  return (
    <div className='cat-facts-app'>
      <h1>Cat Facts</h1>
      <p className='fact'>{fact}</p>
    </div>
  )
}

export default App
