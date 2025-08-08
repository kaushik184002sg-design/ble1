import React from 'react';
import { envisionBackgroundStyle } from '../constants';
import { ArrowRightIcon } from './Icons';

const Envision: React.FC = () => {
  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden" style={envisionBackgroundStyle}>
      <div className="absolute inset-0 flex items-center justify-end right-[-10%] top-[-10%]">
        <h2 className="text-[12rem] md:text-[20rem] font-bold text-white/5 select-none whitespace-nowrap">Version</h2>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              <span className="text-[#FFB74D] font-semibold">We</span> envision a future where <span className="text-[#FFB74D] font-semibold">every student</span> experiences personalised, high-quality learning at the finest level of granularity.
            </h2>
          </div>
          <div className="max-w-md text-[#A0A0A0]">
            <p className="mb-6">
              <span className="text-white">While</span> the best educational resources may come from various providers, teachers remain essential as facilitators and coordinators, guiding students through a rich, integrated learning ecosystem.
            </p>
            <p className="mb-8">
              <span className="text-white">By seamlessly</span> combining technology, expert instruction, and diverse learning solutions through an advanced LMS, we empower educators to focus on mentoring and fostering critical thinking—ensuring every child thrives in a dynamic, student-centred environment
            </p>
            <a href="#" className="flex items-center text-white hover:text-[#FFB74D] transition-colors group">
              Know more
              <ArrowRightIcon className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Envision;