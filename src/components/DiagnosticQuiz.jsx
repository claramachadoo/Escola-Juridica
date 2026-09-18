import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Send, 
  Lock, 
  User, 
  Building2, 
  Briefcase, 
  Users, 
  Phone, 
  HelpCircle,
  ShieldAlert,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DIAGNOSTIC_QUESTIONS, STUDENT_BRACKETS, ROLES, LEGAL_CONCERNS } from '../data/diagnosticQuestions';
import { saveDiagnostic } from '../lib/supabase';

export default function DiagnosticQuiz({ whatsappNumber = "5579988255136" }) {
  const [stage, setStage] = useState('quiz'); // 'quiz' | 'lead_form' | 'result'
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    role: ROLES[0],
    studentCount: STUDENT_BRACKETS[1],
    whatsapp: '',
    mainConcern: LEGAL_CONCERNS[0],
  });
  const [formErrors, setFormErrors] = useState({});

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / DIAGNOSTIC_QUESTIONS.length) * 100);

  const handleSelectOption = (option) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: option }));
    setTimeout(() => {
      if (currentIdx < DIAGNOSTIC_QUESTIONS.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setStage('lead_form');
      }
    }, 220);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach((a) => { total += (a.points || 0); });
    return Math.round(total);
  };

  const getRiskBreakdown = () => {
    const immediateRisks = [];
    const attentionPoints = [];
    const adequatePoints = [];

    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      const selected = answers[q.id];
      if (!selected) return;
      if (selected.status === 'risk') {
        immediateRisks.push({ title: q.title, alert: selected.alert });
      } else if (selected.status === 'attention') {
        attentionPoints.push({ title: q.title, alert: selected.alert });
      } else {
        adequatePoints.push({ title: q.title });
      }
    });

    return { immediateRisks, attentionPoints, adequatePoints };
  };

  const handleSubmitLead = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Informe seu nome.';
    if (!formData.schoolName.trim()) errors.schoolName = 'Informe a escola.';
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 9) {
      errors.whatsapp = 'WhatsApp com DDD obrigatório.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setStage('result');

    // Persiste no Supabase e no cache de dores
    const finalScore = calculateScore();
    const { immediateRisks: rIm, attentionPoints: rAt, adequatePoints: rAd } = getRiskBreakdown();
    saveDiagnostic({
      name: formData.name,
      schoolName: formData.schoolName,
      role: formData.role,
      studentCount: formData.studentCount,
      whatsapp: formData.whatsapp,
      mainConcern: formData.mainConcern,
      score: finalScore,
      immediateRisks: rIm,
      attentionPoints: rAt,
      adequatePoints: rAd,
      answers,
    });

    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setFormData({
      name: '',
      schoolName: '',
      role: ROLES[0],
      studentCount: STUDENT_BRACKETS[1],
      whatsapp: '',
      mainConcern: LEGAL_CONCERNS[0],
    });
    setFormErrors({});
    setStage('quiz');
  };

  const score = calculateScore();
  const { immediateRisks, attentionPoints, adequatePoints } = getRiskBreakdown();

  const generateWhatsAppLink = () => {
    const text = `Olá! Realizei o Check-up da Escola Jurídica no Geedu Connect.%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Escola:* ${formData.schoolName} (${formData.studentCount})%0A` +
      `*Cargo:* ${formData.role}%0A` +
      `*Score:* ${score}/100%0A` +
      `*Pontos críticos:* ${immediateRisks.length} riscos imediatos, ${attentionPoints.length} pontos de atenção.%0A` +
      `*Principal dor:* ${formData.mainConcern}%0A%0A` +
      `Gostaria de receber a devolutiva do Mapa de Riscos e o Plano 30/60/90 dias.`;

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
  };

  return (
    <section id="diagnostico" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1.5 block">
            Diagnóstico Rápido (2 min)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Check-up de Segurança Jurídica Escolar
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Descubra em 8 perguntas onde a sua escola está juridicamente exposta a conflitos e litígios.
          </p>
        </div>

        {/* ==================================================== */}
        {/* STAGE 1: QUESTIONS */}
        {/* ==================================================== */}
        {stage === 'quiz' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-8">
            
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>Pergunta {currentIdx + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
                <span className="text-brand-600 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-600 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {currentQ.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-navy-950 leading-snug mb-2">
                {currentQ.question}
              </h3>
              <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                💡 <strong>Contexto:</strong> {currentQ.hint}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = answers[currentQ.id]?.label === option.label;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50/60 text-navy-950 font-medium'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${
                      isSelected ? 'border-brand-600 bg-brand-600' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-navy-950 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>
              <span className="text-[11px] text-slate-400">Tempo estimado: ~2 minutos</span>
            </div>

          </div>
        )}

        {/* ==================================================== */}
        {/* STAGE 2: LEAD CAPTURE */}
        {/* ==================================================== */}
        {stage === 'lead_form' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-navy-950">Respostas concluídas!</h3>
              <p className="text-xs text-slate-500 mt-1">
                Informe os dados institucionais para visualizar seu <strong>Índice de Segurança</strong> e o <strong>Mapa de Riscos</strong>:
              </p>
            </div>

            <form onSubmit={handleSubmitLead} className="space-y-3.5 max-w-md mx-auto">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Ana Paula Mendonça"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-brand-600 text-slate-900"
                />
                {formErrors.name && <p className="text-rose-500 text-[11px] mt-0.5">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nome da Escola *</label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  placeholder="Ex: Colégio Horizonte"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-brand-600 text-slate-900"
                />
                {formErrors.schoolName && <p className="text-rose-500 text-[11px] mt-0.5">{formErrors.schoolName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Cargo</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-600"
                  >
                    {ROLES.map((r, i) => <option key={i} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alunos</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-600"
                  >
                    {STUDENT_BRACKETS.map((b, i) => <option key={i} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp com DDD *</label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="(79) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-brand-600 text-slate-900"
                />
                {formErrors.whatsapp && <p className="text-rose-500 text-[11px] mt-0.5">{formErrors.whatsapp}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Principal Insegurança Jurídica Atual</label>
                <select
                  value={formData.mainConcern}
                  onChange={(e) => setFormData({ ...formData, mainConcern: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-brand-600"
                >
                  {LEGAL_CONCERNS.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all"
                >
                  Calcular Meu Índice & Mapa de Riscos
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-400">
                🔒 Dados protegidos conforme a LGPD.
              </p>
            </form>
          </div>
        )}

        {/* ==================================================== */}
        {/* STAGE 3: MINIMALIST RESULT DASHBOARD */}
        {/* ==================================================== */}
        {stage === 'result' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-8">
            
            <div className="text-center pb-6 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Diagnóstico Concluído • {formData.schoolName}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-navy-950">
                Índice de Segurança Jurídica
              </h3>

              {/* Score Display */}
              <div className="my-5 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className={`text-4xl font-black tracking-tight ${
                  score >= 80 ? 'text-emerald-600' : score >= 50 ? 'text-amber-600' : 'text-rose-600'
                }`}>
                  {score}<span className="text-base text-slate-400 font-bold">/100</span>
                </div>
                <div className="text-left border-l border-slate-200 pl-4">
                  <span className="text-xs font-bold text-navy-950 block">
                    {score >= 80 ? 'Nível Adequado' : score >= 50 ? 'Nível com Vulnerabilidades' : 'Nível Crítico de Exposição'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {immediateRisks.length} riscos imediatos identificados
                  </span>
                </div>
              </div>
            </div>

            {/* Risk Breakdown in clean cards */}
            <div className="py-6 border-b border-slate-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Raio-X de Exposição por Nível:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                  <span className="font-bold text-rose-800 block mb-1">🔴 Riscos Imediatos ({immediateRisks.length})</span>
                  <p className="text-[11px] text-rose-700">Exigem correção urgente nos contratos ou portaria.</p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                  <span className="font-bold text-amber-800 block mb-1">🟡 Atenção ({attentionPoints.length})</span>
                  <p className="text-[11px] text-amber-700">Rotinas informais que geram risco de passivo.</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <span className="font-bold text-emerald-800 block mb-1">🟢 Adequado ({adequatePoints.length})</span>
                  <p className="text-[11px] text-emerald-700">Práticas alinhadas à prevenção.</p>
                </div>
              </div>
            </div>

            {/* Deliverable Next Step */}
            <div className="pt-6 text-center max-w-md mx-auto">
              <h4 className="text-sm font-bold text-navy-950 mb-1">
                Receba o Mapa de Riscos Detalhado & Plano 30/60/90 Dias
              </h4>
              <p className="text-xs text-slate-500 mb-5">
                Nossa equipe apresentará as recomendações específicas para o porte de <strong>{formData.schoolName}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Resultado no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Novo Teste</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
