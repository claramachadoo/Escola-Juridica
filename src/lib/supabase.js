import { createClient } from '@supabase/supabase-js';

// Suporta VITE_SUPABASE_KEY (publishable key) ou VITE_SUPABASE_ANON_KEY (legacy)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('supabase_url') || '';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  localStorage.getItem('supabase_anon_key') ||
  '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Salva o diagnóstico da escola no Supabase (com fallback seguro em localStorage)
 */
export async function saveDiagnostic(payload) {
  const record = {
    nome_gestor: payload.name,
    escola: payload.schoolName,
    cargo: payload.role,
    faixa_alunos: payload.studentCount,
    whatsapp: payload.whatsapp,
    principal_dor: payload.mainConcern,
    score_geral: payload.score,
    riscos_imediatos: payload.immediateRisks || [],
    pontos_atencao: payload.attentionPoints || [],
    pontos_adequados: payload.adequatePoints || [],
    respostas: payload.answers || {},
    origem: 'Geedu Connect / Web',
    created_at: new Date().toISOString(),
  };

  // Armazena localmente como cache garantido
  try {
    const existing = JSON.parse(localStorage.getItem('diagnosticos_cache') || '[]');
    existing.unshift({ id: 'local_' + Date.now(), ...record });
    localStorage.setItem('diagnosticos_cache', JSON.stringify(existing));
  } catch (err) {
    console.warn('Erro ao salvar no cache local:', err);
  }

  // Se Supabase configurado, persiste no banco de dados
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('diagnosticos_escola')
        .insert([record])
        .select();

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        return { success: false, error, localCached: true };
      }

      return { success: true, data, localCached: true };
    } catch (err) {
      console.error('Exceção ao comunicar com Supabase:', err);
      return { success: false, error: err, localCached: true };
    }
  }

  return { success: true, localCached: true, note: 'Salvo em cache local (configure o Supabase para sincronizar em nuvem)' };
}

/**
 * Busca todos os diagnósticos para o Resumo Analítico de Dores
 */
export async function getDiagnosticsData() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('diagnosticos_escola')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data;
      }
    } catch (err) {
      console.warn('Falha ao buscar no Supabase, usando cache local:', err);
    }
  }

  // Fallback cache local
  try {
    return JSON.parse(localStorage.getItem('diagnosticos_cache') || '[]');
  } catch (e) {
    return [];
  }
}
