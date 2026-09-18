# Programa Escola Jurídica — Gestão Jurídica Preventiva para Instituições de Ensino

Projeto de Landing Page e Ferramenta Interativa de Diagnóstico desenvolvido com posicionamento executivo de alto padrão para o **Geedu Connect** (e campanhas contínuas de captação escolar).

---

## 🎯 Posicionamento & Proposta de Valor

- **Não vendemos "assessoria jurídica tradicional" ou "horas de advogado":** Vendemos **previsibilidade, organização e redução de risco para a gestão escolar**.
- **Promessa Comercial:** *"Organizamos juridicamente a sua escola para reduzir conflitos com famílias, colaboradores e órgãos de fiscalização antes que eles se transformem em processos."*
- **Tese Central:** *"O maior risco jurídico de uma escola normalmente não começa no processo. Começa em uma decisão cotidiana mal documentada."*
- **Mote:** *"Reduzir decisões juridicamente improvisadas."*

---

## 🚀 Funcionalidades & Arquitetura

1. **Check-up Jurídico Escolar de 2 Minutos (Ferramenta Interativa):**
   - 8 perguntas calibradas sobre contratos, bullying/cyberbullying (Lei 14.811/24), pais separados e guarda, uso de imagem e ECA Digital, protocolo de acidentes (Lei Lucas), registros e atas probatórias, inclusão e PCD (LBI), e consulta preventiva pré-decisão.
   - Cálculo automático em tempo real do **Índice de Segurança Jurídica Escolar (0 a 100)**.
   - Diagnóstico em semáforo:
     - 🔴 **Risco Imediato**
     - 🟡 **Ponto de Atenção**
     - 🟢 **Adequado**
   - Form de qualificação do lead (Nome, Escola, Cargo, Faixa de Alunos, WhatsApp e Principal Dor Jurídica).
   - Geração dinâmica de link do WhatsApp com mensagem pré-formatada com o score e a dor do gestor pronta para envio ao escritório.

2. **Entregável Tangível (Mapa de Riscos + Plano 30/60/90 Dias):**
   - Apresentação visual de como funciona a devolutiva e a priorização das correções.

3. **Os 4 Pilares da Prevenção:**
   - Governança Documental
   - Gestão de Conflitos
   - Compliance Educacional & ECA Digital
   - Treinamento Contínuo da Equipe

4. **Escada de Soluções Recorrentes:**
   - **Escola Essencial:** Base documental e suporte cotidiano.
   - **Escola Protegida:** Protocolos, mediações e treinamentos semestrais.
   - **Escola 360:** Governança institucional integrada e comitê de incidentes graves.

5. **Modo Stand & QR Code (Kiosk Mode):**
   - Modal com QR Code pronto para ser escaneado no stand do evento pelos visitantes.
   - Roteiro de abordagem rápida (3 a 5 minutos) para a equipe de promotores/advogados no evento (Conexão &rarr; Problema &rarr; Impacto &rarr; Solução &rarr; CTA).

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite 6** (SPA rápida e moderna)
- **Tailwind CSS** com design tokens corporativos
- **Lucide React** (iconografia elegante sem clichês jurídicos)
- **Canvas Confetti** (microinteração celebratória na exibição do score)
- **Versão Standalone (standalone.html):** Arquivo único autônomo sem dependências locais, pronto para abrir com 2 cliques em qualquer navegador ou tablet.

---

## 💻 Como Rodar o Projeto

### Opção 1: Desenvolvimento Local (Vite)
```bash
# Entrar na pasta do projeto
cd /Users/claramachado/.gemini/antigravity/scratch/escola-juridica

# Iniciar o servidor de desenvolvimento
npm run dev
```
O projeto estará disponível em `http://localhost:3000`.

### Opção 2: Build para Produção
```bash
npm run build
npm run preview
```
A pasta otimizada `dist/` está pronta para deploy direto na Vercel, Netlify ou Cloudflare Pages.

### Opção 3: Uso Direto do Arquivo Standalone
Basta abrir o arquivo `standalone.html` diretamente em qualquer navegador (Chrome, Safari, Edge, Firefox) ou carregar no tablet/iPad do stand.

---

## 📱 Como Configurar o Número do WhatsApp

No arquivo `src/components/DiagnosticQuiz.jsx` (ou em `standalone.html`), basta alterar o parâmetro `whatsappNumber`:
```javascript
// Exemplo: DDD + Telefone (com código do país 55)
whatsappNumber = "5579999999999"
```
