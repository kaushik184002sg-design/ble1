import React, { useEffect, useRef, useState } from 'react';
import { whyWorkBackgroundStyle } from '../constants';

const WhyWorkWithUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="careers" className="relative py-24 md:py-32 overflow-hidden" style={whyWorkBackgroundStyle}>
      <style jsx>{`
        /* Custom CSS for the boxes and connecting lines */
        .glassmorphism-card {
          background-color: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .box {
          position: absolute;
          width: 220px;
          height: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          font-size: 1.25rem;
          font-weight: bold;
          border-radius: 1rem;
          opacity: 0;
          padding: 1.5rem;
          box-shadow: 0 0 10px 2px rgba(118, 55, 187, 0.5);
        }

        .box-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #FFB74D;
          margin-bottom: 0.5rem;
        }

        .box-text {
          font-size: 0.8rem;
          font-weight: normal;
          color: white;
          line-height: 1.4;
        }

        /* Define the directional animation for each box */
        @keyframes box1Animate {
          from { opacity: 0; transform: translate(-100px, -100px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes box2Animate {
          from { opacity: 0; transform: translate(100px, 100px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes box3Animate {
          from { opacity: 0; transform: translate(-100px, 100px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes box4Animate {
          from { opacity: 0; transform: translate(100px, -100px); }
          to { opacity: 1; transform: translate(0, 0); }
        }

        /* Define animation for the central circle */
        @keyframes circleAnimate {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Define animation for the lines, growing from the center */
        @keyframes lineAnimate {
          from {
            height: 0;
          }
          to {
            height: 202px;
          }
        }

        /* Apply animations with delays */
        .center-circle { 
          animation: ${isVisible ? 'circleAnimate 1s ease-out forwards' : 'none'}; 
        }
        
        .box-1 { 
          animation: ${isVisible ? 'box1Animate 0.8s ease-out forwards' : 'none'}; 
          animation-delay: 0.8s; 
        }
        .box-2 { 
          animation: ${isVisible ? 'box2Animate 0.8s ease-out forwards' : 'none'}; 
          animation-delay: 1.2s; 
        }
        .box-3 { 
          animation: ${isVisible ? 'box3Animate 0.8s ease-out forwards' : 'none'}; 
          animation-delay: 1s; 
        }
        .box-4 { 
          animation: ${isVisible ? 'box4Animate 0.8s ease-out forwards' : 'none'}; 
          animation-delay: 1.4s; 
        }

        /* Styling for the new connecting lines */
        .line {
          position: absolute;
          background-color: #9ca3af;
          width: 3px;
          height: 0;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
          z-index: -1;
          animation: ${isVisible ? 'lineAnimate 0.8s ease-out forwards' : 'none'};
        }

        /* Position and rotate each line to point to the correct box */
        .line-1 {
          transform: translate(-1.5px, 0) rotate(-45deg);
        }
        .line-2 {
          transform: translate(-1.5px, 0) rotate(135deg);
        }
        .line-3 {
          transform: translate(-1.5px, 0) rotate(-135deg);
        }
        .line-4 {
          transform: translate(-1.5px, 0) rotate(45deg);
        }
        
        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .box {
            position: static;
            width: 150px;
            height: 90px;
            font-size: 1rem;
            padding: 0.5rem;
          }

          .web-chart-container {
            flex-direction: column;
            height: auto;
            justify-content: flex-start;
            gap: 2rem;
          }

          .center-circle { order: 3; }
          .box-1 { order: 1; }
          .box-4 { order: 2; }
          .box-3 { order: 4; }
          .box-2 { order: 5; }

          .line {
            display: none;
          }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why <span className="text-[#FFB74D]">Work</span> With Us?
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-[#A0A0A0] leading-relaxed mb-16">
          We are more than just an educational institution, we are a movement dedicated to transforming how 
          students learn. By joining us, you become a key player in <span className="text-[#FFB74D]">revolutionizing K-12 education</span> and bridging 
          the gap between traditional and digital learning.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="web-chart-container relative w-[800px] h-[600px] flex items-center justify-center">

          {/* Central Circle */}
          <div className="center-circle absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-white text-xl font-bold z-10 transition-transform duration-300 ease-in-out hover:scale-105 opacity-0 glassmorphism-card" style={{boxShadow: '0 0 10px 2px rgba(118, 55, 187, 0.5)'}}>
            <span className="text-3xl" style={{color: '#FFB74D'}}>Ble</span>
          </div>

          {/* Lines originating from the center */}
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>

          {/* Four Boxes with new positions and content */}
          <div className="box box-1 top-0 left-0 mt-8 ml-8 glassmorphism-card">
            <div className="box-title">Innovative Work Environment</div>
            <div className="box-text">Work with cutting-edge educational technology and methodologies.</div>
          </div>
          <div className="box box-4 top-0 right-0 mt-8 mr-8 glassmorphism-card">
            <div className="box-title">Professional Growth</div>
            <div className="box-text">Access to ongoing training, workshops, and industry-leading certifications.</div>
          </div>
          <div className="box box-3 bottom-0 left-0 mb-8 ml-8 glassmorphism-card">
            <div className="box-title">Meaningful Impact</div>
            <div className="box-text">Shape the future of education and make a real difference in students' lives.</div>
          </div>
          <div className="box box-2 bottom-0 right-0 mb-8 mr-8 glassmorphism-card">
            <div className="box-title">Competitive Compensation</div>
            <div className="box-text">We value our educators and professionals, offering competitive salaries and benefits.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;