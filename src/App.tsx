import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));
const Chatbot = lazy(() => import("./Components/AIChat/Chatbot.tsx"));
import Footer from "./Components/Footer";
import AnalyticsComponent from "./Components/AnalyticsComponent";

function App() {
  const [loadAnalytics, setLoadAnalytics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadAnalytics(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router basename="/">
        {/* Background Gradient Circle */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0)_0%,rgba(0,0,0,0.2)_100%)]" />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <div className="w-full flex flex-grow justify-center">
            <div className="w-[58vw] px-5 pt-5 pb-6">
              <Suspense fallback={<div />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </div>
          </div>
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
          {loadAnalytics && <AnalyticsComponent />}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
