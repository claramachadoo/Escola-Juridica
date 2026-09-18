import React from 'react';
import { 
  FileText, 
  MessageSquareWarning, 
  ShieldAlert, 
  GraduationCap, 
  Check, 
  Quote
} from 'lucide-react';

export default function FourPillars() {
  const pillars = [
    {
      icon: FileText,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      accent: "text-blue-600",
      number: "01",
      title: "Governança Documental",
      subtitle: "A espinha dorsal da segurança institucional",
      description: "Blindagem de toda a documentação que rege o relacionamento com as famílias e fornecedores.",
      features: [
        "Contrato de prestação de serviços educacionais e aditivos",
        "Regimento escolar e manuais do aluno/família",
        "Termos de matrícula e rematrícula com garantias",
        "Modelos oficiais de atas com valor probatório",
      ],
    },
    {
      icon: MessageSquareWarning,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600",
      number: "02",
      title: "Gestão de Conflitos",
      subtitle: "Orientação estratégica antes de decisões delicadas",
      description: "Acompanhamento preventivo antes que uma conversa tensa na coordenação vire uma ação judicial.",
      features: [
        "Alinhamento prévio antes de reuniões críticas com pais",
        "Protocolo para divergências entre pais separados",
        "Respostas técnicas a notificações e advogados de famílias",
        "Mediação de atritos disciplinares e suspensões",
      ],
    },
    {
      icon: ShieldAlert,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600",
      number: "03",
      title: "Compliance Educacional & ECA Digital",
      subtitle: "Conformidade regulatória sem engessar a pedagogia",
      description: "Adequação prática às leis que mais geram penalidades e fiscalizações no setor educacional.",
      features: [
        "ECA Digital e proteção de imagem nas redes sociais",
        "Adequação à LGPD com governança de dados sensíveis",
        "Protocolos de inclusão e atendimento de alunos PCD (LBI)",
        "Combate e prevenção ao bullying (Lei 14.811/2024)",
      ],
    },
    {
      icon: GraduationCap,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accent: "text-indigo-600",
      number: "04",
      title: "Treinamento Contínuo da Equipe",
      subtitle: "Cultura jurídica na ponta da operação",
      description: "Capacitamos quem está no dia a dia da escola para evitar erros operacionais básicos.",
      features: [
        "Oficinas para coordenadores: como redigir atas seguras",
        "Treinamento de secretaria e portaria para entrega de alunos",
        "Orientação a professores sobre registro de ocorrências em sala",
        "Workshops preventivos sobre Lei Lucas e primeiros socorros",
      ],
    },
  ];

  return (
    <section id="pilares" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">
            Como Funciona a Escola Jurídica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Os 4 Pilares da Gestão Jurídica Preventiva
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A escola não precisa comprar “horas de advogado por mês”. Precisa comprar <strong className="text-navy-900 font-semibold">segurança para decidir</strong> em cada uma dessas quatro frentes vitais.
          </p>
        </div>

        {/* Central Thesis Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300 flex-shrink-0">
              <Quote className="w-7 h-7" />
            </div>
            <div>
              <p className="text-base sm:text-xl font-medium leading-snug italic text-slate-100">
                “Nós não queremos aparecer quando a sua escola já estiver sendo processada. <span className="text-brand-300 font-bold">Queremos estar presentes no momento em que uma decisão ainda pode evitar o processo.</span>”
              </p>
              <span className="block mt-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                — Tese Central da Escola Jurídica
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top line with Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm ${pillar.color}`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-1 leading-snug">
                    {pillar.title}
                  </h3>
                  <span className={`text-xs font-semibold block mb-3 ${pillar.accent}`}>
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
