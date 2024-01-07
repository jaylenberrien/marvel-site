
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Home';
import Nav from './Components/Nav';
import About from './Pages/About';
import Footer from './Components/Footer';


function App() {
  

  return (
    <div>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
    
    
  )
}

export default App
