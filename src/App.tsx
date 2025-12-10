import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Chatbot from "./Components/AIChat/Chatbot";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router basename="/">
        {/* Background Gradient Circle */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0)_0%,rgba(0,0,0,0.2)_100%)]" />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <div className="w-full flex flex-grow justify-center">
            <div className="w-[54vw] px-5 pt-5 pb-6">
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
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
