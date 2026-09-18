export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 1,
    title: "1. Atualização Contratual e Matrículas",
    question: "O contrato de prestação de serviços educacionais da sua escola foi revisado formalmente nos últimos 12 meses?",
    hint: "Contratos desatualizados costumam ser o primeiro ponto de derrota em cobranças de inadimplência e questionamentos perante o Procon ou juizados especiais.",
    category: "Governança Documental",
    options: [
      {
        label: "Sim, revisado recentemente com cláusulas específicas de inadimplência, rescisão e novas diretrizes.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Revisamos pontualmente alguns valores, mas a estrutura jurídica é a mesma há anos.",
        points: 5,
        status: "attention",
        alert: "Risco de cláusulas abusivas ou ineficazes perante a jurisprudência recente dos tribunais.",
      },
      {
        label: "Não foi revisado recentemente ou utilizamos um modelo padrão não validado por especialista educacional.",
        points: 0,
        status: "risk",
        alert: "Vulnerabilidade imediata em recuperação de mensalidades e responsabilização civil contratual.",
      },
    ],
  },
  {
    id: 2,
    title: "2. Protocolos de Bullying, Cyberbullying e Convivência",
    question: "A escola possui protocolo formal escrito, com fluxo de apuração e registros para situações de bullying e cyberbullying?",
    hint: "A Lei 13.185/2015 e a recente Lei 14.811/2024 tornam mandatória a política ativa de prevenção e tipificam o bullying/cyberbullying no Código Penal.",
    category: "Compliance Educacional & ECA",
    options: [
      {
        label: "Sim, temos protocolo com etapas de acolhimento, apuração, ata formal e acompanhamento pedagógico documentado.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Intervimos quando o fato ocorre, mas não temos um protocolo documentado com fluxos pré-definidos.",
        points: 4,
        status: "attention",
        alert: "A atuação reativa sem fluxo probatório expõe a escola à alegação de omissão perante o Ministério Público e famílias.",
      },
      {
        label: "Não temos protocolo estruturado nem registros padronizados para esses incidentes.",
        points: 0,
        status: "risk",
        alert: "Risco imediato de dano moral coletivo e responsabilização civil objetiva da instituição de ensino.",
      },
    ],
  },
  {
    id: 3,
    title: "3. Relações com Famílias e Pais Separados",
    question: "Sua equipe de secretaria e coordenação sabe exatamente como agir diante de divergências de pais separados e autorização de retirada?",
    hint: "Conflitos de guarda, solicitações de bloqueio de retirada e pedidos unilaterais de informações são fontes diárias de atrito que geram riscos graves.",
    category: "Gestão de Conflitos",
    options: [
      {
        label: "Sim, exigimos cópia da decisão judicial/acordo de guarda no cadastro e a equipe segue procedimento jurídico padronizado.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "A equipe resolve no bom senso em cada caso, mas às vezes surgem impasses tensos e dúvidas.",
        points: 5,
        status: "attention",
        alert: "O 'bom senso' não protege a escola contra acusações de descumprimento de ordem judicial ou alienação parental.",
      },
      {
        label: "Não há procedimento formal: já tivemos conflitos na portaria ou pedidos conflitantes sem respaldo documental.",
        points: 0,
        status: "risk",
        alert: "Exposição a medidas policiais, pedidos de tutela de urgência e danos morais por retenção ou entrega indevida.",
      },
    ],
  },
  {
    id: 4,
    title: "4. Uso de Imagem, Proteção de Dados e ECA Digital",
    question: "Existem regras e termos documentados específicos para captura, uso de imagem e tratamento de dados de alunos nas redes e sistemas?",
    hint: "O ECA Digital e a LGPD exigem consentimento qualificado dos responsáveis e salvaguardas rígidas para crianças e adolescentes no ambiente digital.",
    category: "ECA Digital & Governança de Dados",
    options: [
      {
        label: "Sim, termos destacados específicos de imagem e dados, com política de conformidade para fotos de eventos e redes sociais.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Temos uma cláusula genérica no próprio contrato de matrícula, mas não auditamos o que é postado na prática.",
        points: 5,
        status: "attention",
        alert: "Cláusulas genéricas de 'cessão global de imagem' vêm sendo sistematicamente anuladas pelos tribunais quando há desacordo familiar.",
      },
      {
        label: "Não temos termos específicos de proteção de dados ou autorização formal atualizada dos responsáveis.",
        points: 0,
        status: "risk",
        alert: "Vulnerabilidade perante a ANPD, Notificações Extrajudiciais e ações indenizatórias por violação de privacidade de menores.",
      },
    ],
  },
  {
    id: 5,
    title: "5. Acidentes Escolares e Ocorrências Médicas",
    question: "A escola possui um protocolo jurídico-operacional escrito para acidentes no pátio/sala de aula e administração de medicamentos?",
    hint: "A Lei Lucas (Lei 13.722/2018) e a responsabilidade objetiva da escola exigem cadeia de custódia documental impecável em casos de socorro.",
    category: "Segurança Institucional & Lei Lucas",
    options: [
      {
        label: "Sim, equipe capacitada, termo formal de autorização médica para remédios e formulário obrigatório de ocorrência de acidente.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Temos primeiros socorros, mas o registro da ocorrência e a comunicação com a família são informais (WhatsApp/ligação).",
        points: 5,
        status: "attention",
        alert: "Comunicações informais sem assinatura do responsável impedem comprovar que a escola prestou o socorro adequado no tempo certo.",
      },
      {
        label: "Não temos protocolo formalizado ou registros escritos padronizados de incidentes físicos.",
        points: 0,
        status: "risk",
        alert: "Risco de ações de reparação civil por suposta negligência com ônus da prova atribuído integralmente à escola.",
      },
    ],
  },
  {
    id: 6,
    title: "6. Registro e Gestão Probatória com Famílias",
    question: "A coordenação pedagógica e a direção registram formalmente em atas assinadas as reuniões delicadas e conflitos com pais?",
    hint: "Em juízo ou perante o Conselho Tutelar, mensagens de WhatsApp soltas e conversas verbais não constituem linha de defesa sólida.",
    category: "Governança Documental",
    options: [
      {
        label: "Sim, sempre confeccionamos ata de alinhamento com termo de ciência e assinatura dos participantes.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Registramos apenas as situações mais graves; o restante fica em anotações internas ou conversas de WhatsApp.",
        points: 5,
        status: "attention",
        alert: "Mensagens informais muitas vezes são descontextualizadas pelos pais em eventuais litígios contra a escola.",
      },
      {
        label: "Raramente colhemos assinaturas em atas; a comunicação com as famílias é quase toda verbal ou por mensagem.",
        points: 0,
        status: "risk",
        alert: "Impossibilidade de demonstrar que a escola orientou, advertiu ou ofereceu alternativas pedagógicas antes do conflito explodir.",
      },
    ],
  },
  {
    id: 7,
    title: "7. Inclusão Escolar e Alunos com Deficiência (PCD)",
    question: "A escola possui procedimento jurídico para gestão de laudos, Plano de Ensino Individualizado (PEI) e cobranças adicionais?",
    hint: "A Lei Brasileira de Inclusão (Lei 13.146/2015) proíbe taxas extras e pune recusa de matrícula ou omissão pedagógica com sanções severas.",
    category: "Compliance Educacional & Inclusão",
    options: [
      {
        label: "Sim, procedimentos alinhados à LBI, acolhimento de laudos com protocolo formal e PEI juridicamente resguardado.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Fazemos as adaptações pedagógicas, mas há insegurança quanto a prazos, limites de profissionais de apoio e limites legais.",
        points: 5,
        status: "attention",
        alert: "Incerteza na formalização gera atritos contínuos com famílias e risco de denúncias ao Ministério Público da Educação.",
      },
      {
        label: "Não possuímos protocolo jurídico para inclusão; cada caso é tratado sem orientação preventiva especializada.",
        points: 0,
        status: "risk",
        alert: "Risco de multas administrativas gravíssimas, inquéritos civis e processos judiciais com repercussão pública negativa.",
      },
    ],
  },
  {
    id: 8,
    title: "8. Consulta Preventiva em Decisões Sensíveis",
    question: "Antes de decisões críticas (desligamento de aluno, advertência a professor ou resposta a notificações), a escola consulta o jurídico preventivamente?",
    hint: "Mais de 80% das condenações judiciais contra escolas ocorrem por decisões impulsivas tomadas no calor do momento.",
    category: "Cultura Jurídica Preventiva",
    options: [
      {
        label: "Sim, decisões sensíveis sempre passam por validação prévia de risco antes de qualquer comunicação formal.",
        points: 12.5,
        status: "adequate",
      },
      {
        label: "Temos advogado, mas normalmente só acionamos depois que a decisão foi tomada ou quando a notificação/processo chega.",
        points: 4,
        status: "attention",
        alert: "Quando o advogado é acionado após o fato consumado, ele atua como 'bombeiro', com opções limitadas de defesa probatória.",
      },
      {
        label: "Não temos suporte jurídico preventivo; a direção decide internamente e só busca advogado se for intimada em juízo.",
        points: 0,
        status: "risk",
        alert: "A escola opera sob constante insegurança jurídica invisível, aguardando o surgimento do litígio.",
      },
    ],
  },
];

export const STUDENT_BRACKETS = [
  "Até 200 alunos",
  "201 a 500 alunos",
  "501 a 1.000 alunos",
  "Mais de 1.000 alunos",
];

export const ROLES = [
  "Mantenedor(a) / Proprietário(a)",
  "Diretor(a) Geral",
  "Coordenador(a) Pedagógico(a)",
  "Coordenador(a) Financeiro(a) / Administrativo(a)",
  "Outro cargo de gestão",
];

export const LEGAL_CONCERNS = [
  "Conflitos com famílias e pais separados",
  "Cobrança e gestão da inadimplência",
  "Inclusão de alunos PCD e exigências de mediadores",
  "Bullying, cyberbullying e segurança escolar",
  "Adequação ao ECA Digital e proteção de dados (LGPD)",
  "Relações trabalhistas com professores e colaboradores",
  "Contratos e termos de matrícula desatualizados",
  "Decisões sensíveis e desdobramentos disciplinares",
];
