import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Project from './pages/Project';
import Papers from './pages/Papers';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-bg-main min-h-screen text-text-main selection:bg-text-main selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/project" element={<Project />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
