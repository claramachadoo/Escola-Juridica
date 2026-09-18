import React from 'react';
import { 
  FileSpreadsheet, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Calendar, 
  ArrowRight, 
  Layers, 
  ShieldAlert,
  ClipboardList
} from 'lucide-react';

export default function RiskMapPreview({ onStartCheckup }) {
  const auditItems = [
    { name: "Contrato de Prestação de Serviços Educacionais", status: "attention", note: "Cláusulas de rescisão e cobrança desatualizadas" },
    { name: "Regimento Escolar e Normas Disciplinares", status: "risk", note: "Procedimento de advertência/suspensão sem direito de defesa" },
    { name: "Protocolo de Bullying e Cyberbullying (Lei 14.811/24)", status: "risk", note: "Ausência de fluxo formal escrito de acolhimento e apuração" },
    { name: "Gestão de Alunos com Deficiência (LBI / PEI)", status: "attention", note: "Termos de adequação sem resguardo de responsabilidade pedagógica" },
    { name: "Autorização de Imagem, Voz e ECA Digital", status: "risk", note: "Termo genérico nulo perante recente jurisprudência dos tribunais" },
    { name: "Guarda Compartilhada e Retirada de Alunos", status: "attention", note: "Falta de protocolo obrigatório na portaria da escola" },
    { name: "Protocolo de Acidentes e Lei Lucas (Lei 13.722/18)", status: "adequate", note: "Equipe treinada e formulário de ocorrência estruturado" },
    { name: "Atas de Alinhamento com Famílias Conflituosas", status: "attention", note: "Comunicações dispersas em WhatsApp sem valor probatório" },
  ];

  return (
    <section id="mapa-risco" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200 mb-3">
            <ClipboardList className="w-4 h-4 text-brand-600" />
            <span>Entregável Tangível de Entrada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Não entregamos teoria jurídica.<br />
            Entregamos o <span className="text-brand-600">Mapa de Riscos</span> da sua escola.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Em vez de tentar vender um contrato anual logo no primeiro aperto de mão, oferecemos um <strong>raio-X de conformidade</strong> com classificação clara em semáforo e um plano prático para os próximos 90 dias.
          </p>
        </div>

        {/* Deliverable Mockup & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Dashboard of the Risk Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Exemplo de Relatório Entregue</span>
                <h3 className="text-lg font-bold text-navy-950">Mapa de Exposição Jurídica Escolar</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">🔴 Risco Imediato</span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">🟡 Atenção</span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">🟢 Adequado</span>
              </div>
            </div>

            {/* Audit Table items */}
            <div className="mt-5 space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {auditItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex-1">
                    <span className="font-semibold text-slate-900 block">{item.name}</span>
                    <span className="text-slate-500 text-xs mt-0.5 block">{item.note}</span>
                  </div>
                  <div className="flex-shrink-0">
                    {item.status === 'risk' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800">
                        🔴 Crítico
                      </span>
                    )}
                    {item.status === 'attention' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                        🟡 Atenção
                      </span>
                    )}
                    {item.status === 'adequate' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        🟢 Conforme
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action plan 30/60/90 days ribbon */}
            <div className="mt-6 p-4 rounded-xl bg-navy-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-brand-300 uppercase tracking-wide block">Acompanhamento</span>
                <span className="text-sm font-bold text-white">Plano de Ação 30/60/90 Dias com Cronograma de Implantação</span>
              </div>
              <span className="px-3 py-1 rounded-lg bg-brand-600 text-white font-bold text-xs">
                Incluso no Check-up
              </span>
            </div>
          </div>

          {/* Right Column: Why it matters to the school director */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-base font-bold text-navy-950 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-600" />
                <span>O que a sua escola ganha na prática:</span>
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Fim do 'achismo':</strong> Certeza documentada de quais cláusulas e rotinas realmente colocam a escola em risco.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Priorização inteligente:</strong> Saber exatamente o que resolver hoje (30 dias) e o que pode ser estruturado ao longo do semestre.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Blindagem pedagógica e da secretaria:</strong> Coordenadores aprendem a registrar incidentes de forma que tenham peso legal probatório.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-200">
              <h5 className="font-bold text-brand-900 text-sm mb-1">
                Faça o pré-diagnóstico no stand ou online
              </h5>
              <p className="text-xs text-brand-700 leading-relaxed mb-4">
                O Check-up de 2 minutos identifica seus primeiros pontos de atenção para que você receba o Mapa de Riscos na reunião de devolutiva.
              </p>
              <button
                onClick={onStartCheckup}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900"
              >
                <span>Fazer meu Check-up agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
