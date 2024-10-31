import useFact from './hooks/useFact'
import useFactImage from './hooks/useFactImage'

const App = () => {
  const [fact] = useFact()
  const [factImage] = useFactImage({ fact })

  return (
    <div className='cat-facts-app'>
      <h1>Cat Facts</h1>
      {fact && <p className='fact'>{fact}</p>}
      {factImage && <img src={factImage} alt='Random image from fact first word' className='fact-image' />}
    </div>
  )
}

export default App
