
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Envision from './components/Envision';
import CoreValues from './components/CoreValues';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#140A1E] text-[#E0E0E0] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Envision />
        <CoreValues />
        <WhyWorkWithUs />
        <Footer />
      </main>
    </div>
  );
};

export default App;
