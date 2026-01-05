
import React from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fade-in"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <img 
        src={imageUrl} 
        alt="Visualização ampliada" 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-up"
      />
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        Clique em qualquer lugar para fechar
      </div>
    </div>
  );
};

export default Lightbox;
