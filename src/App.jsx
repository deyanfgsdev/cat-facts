import Header from './components/Header'

import useCatFact from './hooks/useCatFact'
import useCatImage from './hooks/useCatImage'

import './App.scss'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { catImageURL } = useCatImage({ fact })

  const handleNewFactClick = () => {
    refreshFact()
  }

  return (
    <div className='cat-facts-app'>
      <Header mainTitle='Cat Facts' />
      {fact && <p className='cat-fact'>{fact}</p>}
      {catImageURL && <img src={catImageURL} alt={`Random image from first word for fact ${fact}`} className='cat-image' />}
      <button className='fact-button' onClick={handleNewFactClick}>Get new fact</button>
    </div>
  )
}

export default App
