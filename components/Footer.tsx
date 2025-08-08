import React from 'react';
import { footerBackgroundStyle } from '../constants';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#mission', label: 'Our Mission' },
  { href: '#vision', label: 'Our Vision' },
  { href: '#values', label: 'Core Values' },
  { href: '#careers', label: 'Careers' },
];

const Footer: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-end text-center overflow-hidden bg-[#140A1E]">
        <div className="absolute top-0 left-0 w-full h-full" style={{ perspective: '300px' }}>
            <div 
                className="absolute bottom-0 left-0 w-full h-[200%]"
                style={{
                    ...footerBackgroundStyle,
                    transformOrigin: 'bottom center',
                    transform: 'rotateX(80deg)'
                }}
            ></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#140A1E] via-[#140A1E]/80 to-transparent"></div>
      
      <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full">
        <div className='flex-grow flex items-center justify-center flex-col'>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Empowering the
            <br />
            Future of Education
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#FFB74D] font-light">
            Transforming K-12 Learning Through Blended Learning
            </p>
        </div>

        <div className="py-8">
            <h2 className="text-4xl font-bold mb-4">
                 Bl<span className="text-[#FFB74D]">e</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center space-x-4">
              {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;