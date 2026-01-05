
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ResultsGallery from './components/ResultsGallery';
import TrustFeatures from './components/TrustFeatures';
import CTASection from './components/CTASection';
import Process from './components/Process';
import BehindScenes from './components/BehindScenes';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Lightbox from './components/Lightbox';

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
        title="Você está a apenas um 'Olá' de transformar o seu sorriso."
        subtitle="Agende sua avaliação gratuita hoje. Restam poucas vagas para encerrarmos a agenda desta semana."
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
