
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Home';
import Nav from './Components/Nav';
import About from './Pages/About';
import Footer from './Components/Footer';
import RanCharacterPage from './Pages/RanCharacterPage';
import CharacterSearch from './Pages/CharacterSearch';
import ComicSearch from './Pages/ComicSearch';
import SeriesSearch from './Pages/seriesSearch';
import CharacterDetails from './Pages/CharacterDetails';

function App() {
  

  return (
    <div>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/characters' element={<RanCharacterPage />} />
        <Route path='/character-search' element={<CharacterSearch />}/>
        <Route path='/comic-search' element={<ComicSearch />}/>
        <Route path='/series-search' element={<SeriesSearch />}/>
        <Route path='/character/:id' element={<CharacterDetails />} />
      </Routes>
      <Footer />
    </div>
    
    
  )
}

export default App
