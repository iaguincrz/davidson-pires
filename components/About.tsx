
import React from 'react';
import { EXPERT_DATA, HERO_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={HERO_IMAGES[1]} 
              alt="Dr. Davidson Pires em seu consultório" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10 hidden lg:block"></div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Muito prazer, sou o Davidson.
          </h2>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Acredito que um sorriso bonito vai muito além da estética — ele é a porta de entrada para a sua confiança e bem-estar.
            </p>
            <p>
              Meu foco é entender a sua necessidade individual. Não trabalho com "fórmulas prontas", mas sim com um planejamento personalizado que respeita a sua anatomia e história.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "Atendimento exclusivo e humanizado",
                "Foco absoluto em naturalidade",
                "Especialista em saúde gengival (base do sorriso)",
                "Transparência total em cada etapa do tratamento"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <a 
              href={EXPERT_DATA.whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold rounded-xl transition-all"
            >
              Conhecer meu trabalho no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
