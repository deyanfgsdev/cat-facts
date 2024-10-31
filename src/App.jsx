import useCatFact from './hooks/useCatFact'
import useCatImage from './hooks/useCatImage'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { catImageURL } = useCatImage({ fact })

  const handleNewFactClick = () => {
    refreshFact()
  }

  return (
    <div className='cat-facts-app'>
      <h1>Cat Facts</h1>
      {fact && <p className='cat-fact'>{fact}</p>}
      {catImageURL && <img src={catImageURL} alt={`Random image from first word for fact ${fact}`} className='cat-image' />}
      <button className='fact-button' onClick={handleNewFactClick}>Get new fact</button>
    </div>
  )
}

export default App
