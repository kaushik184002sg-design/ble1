import React from 'react';
import { Lightbulb, BookOpen, Users, Compass, Heart } from "lucide-react";
import { heroBackgroundStyle } from '../constants';

const values = [
  {
    title: "Innovation",
    description: "We embrace technology to enhance learning outcomes.",
    icon: <Lightbulb className="w-12 h-12 text-purple-400" style={{ animation: 'none', transform: 'none' }} />,
  },
  {
    title: "Equity",
    description: "Quality education should be accessible to all students.",
    icon: <BookOpen className="w-12 h-12 text-purple-400" style={{ animation: 'none', transform: 'none' }} />,
  },
  {
    title: "Collaboration",
    description: "A thriving educational environment is built on teamwork.",
    icon: <Users className="w-12 h-12 text-purple-400" style={{ animation: 'none', transform: 'none' }} />,
  },
  {
    title: "Lifelong Learning",
    description:
      "Education is not just about academics; it's about cultivating a growth mindset.",
    icon: <Compass className="w-12 h-12 text-purple-400" style={{ animation: 'none', transform: 'none' }} />,
  },
  {
    title: "Student-Centred Approach",
    description:
      "Every decision we make is driven by what benefits students the most.",
    icon: <Heart className="w-12 h-12 text-purple-400" style={{ animation: 'none', transform: 'none' }} />,
  },
];

const CoreValues: React.FC = () => {
  return (
    <section id="values" className="text-white py-16 px-6" style={heroBackgroundStyle}>
      <style jsx>{`
        .hand {
          display: inline-grid;
          counter-set: card 0;
          grid-template-columns: repeat(5, 0);
          gap: 0;
          transition: 300ms ease-out;
          justify-content: center;
        }

        .hand:hover {
          grid-template-columns: repeat(5, 22vmin);
          gap: 3vmin;
        }

        .card {
          position: relative;
          height: 32vmin;
          counter-increment: card;
        }

        .card::before {
          top: 0;
          left: 50%;
          width: 22vmin;
          height: 31vmin;
          transform-origin: 50% 100%;
          transform: translateX(-50%) rotate(calc((var(--i) * 15deg) - 30deg));
          position: absolute;
          content: '';
          border-radius: 1.5vmin;
          border: 1px solid rgba(147, 51, 234, 0.5);
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(147, 51, 234, 0.05) 100%);
          backdrop-filter: blur(10px);
          transition: 300ms ease-out;
          z-index: 1;
        }

        .hand:hover .card::before {
          transform: translateX(-50%) rotate(0);
        }

        .hand:hover .card:hover::before {
          transform: translateX(-50%) rotate(0) translateY(-5%);
          border-color: rgba(255, 183, 77, 0.6);
          background: linear-gradient(135deg, rgba(255, 183, 77, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(147, 51, 234, 0.05) 100%);
        }

        .card-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 20vmin;
          height: 29vmin;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5vmin;
          z-index: 2;
          opacity: 0;
          transition: 300ms ease-out;
        }

        .hand:hover .card-content {
          opacity: 1;
        }

        .card-title {
          font-size: 2.2vmin;
          font-weight: bold;
          color: #FFB74D;
          margin: 0.8vmin 0;
        }

        .card-description {
          font-size: 1.6vmin;
          color: #E0E0E0;
          line-height: 1.3;
        }

        .card-icon {
          margin-bottom: 0.8vmin;
          animation: none !important;
          transform: none !important;
        }

        @media (max-width: 768px) {
          .hand {
            grid-template-columns: repeat(5, 16vmin);
            gap: 1.5vmin;
          }
          
          .hand:hover {
            grid-template-columns: repeat(5, 16vmin);
            gap: 1.5vmin;
          }
          
          .card {
            height: 24vmin;
          }
          
          .card::before {
            width: 16vmin;
            height: 23vmin;
            transform: translateX(-50%) rotate(0);
          }
          
          .card-content {
            width: 14vmin;
            height: 21vmin;
            opacity: 1;
          }
          
          .card-title {
            font-size: 2.8vmin;
          }
          
          .card-description {
            font-size: 2.0vmin;
          }
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-orange-300">Core</span> Values
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="hand">
          {values.map((value, index) => (
            <div
              key={index}
              className="card"
              style={{'--i': index} as React.CSSProperties}
            >
              <div className="card-content">
                <div className="card-icon">{value.icon}</div>
                <div className="card-title">{value.title}</div>
                <div className="card-description">{value.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;