import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';

export default function Footer({ onStartCheckup }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs py-12 border-t border-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight block">
                Escola Jurídica
              </span>
              <span className="text-[10px] text-slate-400">
                Gestão Preventiva para Instituições de Ensino
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs">
            <a href="#diagnostico" className="hover:text-white transition-colors">Diagnóstico</a>
            <a href="#pilares" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
            <button onClick={onStartCheckup} className="text-brand-400 hover:text-brand-300 font-semibold">
              Fazer Check-up &rarr;
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Escola Jurídica • Desenvolvido para o Geedu Connect Aracaju.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
