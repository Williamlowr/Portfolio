import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <div className="w-full h-screen flex justify-center bg-[radial-gradient(50%_100%_at_50%_20%,rgba(255,255,255,0.0)_0%,rgba(0,0,0,0.2)_150%)]">
          <div className='w-[1100px] px-5 pt-5'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
