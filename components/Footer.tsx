
import React from 'react';
import { EXPERT_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-bold mb-1">{EXPERT_DATA.name}</h3>
          <p className="text-sm">{EXPERT_DATA.profession} • {EXPERT_DATA.cro}</p>
          <p className="text-sm mt-1">{EXPERT_DATA.city} - GO</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href={EXPERT_DATA.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            Instagram
          </a>
          <a 
            href={EXPERT_DATA.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            WhatsApp
          </a>
        </div>
        
        <div className="text-xs text-slate-600">
          © {new RegExp(/\d{4}/).exec(new Date().toISOString())} {EXPERT_DATA.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
