import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import CustomPlanner from './components/CustomPlanner';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <Offers />
      <CustomPlanner />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;