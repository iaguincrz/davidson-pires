
import React from 'react';
import { EXPERT_DATA } from '../constants.ts';

interface CTASectionProps {
  title: string;
  subtitle: string;
  isFinal?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, isFinal }) => {
  if (isFinal) {
    return (
      <section className="py-24 px-6 bg-[#cc7a00] text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/95 font-medium">
            {subtitle}
          </p>
          
          <a 
            href={EXPERT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-[#cc7a00] px-10 py-7 rounded-[2rem] text-xl md:text-2xl font-bold shadow-2xl flex items-center justify-between gap-8 hover:scale-105 transition-all duration-300 group min-w-[320px]"
          >
            <span>Agendar avaliação gratuita</span>
            <span className="bg-[#cc7a00] text-white rounded-full p-1.5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
          
          <p className="mt-10 text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">
            Resposta em menos de 5 minutos em horário comercial
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 text-center bg-white text-slate-900 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-10 text-slate-500">
          {subtitle}
        </p>
        
        <a 
          href={EXPERT_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white hover:bg-green-700 rounded-2xl text-xl font-bold shadow-2xl transform transition-all hover:scale-105 active:scale-95"
        >
          Falar com Dr. Davidson
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
