import React from 'react';
import { ArrowDown, Clock, ShieldCheck, FileCheck } from 'lucide-react';

export default function Hero({ onStartCheckup }) {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-white border-b border-slate-200/80 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
          <span>Gestão Jurídica Preventiva para Instituições de Ensino</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-extrabold text-navy-950 tracking-tight leading-[1.12] mb-6">
          Sua escola está <span className="text-brand-600">juridicamente protegida</span> ou apenas apagando incêndios?
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Organizamos juridicamente a sua instituição para evitar atritos com famílias e decisões improvisadas antes que elas virem processos judiciais.
        </p>

        {/* Core Thesis Card (Minimalist) */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium italic mb-8">
          “O maior risco jurídico de uma escola normalmente não começa no processo. <span className="text-navy-950 font-semibold not-italic">Começa em uma decisão cotidiana mal documentada.</span>”
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button
            onClick={onStartCheckup}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 active:scale-[0.99] transition-all"
          >
            <span>Fazer o Check-up Jurídico Escolar (2 Minutos)</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Minimalist Micro Proofs */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Leva apenas 2 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            Em conformidade com ECA Digital & LGPD
          </span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-slate-400" />
            Gera Mapa de Riscos 30/60/90 dias
          </span>
        </div>

      </div>
    </section>
  );
}
