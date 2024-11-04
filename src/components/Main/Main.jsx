import useCatFact from '../../hooks/useCatFact'
import useCatImage from '../../hooks/useCatImage'

import './Main.scss'

const Main = () => {
  const { fact, refreshFact } = useCatFact()
  const { catImageURL } = useCatImage({ fact })

  const handleNewFactClick = () => {
    refreshFact()
  }

  return (
    <main className='main'>
      {fact && <p className='main__cat-fact'>{fact}</p>}
      {catImageURL && <img src={catImageURL} alt={`Random image from first word for fact ${fact}`} className='main__cat-image' />}
      <button className='get-fact-button' onClick={handleNewFactClick}>Get new fact</button>
    </main>
  )
}

export default Main
