import React, { useState, useEffect } from 'react';
import { heroBackgroundStyle } from '../constants';

const TypingText: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const lines = [
    'Empowering the',
    'Future of Education'
  ];
  
  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }
    
    const currentLine = lines[currentLineIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentLine.length) {
        setDisplayedText(prev => {
          if (currentLineIndex === 0) {
            return currentLine.slice(0, charIndex + 1);
          } else {
            return lines[0] + '\n' + currentLine.slice(0, charIndex + 1);
          }
        });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
        }, 500);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [currentLineIndex]);
  
  return (
    <>
      <style jsx>{`
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          color: #FFB74D;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight whitespace-pre-line ${!isComplete ? 'typing-cursor' : ''}`}>
        {displayedText}
      </h1>
    </>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(90deg); }
          50% { transform: translate(-5px, -20px) rotate(180deg); }
          75% { transform: translate(-10px, -5px) rotate(270deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .floating-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #FFB74D, #5A2D82);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 183, 77, 0.5);
          animation: float 8s ease-in-out infinite;
        }
        
        .pulsing-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(90, 45, 130, 0.4) 0%, transparent 70%);
          animation: pulse 6s ease-in-out infinite;
        }
        
        .element-1 { top: 20%; left: 80%; animation-delay: 0s; }
        .element-2 { top: 60%; left: 10%; animation-delay: 2s; }
        .element-3 { top: 30%; left: 30%; animation-delay: 4s; }
        .element-4 { top: 80%; left: 70%; animation-delay: 6s; }
        
        .orb-1 { 
          width: 200px; height: 200px; 
          top: 10%; right: 10%; 
          animation-delay: 0s; 
        }
        .orb-2 { 
          width: 150px; height: 150px; 
          bottom: 20%; left: 5%; 
          animation-delay: 3s; 
        }
      `}</style>
      
      {/* Floating particles */}
      <div className="floating-element element-1"></div>
      <div className="floating-element element-2"></div>
      <div className="floating-element element-3"></div>
      <div className="floating-element element-4"></div>
      
      {/* Pulsing orbs */}
      <div className="pulsing-orb orb-1"></div>
      <div className="pulsing-orb orb-2"></div>
    </div>
  );
};

const ShootingStars: React.FC = () => {
  return (
    <>
      <style jsx>{`
        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #FFB74D;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 183, 77, 0.1), 0 0 0 8px rgba(255, 183, 77, 0.1), 0 0 20px rgba(255, 183, 77, 0.1);
          animation: animate 3s linear infinite;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, #FFB74D, transparent);
        }

        .star-1 {
          top: 0;
          right: 0;
          left: initial;
          animation-delay: 0s;
          animation-duration: 1s;
        }

        .star-2 {
          top: 0;
          right: 80px;
          left: initial;
          animation-delay: 0.2s;
          animation-duration: 3s;
        }

        .star-3 {
          top: 80px;
          right: 0px;
          left: initial;
          animation-delay: 0.4s;
          animation-duration: 2s;
        }

        .star-4 {
          top: 0;
          right: 180px;
          left: initial;
          animation-delay: 0.6s;
          animation-duration: 1.5s;
        }

        .star-5 {
          top: 0;
          right: 400px;
          left: initial;
          animation-delay: 0.8s;
          animation-duration: 2.5s;
        }

        .star-6 {
          top: 0;
          right: 600px;
          left: initial;
          animation-delay: 1s;
          animation-duration: 3s;
        }

        .star-7 {
          top: 300px;
          right: 0px;
          left: initial;
          animation-delay: 1.2s;
          animation-duration: 1.75s;
        }

        .star-8 {
          top: 0px;
          right: 700px;
          left: initial;
          animation-delay: 1.4s;
          animation-duration: 1.25s;
        }

        .star-9 {
          top: 0px;
          right: 1000px;
          left: initial;
          animation-delay: 0.75s;
          animation-duration: 2.25s;
        }

        .star-10 {
          top: 0px;
          right: 450px;
          left: initial;
          animation-delay: 2.75s;
          animation-duration: 2.75s;
        }
      `}</style>
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <span className="shooting-star star-1"></span>
        <span className="shooting-star star-2"></span>
        <span className="shooting-star star-3"></span>
        <span className="shooting-star star-4"></span>
        <span className="shooting-star star-5"></span>
        <span className="shooting-star star-6"></span>
        <span className="shooting-star star-7"></span>
        <span className="shooting-star star-8"></span>
        <span className="shooting-star star-9"></span>
        <span className="shooting-star star-10"></span>
      </div>
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={heroBackgroundStyle}
    >
      <AnimatedBackground />
      <ShootingStars />
      <div className="relative z-10 p-6">
        <TypingText />
        <p className="mt-4 text-lg md:text-xl text-[#FFB74D] font-light">
          Transforming K-12 Learning Through Blended Learning
        </p>
        <button 
          onClick={() => {
            const missionElement = document.getElementById('mission');
            if (missionElement) {
              const headerHeight = 80;
              const targetPosition = missionElement.offsetTop - headerHeight;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="mt-8 px-8 py-3 border border-white/50 rounded-full text-white/90 hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
        >
          Know more
        </button>
      </div>
    </section>
  );
};

export default Hero;