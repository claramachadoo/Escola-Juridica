import React from 'react';
import { FileText, Users, ShieldCheck } from 'lucide-react';

export default function CorePillars() {
  const pillars = [
    {
      icon: FileText,
      title: "Governança Documental",
      description: "Revisão e blindagem dos contratos educacionais, termos de imagem/ECA Digital, regimento escolar e atas oficiais de reuniões com valor probatório.",
    },
    {
      icon: Users,
      title: "Gestão de Conflitos",
      description: "Orientação prévia antes de reuniões tensas com famílias, protocolos objetivos para pais separados e mediação de ocorrências disciplinares.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Legislação",
      description: "Adequação prática às obrigações da Lei Antibullying (Lei 14.811/24), Lei Lucas (acidentes/socorro), inclusão de alunos PCD e LGPD escolar.",
    },
  ];

  return (
    <section id="pilares" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1.5">
            Metodologia Preventiva
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Como Funciona a Escola Jurídica
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Segurança para a direção decidir no dia a dia, sem burocracia desnecessária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-950 shadow-sm mb-4">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
