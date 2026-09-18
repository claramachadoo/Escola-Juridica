import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Já temos um advogado que acionamos quando precisamos. Por que contratar a Escola Jurídica?",
      a: "No modelo tradicional, o advogado só é chamado quando o problema já explodiu: a reunião já foi feita, a mensagem impulsiva no WhatsApp já foi enviada e a escola já está exposta. A Escola Jurídica atua no dia a dia com a coordenação e a secretaria para que cada decisão tenha respaldo documental prévio, evitando que o conflito chegue à fase judicial."
    },
    {
      q: "O que recebemos após o Check-up Jurídico?",
      a: "Você recebe um raio-X institucional classificado em semáforo (🔴 Risco Imediato, 🟡 Ponto de Atenção, 🟢 Adequado) e um Plano de Ação 30/60/90 Dias com o cronograma prioritário de ajustes para a sua escola."
    },
    {
      q: "A assessoria preventiva vai burocratizar o trabalho pedagógico?",
      a: "Não. Nosso papel é justamente o oposto: criar procedimentos simples e modelos rápidos de atas para que a coordenação e os professores fiquem protegidos sem perder tempo com burocracia."
    },
    {
      q: "Nossa escola é de pequeno ou médio porte. O programa se aplica a nós?",
      a: "Sim, especialmente para escolas independentes. Um único processo de indenização por falha documental ou atrito de guarda pode causar um impacto financeiro e reputacional desproporcional. A prevenção é o investimento mais rentável da gestão."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1.5">
            Dúvidas Comuns
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-navy-950 hover:text-brand-600"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
