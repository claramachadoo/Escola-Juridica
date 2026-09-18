import React, { useState } from 'react';
import { X, QrCode, BookOpen, Sparkles, CheckCircle2, RotateCcw, Copy, ExternalLink } from 'lucide-react';

export default function KioskModal({ isOpen, onClose, onResetQuiz }) {
  const [activeTab, setActiveTab] = useState('qr'); // 'qr' | 'script'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href.split('#')[0] : 'https://escola-segura.com.br';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              📱
            </div>
            <div>
              <h3 className="text-base font-bold text-navy-950">Kit de Atendimento no Stand (Geedu Connect)</h3>
              <p className="text-xs text-slate-500">QR Code para o visitante e script de abordagem da equipe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'qr'
                ? 'border-brand-600 text-brand-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Exibir QR Code para o Gestor</span>
          </button>
          <button
            onClick={() => setActiveTab('script')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'script'
                ? 'border-brand-600 text-brand-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Roteiro de Conversa (3-5 min)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          
          {/* TAB 1: QR CODE DISPLAY */}
          {activeTab === 'qr' && (
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Totem / Banner Virtual
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-navy-950 mb-2">
                SUA ESCOLA ESTÁ JURIDICAMENTE PREPARADA PARA 2027?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6">
                Aponte a câmera do seu celular para fazer o <strong>Check-up Jurídico Escolar de 2 minutos</strong> e calcular seu Índice de Segurança.
              </p>

              {/* QR Code Graphic Mockup */}
              <div className="p-6 bg-white rounded-3xl shadow-xl border-4 border-slate-900 inline-block mb-6 relative group">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(currentUrl + '#diagnostico')}&color=0b132b`}
                  alt="QR Code Check-up Jurídico Escolar"
                  className="w-56 h-56 mx-auto rounded-lg"
                />
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Escaneie e faça no seu celular
                </div>
              </div>

              {/* Mote */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 max-w-md text-center mb-6">
                <p className="text-xs font-semibold text-amber-900">
                  “Problemas jurídicos também são problemas de gestão.”
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Link Copiado!' : 'Copiar Link da Página'}</span>
                </button>

                <button
                  onClick={() => {
                    onResetQuiz();
                    onClose();
                    const el = document.getElementById('diagnostico');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Iniciar Diagnóstico neste Tablet</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: STAND TEAM SCRIPT */}
          {activeTab === 'script' && (
            <div className="space-y-6 text-left">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-navy-950 font-bold block mb-1">Regra de Ouro no Stand do Geedu Connect:</strong>
                Não comece perguntando "vocês já possuem assessoria jurídica?" (a resposta será sempre "sim"). Comece fazendo o gestor falar sobre a escola dele!
              </div>

              {/* Step by step */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-[11px] font-extrabold uppercase text-brand-600 mb-1">Etapa 1: Conexão</div>
                  <p className="text-sm font-semibold text-navy-950 mb-1">
                    “Posso te fazer uma pergunta rápida sobre a gestão da sua escola?”
                  </p>
                  <p className="text-xs text-slate-500">
                    Em seguida: “Você é mantenedor(a) ou atua na direção/coordenação? Quantos alunos têm aproximadamente?”
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-[11px] font-extrabold uppercase text-amber-600 mb-1">Etapa 2: O Problema Central</div>
                  <p className="text-sm font-semibold text-navy-950 mb-1">
                    “Hoje, quando surge uma situação delicada com pai, aluno ou professor, vocês costumam consultar o jurídico antes de tomar a decisão ou o jurídico normalmente entra depois que o problema já aconteceu?”
                  </p>
                  <p className="text-xs text-slate-500">
                    Se responderem "depois", você encontrou o ponto exato da abordagem.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-[11px] font-extrabold uppercase text-indigo-600 mb-1">Etapa 3: Impacto & Empatia</div>
                  <p className="text-sm font-semibold text-navy-950 mb-1">
                    “Isso é muito comum. A maioria das escolas tem advogado, mas não necessariamente tem gestão jurídica preventiva. Quando o advogado recebe a situação, a reunião já aconteceu, o WhatsApp já foi enviado e a decisão foi tomada.”
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-[11px] font-extrabold uppercase text-emerald-600 mb-1">Etapa 4: Chamada para o Check-up (O CTA)</div>
                  <p className="text-sm font-semibold text-navy-950 mb-1">
                    “Estamos fazendo aqui no evento um check-up rápido de 2 minutos sobre o nível de segurança jurídica da escola. Ele gera um Mapa de Riscos 🔴 🟡 🟢 na hora. Posso fazer com você aqui no tablet?”
                  </p>
                  <p className="text-xs text-slate-500">
                    Meta da conversa: Descobrir pelo menos uma dor real do gestor (ex: pais separados, inclusão, bullying ou inadimplência).
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
