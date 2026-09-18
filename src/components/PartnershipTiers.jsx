import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PartnershipTiers({ onStartCheckup }) {
  const tiers = [
    {
      name: "Escola Essencial",
      tagline: "Blindagem Documental Básica",
      description: "Ideal para organizar a base de contratos e ter suporte prioritário para dúvidas rotineiras da gestão.",
      highlights: [
        "Revisão anual do Contrato de Matrícula",
        "Termos de imagem, dados e ECA Digital",
        "Canal direto para consultas preventivas",
        "Modelos oficiais de atas com validade legal",
      ],
      cta: "Escolher Essencial",
    },
    {
      name: "Escola Protegida",
      tagline: "Prevenção Ativa & Protocolos",
      popular: true,
      description: "Acompanhamento contínuo com protocolos estruturados de incidentes e treinamentos semestrais da equipe.",
      highlights: [
        "Tudo incluso no Plano Essencial",
        "Protocolos antibullying e cyberbullying (Lei 14.811/24)",
        "Procedimentos de inclusão de alunos PCD (LBI / PEI)",
        "Alinhamento prévio para reuniões difíceis com pais",
        "Capacitações semestrais para coordenação e secretaria",
      ],
      cta: "Escolher Protegida",
    },
    {
      name: "Escola 360",
      tagline: "Governança Escolar Integrada",
      description: "Consultoria estratégica completa, comitê de incidentes graves e auditoria perene de governança.",
      highlights: [
        "Tudo incluso no Plano Protegido",
        "Jurídico integrado às decisões da mantenedora",
        "Comitê de resposta rápida para crises institucionais",
        "Auditoria perene de dados e compliance regulatório",
      ],
      cta: "Escolher 360",
    },
  ];

  return (
    <section id="planos" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1.5">
            Modelos de Parceria
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Níveis de Proteção da Escola Jurídica
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Planos contínuos estruturados para a realidade e porte de cada instituição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                tier.popular
                  ? 'bg-navy-950 text-white border-navy-900 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    tier.popular ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tier.popular ? 'Mais Escolhido' : tier.tagline}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-navy-950'}`}>
                  {tier.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${tier.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.description}
                </p>

                <div className={`pt-4 border-t ${tier.popular ? 'border-slate-800' : 'border-slate-100'}`}>
                  <ul className="space-y-2.5 text-xs">
                    {tier.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? 'text-brand-400' : 'text-emerald-600'
                        }`} />
                        <span className={tier.popular ? 'text-slate-200' : 'text-slate-700'}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100/10">
                <button
                  onClick={onStartCheckup}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    tier.popular
                      ? 'bg-brand-600 hover:bg-brand-500 text-white'
                      : 'bg-navy-950 hover:bg-navy-800 text-white'
                  }`}
                >
                  <span>Fazer Check-up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-8">
          ℹ️ Os valores de investimento são dimensionados a partir do porte (número de alunos) e maturidade da instituição no Check-up.
        </p>

      </div>
    </section>
  );
}
