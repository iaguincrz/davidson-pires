
import React from 'react';
import { EXPERT_DATA, HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGES[0]} 
          alt={EXPERT_DATA.name}
          className="w-full h-full object-cover object-top brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-12 lg:pb-0 lg:max-w-4xl lg:mx-auto text-white lg:text-center animate-fade-in-up">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-amber-600/80 backdrop-blur-sm rounded-full">
          {EXPERT_DATA.cro}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
          Eu sou {EXPERT_DATA.name}, <br/>
          <span className="text-amber-400">Dentista em {EXPERT_DATA.city}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl lg:mx-auto font-light leading-relaxed">
          {EXPERT_DATA.specialty} Especialista em devolver a saúde e o brilho ao seu sorriso com resultados imperceptíveis.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a 
            href={EXPERT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Agendar primeira consulta gratuita no WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <span className="text-xs text-slate-400 font-medium">Resposta rápida • Sem compromisso</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
