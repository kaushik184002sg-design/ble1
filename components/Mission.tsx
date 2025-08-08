import React from 'react';
import { missionBackgroundStyle } from '../constants';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative py-24 md:py-32 overflow-hidden" style={missionBackgroundStyle}>
      <style jsx>{`
        /* Atomic structure animations */
        @keyframes rotate-orbit-fast { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes rotate-orbit-medium { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes rotate-orbit-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }

        /* Atom Container */
        .atom-container {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 90vw;
          max-height: 90vh;
        }

        /* Nucleus */
        .nucleus {
          width: 100px;
          height: 100px;
          background-color: #5A2D82;
          border-radius: 50%;
          position: absolute;
          z-index: 2;
          box-shadow: 0 0 20px 5px rgba(90, 45, 130, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #FFB74D;
          text-shadow: 0 0 5px rgba(255, 183, 77, 0.8);
        }

        /* Shells (Orbits) */
        .shell {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(90, 45, 130, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shell.one {
          width: 150px;
          height: 150px;
          animation: rotate-orbit-fast 12s linear infinite;
        }

        .shell.two {
          width: 250px;
          height: 250px;
          animation: rotate-orbit-slow 18s linear infinite reverse;
        }

        .shell.three {
          width: 350px;
          height: 350px;
          animation: rotate-orbit-medium 22s linear infinite;
        }

        .shell.four {
          width: 450px;
          height: 450px;
          animation: rotate-orbit-slow 25s linear infinite reverse;
        }

        /* Electrons */
        .electron {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: #5A2D82;
          border-radius: 50%;
          box-shadow: 0 0 12px 2px rgba(90, 45, 130, 0.9);
          z-index: 3;
          transform-origin: center;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          color: #E0E0E0;
          font-weight: 600;
        }

        /* Shell 1 positions */
        .shell.one .electron:nth-child(1) { top: 25px; left: 50%; margin-left: -25px; }
        .shell.one .electron:nth-child(2) { bottom: 25px; left: 50%; margin-left: -25px; }

        /* Shell 2 positions */
        .shell.two .electron:nth-child(1) { top: 0; left: 50%; margin-left: -25px; }
        .shell.two .electron:nth-child(2) { bottom: 0; left: 50%; margin-left: -25px; }
        .shell.two .electron:nth-child(3) { top: 50%; left: 0; margin-top: -25px; }
        .shell.two .electron:nth-child(4) { top: 50%; right: 0; margin-top: -25px; }

        /* Shell 3 positions */
        .shell.three .electron:nth-child(1) { top: 50%; left: 0; margin-top: -25px; }
        .shell.three .electron:nth-child(2) { top: 50%; right: 0; margin-top: -25px; }

        /* Shell 4 positions */
        .shell.four .electron:nth-child(1) { top: 0; left: 50%; margin-left: -25px; }

        @media (max-width: 768px) {
          .atom-container {
            width: 300px;
            height: 300px;
          }
          .nucleus {
            width: 60px;
            height: 60px;
            font-size: 1rem;
          }
          .shell.one { width: 90px; height: 90px; }
          .shell.two { width: 150px; height: 150px; }
          .shell.three { width: 210px; height: 210px; }
          .shell.four { width: 270px; height: 270px; }
          .electron {
            width: 30px;
            height: 30px;
            font-size: 0.7rem;
          }
          .shell.one .electron:nth-child(1) { top: 15px; margin-left: -15px; }
          .shell.one .electron:nth-child(2) { bottom: 15px; margin-left: -15px; }
          .shell.two .electron { margin-left: -15px; margin-top: -15px; }
          .shell.three .electron { margin-top: -15px; }
          .shell.four .electron:nth-child(1) { margin-left: -15px; }
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[12rem] md:text-[20rem] font-bold text-white/5 select-none whitespace-nowrap">our mission</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <p className="text-2xl md:text-4xl leading-relaxed text-[#E0E0E0]">
          At PROJ-BLE, <span className="text-white font-semibold">our mission</span> is to redefine K1-12 education by integrating blended learning models that provide students with adaptive, engaging, & <span className="text-[#FFB74D] font-semibold">personalized learning experiences.</span>
        </p>
        <p className="mt-6 text-md md:text-lg text-[#A0A0A0]">
          We believe in leveraging technology, fostering critical thinking, and ensuring equal access to quality education for all students.
        </p>
      </div>

      <div className="relative mt-24 h-[300px] md:h-[500px] flex items-center justify-center">
        <div className="atom-container">
          <div className="nucleus">Ble</div>
          
          <div className="shell one">
            <div className="electron">Se</div>
            <div className="electron">Ae</div>
          </div>
          
          <div className="shell two">
            <div className="electron">Ph</div>
            <div className="electron">Jk</div>
            <div className="electron">Mh</div>
            <div className="electron">Kl</div>
          </div>
          
          <div className="shell three">
            <div className="electron">Kh</div>
            <div className="electron">Bb</div>
          </div>
          
          <div className="shell four">
            <div className="electron">Kh</div>
          </div>
        </div>
      </div>

      <div className="relative text-center -mt-8 md:-mt-16">
         <h3 className="text-[6rem] md:text-[10rem] font-bold text-white/5 select-none">Blended Learning</h3>
      </div>
    </section>
  );
};

export default Mission;