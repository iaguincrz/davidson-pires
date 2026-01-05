
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

interface ResultsGalleryProps {
  onImageClick: (url: string) => void;
}

const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onImageClick }) => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados Reais</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Transformações que resgataram a autoestima e a vontade de sorrir de meus pacientes.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all"
            onClick={() => onImageClick(img)}
          >
            <img 
              src={img} 
              alt={`Resultado ${idx + 1}`} 
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-400 mt-12 italic">
        * Resultados podem variar de pessoa para pessoa. Fotos autorizadas para fins informativos.
      </p>
    </section>
  );
};

export default ResultsGallery;
