import useFact from './hooks/useFact'
import useCatImage from './hooks/useCatImage'

const App = () => {
  const [fact] = useFact()
  const [catImage] = useCatImage({ fact })

  const handleFactButtonClick = () => {

  }

  return (
    <div className='cat-facts-app'>
      <h1>Cat Facts</h1>
      {fact && <p className='fact'>{fact}</p>}
      {catImage && <img src={catImage} alt={`Random image from fact first word ${fact}`} className='cat-image' />}
      <button className='fact-button' onClick={handleFactButtonClick}>Get new fact</button>
    </div>
  )
}

export default App
