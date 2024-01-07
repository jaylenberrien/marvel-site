
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Home';
import Nav from './Components/Nav';
import About from './Pages/About';
import Footer from './Components/Footer';
import Characters from './Pages/Characters';
import CharacterSearch from './Pages/CharacterSearch';
import ComicSearch from './Pages/ComicSearch';
import SeriesSearch from './Pages/seriesSearch';

function App() {
  

  return (
    <div>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/characters' element={<Characters />} />
        <Route path='/character-search' element={<CharacterSearch />}/>
        <Route path='/comic-search' element={<ComicSearch />}/>
        <Route path='/series-search' element={<SeriesSearch />}/>
      </Routes>
      <Footer />
    </div>
    
    
  )
}

export default App
