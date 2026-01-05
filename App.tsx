
import React, { useState } from 'react';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import ResultsGallery from './components/ResultsGallery.tsx';
import TrustFeatures from './components/TrustFeatures.tsx';
import CTASection from './components/CTASection.tsx';
import Process from './components/Process.tsx';
import BehindScenes from './components/BehindScenes.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import Lightbox from './components/Lightbox.tsx';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imgUrl: string) => setSelectedImage(imgUrl);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      <Hero />
      <About />
      <ResultsGallery onImageClick={openLightbox} />
      <TrustFeatures />
      <CTASection 
        title="O sorriso que você sempre sonhou está a um clique."
        subtitle="Agende agora sua primeira avaliação sem custos."
      />
      <Process />
      <BehindScenes onImageClick={openLightbox} />
      <CTASection 
        title="Você está a apenas um 'Olá' de transformar o seu sorriso para sempre."
        subtitle="Restam poucas vagas para avaliações gratuitas esta semana."
        isFinal
      />
      <Footer />
      
      <FloatingWhatsApp />
      
      {selectedImage && (
        <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />
      )}
    </div>
  );
};

export default App;
