import React from 'react';
import { Check, Shield, Zap, Award, ArrowRight } from 'lucide-react';

export default function ProductTiers({ onStartCheckup }) {
  const tiers = [
    {
      name: "Escola Essencial",
      tagline: "Blindagem documental e suporte para o dia a dia",
      badge: "Entrada na Prevenção",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
      description: "Estruturação dos instrumentos jurídicos fundamentais e canal direto para consultas preventivas antes de agir.",
      features: [
        "Revisão e atualização anual do Contrato de Matrícula",
        "Termos de uso de imagem, dados e ECA Digital",
        "Consultas preventivas via canal prioritário (WhatsApp / E-mail)",
        "Modelos de atas e notificações para cobrança amigável",
        "Orientações para situações cotidianas com famílias",
      ],
      idealFor: "Escolas que precisam garantir uma base jurídica sólida e estancar dúvidas imediatas.",
    },
    {
      name: "Escola Protegida",
      tagline: "Governança ativa, protocolos estruturados e capacitação",
      badge: "Mais Escolhido",
      popular: true,
      badgeColor: "bg-brand-500 text-white border-brand-400",
      description: "Acompanhamento proativo contínuo com protocolos de incidentes e treinamentos práticos da coordenação.",
      features: [
        "Tudo incluso no Plano Essencial",
        "Elaboração de Protocolo Antibullying e Cyberbullying (Lei 14.811/24)",
        "Procedimento jurídico para Inclusão e Alunos PCD (LBI / PEI)",
        "Reuniões de alinhamento prévio antes de conversas críticas com pais",
        "Capacitações semestrais para coordenação, portaria e secretaria",
        "Auditoria semestral de conformidade documental",
      ],
      idealFor: "Escolas que buscam tranquilidade na rotina pedagógica e redução drástica de conflitos.",
    },
    {
      name: "Escola 360",
      tagline: "Jurídico educacional integrado à alta gestão institucional",
      badge: "Gestão Integrada",
      badgeColor: "bg-navy-900 text-brand-300 border-navy-700",
      description: "Consultoria estratégica completa, comitê de incidentes graves e auditoria perene de governança escolar.",
      features: [
        "Tudo incluso no Plano Protegido",
        "Jurídico integrado às decisões estratégicas da mantenedora",
        "Comitê de Resposta Rápida a crises e incidentes graves",
        "Capacitação contínua para todo o corpo docente",
        "Compliance integral de dados escolares e ECA Digital",
        "Acompanhamento presencial ou virtual em casos de alta tensão",
      ],
      idealFor: "Instituições de médio a grande porte que exigem proteção 360º para a marca da escola.",
    },
  ];

  return (
    <section id="planos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">
            Modelos de Parceria Preventiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Níveis de Proteção da Escola Jurídica
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Cada instituição possui seu porte e sua maturidade. Por isso, a proposta é desenhada de acordo com a realidade da sua escola após a realização do diagnóstico.
          </p>
        </div>

        {/* Grid of Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-brand-500 scale-100 lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeColor}`}>
                  {tier.badge}
                </span>
                {tier.popular && (
                  <span className="text-xs font-semibold text-brand-300 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
                    Recomendado para Gestão
                  </span>
                )}
              </div>

              {/* Title & description */}
              <div>
                <h3 className={`text-2xl font-extrabold tracking-tight mb-2 ${
                  tier.popular ? 'text-white' : 'text-navy-950'
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                  tier.popular ? 'text-brand-300' : 'text-brand-600'
                }`}>
                  {tier.tagline}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  tier.popular ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {tier.description}
                </p>

                {/* Features list */}
                <div className={`pt-6 border-t ${tier.popular ? 'border-slate-800' : 'border-slate-200'}`}>
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-4 ${
                    tier.popular ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Entregáveis & Acompanhamento:
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          tier.popular ? 'text-brand-400' : 'text-emerald-600'
                        }`} />
                        <span className={tier.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom ideal for & CTA */}
              <div className={`mt-8 pt-6 border-t ${tier.popular ? 'border-slate-800' : 'border-slate-200'}`}>
                <p className={`text-[11px] italic mb-5 ${
                  tier.popular ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <strong>Perfil ideal:</strong> {tier.idealFor}
                </p>
                <button
                  onClick={onStartCheckup}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25'
                      : 'bg-navy-950 hover:bg-navy-900 text-white'
                  }`}
                >
                  <span>Realizar Check-up para este perfil</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing clarification footer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            ℹ️ <strong>Por que não apresentamos um valor fixo imediato?</strong> Uma escola de 120 alunos e um colégio de 1.500 alunos possuem complexidades operacionais distintas. O valor do investimento é personalizado a partir do Check-up Jurídico Escolar e do porte da sua instituição.
          </p>
        </div>

      </div>
    </section>
  );
}
