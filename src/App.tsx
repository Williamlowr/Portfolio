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
import Navbar from './Components/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <>
      <Router>
      <div className='w-full h-[120rem]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home firstName={'William'} lastName={'Lowrimore'}/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
