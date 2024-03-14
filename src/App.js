import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './About';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return(
 <div>
    <Routes>
      <Route exact path='/' element={<Nav />}>
        <Route index element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Route>      
    </Routes>
  </div>
  )
 
}

export default App;
