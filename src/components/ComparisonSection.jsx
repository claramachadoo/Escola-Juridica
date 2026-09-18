import React from 'react';
import { XCircle, CheckCircle2, Flame, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ComparisonSection({ onStartCheckup }) {
  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
            Mudança de Paradigma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Jurídico Apaga-Incêndio vs. Jurídico como Ferramenta de Gestão
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            A maioria das escolas possui um advogado, mas poucas possuem uma <strong>gestão jurídica preventiva</strong>. Veja a diferença no dia a dia:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Reativo (O Modelo Antigo / Apaga Incêndio) */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-rose-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Abordagem Reativa</span>
                <h3 className="text-lg font-bold text-navy-950">O Jurídico 'Apaga-Incêndio'</h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>O advogado só é acionado quando a citação judicial chega ou o Procon bate na porta.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Decisões delicadas com famílias são tomadas no calor do momento via WhatsApp pela coordenação.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Contratos antigos e genéricos que não protegem na cobrança de inadimplentes.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Casos de bullying ou acidentes são geridos no improviso, sem atas formais assinadas.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Resultado:</strong> Desgaste institucional, custos imprevisíveis e perda de reputação.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Preventivo (Programa Escola Jurídica) */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border-2 border-emerald-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
              Recomendado
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Abordagem Preventiva</span>
                <h3 className="text-lg font-bold text-navy-950">Programa Escola Jurídica</h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Consulta rápida antes de enviar a resposta delicada ou realizar a reunião com os pais.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Protocolos escritos e equipe treinada para saber exatamente como agir em cada incidente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Contratos blindados anualmente com adequação ao ECA Digital, LGPD e combate à inadimplência.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Atas estruturadas que geram prova prévia e desarmam litígios antes que eles comecem.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Resultado:</strong> Previsibilidade financeira, redução de conflitos e tranquilidade para educar.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartCheckup}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-navy-950 hover:bg-navy-900 shadow-md transition-all active:scale-98"
          >
            <span>Descobrir a maturidade preventiva da sua escola</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
