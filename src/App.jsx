import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {
  return (
    <div className='cat-facts-app'>
      <Header mainTitle='Cat Facts' />
      <Main />
      <Footer />
    </div>
  )
}

export default App
