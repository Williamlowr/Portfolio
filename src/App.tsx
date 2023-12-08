import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom'
import Home from './Components/Landing Page/Home'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Router>
      <div className='w-full h-[120rem]'>
        <Navbar/>
        <h2><Header/></h2>
        <nav>
          <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home firstName={'William'} lastName={'Lowrimore'}/>} />
      {/*     <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<qAbout/>} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
