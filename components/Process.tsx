
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contato Inicial",
      desc: "Você clica no botão do WhatsApp e envia uma mensagem informando seu interesse."
    },
    {
      num: "02",
      title: "Agendamento",
      desc: "Escolhemos o melhor horário para você vir ao consultório em Goianésia."
    },
    {
      num: "03",
      title: "Avaliação Gratuita",
      desc: "Realizo um exame completo, entendo suas queixas e apresento um plano personalizado."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Como funciona sua primeira visita?</h2>
          <p className="text-slate-500">Transparência desde o primeiro contato.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 text-3xl font-black mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed italic">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-amber-50 rounded-3xl border border-amber-100 text-center">
          <p className="text-amber-800 font-medium">
            💡 Lembre-se: A primeira consulta é <strong>100% gratuita e sem compromisso</strong>. Meu objetivo é te informar sobre sua saúde bucal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
