
import React from 'react';
import { HERO_IMAGES } from '../constants';

interface Props {
  onImageClick: (url: string) => void;
}

const BehindScenes: React.FC<Props> = ({ onImageClick }) => {
  // Use the remaining hero images as "behind the scenes" or authority shots
  const extras = [
    { url: HERO_IMAGES[2], caption: "Precisão em cada detalhe" },
    { url: HERO_IMAGES[3], caption: "Atendimento focado em você" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Bastidores & Autoridade</h2>
          <p className="text-slate-500">Conheça um pouco mais da estrutura preparada para te receber.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extras.map((item, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer shadow-lg"
              onClick={() => onImageClick(item.url)}
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <span className="text-white text-xl font-bold italic">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindScenes;
