-- ==============================================================================
-- SCHEMA SUPABASE: ESCOLA JURÍDICA (GEEDU CONNECT)
-- Tabela para centralizar os diagnósticos e o resumo das dores jurídicas escolares
-- ==============================================================================

-- 1. Criação da tabela principal
CREATE TABLE IF NOT EXISTS public.diagnosticos_escola (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  nome_gestor TEXT NOT NULL,
  escola TEXT NOT NULL,
  cargo TEXT,
  faixa_alunos TEXT,
  whatsapp TEXT,
  principal_dor TEXT,
  score_geral NUMERIC(5,2),
  riscos_imediatos JSONB DEFAULT '[]'::jsonb,
  pontos_atencao JSONB DEFAULT '[]'::jsonb,
  pontos_adequados JSONB DEFAULT '[]'::jsonb,
  respostas JSONB DEFAULT '{}'::jsonb,
  origem TEXT DEFAULT 'Geedu Connect / Web'
);

-- 2. Índices para consultas rápidas no resumo analítico
CREATE INDEX IF NOT EXISTS idx_diagnosticos_principal_dor ON public.diagnosticos_escola(principal_dor);
CREATE INDEX IF NOT EXISTS idx_diagnosticos_score ON public.diagnosticos_escola(score_geral);
CREATE INDEX IF NOT EXISTS idx_diagnosticos_created_at ON public.diagnosticos_escola(created_at DESC);

-- 3. Habilita Row Level Security (RLS)
ALTER TABLE public.diagnosticos_escola ENABLE ROW LEVEL SECURITY;

-- 4. Permissões de inserção pública (para visitantes responderem ao check-up)
CREATE POLICY "Permitir inserção de diagnósticos para todos" 
  ON public.diagnosticos_escola
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- 5. Permissão de leitura dos diagnósticos (para visualização no dashboard)
CREATE POLICY "Permitir leitura de diagnósticos" 
  ON public.diagnosticos_escola
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- 6. Comentários para documentação das colunas
COMMENT ON TABLE public.diagnosticos_escola IS 'Registros do Check-up Jurídico Escolar e mapeamento de dores da gestão';
COMMENT ON COLUMN public.diagnosticos_escola.principal_dor IS 'Principal queixa/insegurança jurídica apontada pelo gestor';
COMMENT ON COLUMN public.diagnosticos_escola.score_geral IS 'Índice de Segurança Jurídica calculado de 0 a 100';
