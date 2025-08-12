import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LinksMedia from './small-components/LinksMedia'

function App() {

  return (
    <div className='App'>
      <ToastContainer />
      <Router>
        <Navbar />
        <LinksMedia />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
