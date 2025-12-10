import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Chatbot from "./Components/AIChat/Chatbot";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        {/* Background Gradient Circle */}
        <div className="w-full min-h-screen flex justify-center bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.0)_0%,rgba(0,0,0,0.4)_100%)]">          <div className="w-[1100px] px-5 pt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Chatbot />
       {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
