import React, { useState, useEffect } from 'react';
import { 
  X, 
  BarChart3, 
  Download, 
  KeyRound, 
  ShieldCheck, 
  Users, 
  AlertTriangle, 
  Building2, 
  CheckCircle2, 
  RefreshCw,
  Search
} from 'lucide-react';
import { getDiagnosticsData, isSupabaseConfigured, supabase } from '../lib/supabase';

export default function AdminPainSummaryModal({ isOpen, onClose }) {
  const [diagnostics, setDiagnostics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  
  // Credentials settings
  const [urlInput, setUrlInput] = useState(localStorage.getItem('supabase_url') || '');
  const [keyInput, setKeyInput] = useState(localStorage.getItem('supabase_anon_key') || '');
  const [savedConfigMsg, setSavedConfigMsg] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await getDiagnosticsData();
    setDiagnostics(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Compute Summary Statistics
  const totalSchools = diagnostics.length;
  const avgScore = totalSchools > 0
    ? Math.round(diagnostics.reduce((acc, curr) => acc + Number(curr.score_geral || 0), 0) / totalSchools)
    : 0;

  // Pain counts
  const painCounts = {};
  diagnostics.forEach((item) => {
    const pain = item.principal_dor || 'Não informado';
    painCounts[pain] = (painCounts[pain] || 0) + 1;
  });

  const sortedPains = Object.entries(painCounts)
    .map(([pain, count]) => ({
      pain,
      count,
      percent: totalSchools > 0 ? Math.round((count / totalSchools) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  // Filtered list
  const filtered = diagnostics.filter(item => {
    const term = searchTerm.toLowerCase();
    return (
      (item.escola && item.escola.toLowerCase().includes(term)) ||
      (item.nome_gestor && item.nome_gestor.toLowerCase().includes(term)) ||
      (item.principal_dor && item.principal_dor.toLowerCase().includes(term))
    );
  });

  // Export to CSV
  const handleExportCSV = () => {
    if (diagnostics.length === 0) return;
    const headers = ['Data', 'Escola', 'Gestor', 'Cargo', 'Alunos', 'WhatsApp', 'Score', 'Principal Dor'];
    const rows = diagnostics.map(d => [
      d.created_at ? new Date(d.created_at).toLocaleDateString('pt-BR') : '',
      `"${d.escola || ''}"`,
      `"${d.nome_gestor || ''}"`,
      `"${d.cargo || ''}"`,
      `"${d.faixa_alunos || ''}"`,
      `"${d.whatsapp || ''}"`,
      d.score_geral || '',
      `"${d.principal_dor || ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `resumo_dores_escolas_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveConfig = (e) => {
    e.preventDefault();
    localStorage.setItem('supabase_url', urlInput.trim());
    localStorage.setItem('supabase_anon_key', keyInput.trim());
    setSavedConfigMsg(true);
    setTimeout(() => {
      setSavedConfigMsg(false);
      window.location.reload();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-navy-950">Resumo de Dores Jurídicas das Escolas</h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isSupabaseConfigured
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {isSupabaseConfigured ? '● Supabase Conectado' : '○ Modo Cache Local'}
                </span>
              </div>
              <p className="text-xs text-slate-500">Mapeamento em tempo real dos problemas jurídicos coletados</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="p-2 rounded-lg text-slate-500 hover:text-navy-950 hover:bg-slate-200 text-xs flex items-center gap-1 font-medium"
              title="Configurar Supabase"
            >
              <KeyRound className="w-4 h-4" />
              <span className="hidden sm:inline">Chaves Supabase</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={totalSchools === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Supabase credentials drawer */}
        {showConfig && (
          <div className="p-4 bg-slate-900 text-white border-b border-slate-800 text-xs">
            <h4 className="font-bold mb-2 text-brand-300 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5" />
              Configurar Conexão do Supabase (Nuvem)
            </h4>
            <p className="text-slate-300 mb-3 text-[11px]">
              Insira as credenciais do seu projeto Supabase para salvar e sincronizar todos os diagnósticos automaticamente na nuvem:
            </p>
            <form onSubmit={handleSaveConfig} className="space-y-2.5 max-w-xl">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Project URL (VITE_SUPABASE_URL):</label>
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://exemplo.supabase.co"
                  className="w-full px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Anon / Public API Key (VITE_SUPABASE_ANON_KEY):</label>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="eyJhbGciOiJIUzI1NiIsIn..."
                  className="w-full px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-white text-xs"
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded bg-brand-600 hover:bg-brand-500 font-bold text-white text-xs"
                >
                  Salvar e Conectar
                </button>
                {savedConfigMsg && <span className="text-emerald-400 font-semibold">Salvo com sucesso! Recarregando...</span>}
              </div>
            </form>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Total de Escolas Diagnosticadas
              </span>
              <span className="text-2xl font-black text-navy-950">{totalSchools}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Média do Índice de Segurança
              </span>
              <span className={`text-2xl font-black ${
                avgScore >= 70 ? 'text-emerald-600' : avgScore >= 50 ? 'text-amber-600' : 'text-rose-600'
              }`}>
                {avgScore}<span className="text-sm text-slate-400">/100</span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Principal Queixa Atual
              </span>
              <span className="text-xs font-bold text-navy-950 block truncate">
                {sortedPains[0]?.pain || 'Nenhuma registrada'}
              </span>
            </div>
          </div>

          {/* Pain Points Distribution Ranking */}
          <div className="p-5 rounded-xl border border-slate-200 bg-white">
            <h4 className="text-sm font-bold text-navy-950 mb-4 flex items-center gap-2">
              <span>Ranking das Principais Dores Jurídicas Relatadas:</span>
            </h4>

            {sortedPains.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-4 text-center">
                Ainda não há respostas registradas. Realize o primeiro Check-up para ver os dados agregados aqui.
              </p>
            ) : (
              <div className="space-y-3">
                {sortedPains.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-700">{item.pain}</span>
                      <span className="text-slate-900 font-bold">{item.count} escolas ({item.percent}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-600 rounded-full transition-all"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Diagnosed Schools Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                Lista de Escolas Registradas ({filtered.length})
              </span>
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Buscar por escola ou dor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-brand-600"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              </div>
            </div>

            <div className="overflow-x-auto max-h-60">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/75 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">Escola</th>
                    <th className="p-2.5">Gestor / Cargo</th>
                    <th className="p-2.5">WhatsApp</th>
                    <th className="p-2.5">Score</th>
                    <th className="p-2.5">Principal Dor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-4 text-center text-slate-400 italic">
                        Nenhum registro encontrado.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-2.5 font-semibold text-navy-950">{item.escola}</td>
                        <td className="p-2.5">{item.nome_gestor} <span className="text-slate-400">({item.cargo})</span></td>
                        <td className="p-2.5 font-mono text-[11px]">{item.whatsapp}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            item.score_geral >= 70 ? 'bg-emerald-100 text-emerald-800' :
                            item.score_geral >= 50 ? 'bg-amber-100 text-amber-800' :
                            'bg-rose-100 text-rose-800'
                          }`}>
                            {item.score_geral}/100
                          </span>
                        </td>
                        <td className="p-2.5 text-slate-600">{item.principal_dor}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
