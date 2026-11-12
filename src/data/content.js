import {
  BarChart3,
  Blocks,
  ClipboardList,
  Compass,
  Gauge,
  GraduationCap,
  Layers,
  LifeBuoy,
  MessagesSquare,
  Puzzle,
  Rocket,
  Smartphone,
  TrendingUp,
  User,
  Users,
  Workflow,
} from 'lucide-react'

export const brand = {
  name: 'ROCHA',
  suffix: '.dev',
  owner: 'Pedro Cesar Rocha',
  tagline: 'Software com base sólida para negócios que querem crescer.',
  contactEmail: 'pedryrk07@gmail.com',
}

export const hero = {
  titleTop: 'Código pensado para',
  titleHighlight: 'negócios que crescem',
  subtitle:
    'Crio sistemas web, automações e painéis sob medida, com foco em resolver o problema certo e entregar valor desde a primeira versão.',
  primaryCta: { label: 'Vamos conversar', href: '#contato' },
  secondaryCta: { label: 'Ver serviços', href: '#servicos' },
}

export const challenges = {
  titleTop: 'Onde muitos projetos',
  titleHighlight: 'travam no caminho',
  subtitle:
    'Pequenas e médias empresas costumam esbarrar nos mesmos obstáculos quando tentam levar a operação para o digital. Meu trabalho começa exatamente nesses pontos.',
  items: [
    {
      icon: Compass,
      title: 'Ideia sem plano?',
      text: 'O projeto existe na cabeça, mas falta transformar a visão em escopo, prioridades e um caminho claro até o lançamento.',
    },
    {
      icon: Puzzle,
      title: 'Ferramenta que não encaixa?',
      text: 'Sistemas prontos que obrigam a empresa a se adaptar a eles, gerando planilhas paralelas, retrabalho e custo escondido.',
    },
    {
      icon: Gauge,
      title: 'Pressa por resultado?',
      text: 'O mercado não espera. É preciso validar rápido, ajustar com base no uso real e evoluir sem recomeçar do zero.',
    },
  ],
}

export const method = {
  acronym: 'BASE',
  title: 'Como cada projeto acontece',
  subtitle:
    'Todo projeto passa pelas mesmas quatro etapas. Assim você sabe o que está acontecendo, o que vem a seguir e por que cada decisão foi tomada.',
  items: [
    {
      letter: 'B',
      icon: ClipboardList,
      title: 'Briefing',
      text: 'Entendo o negócio, o público e o problema antes de escrever qualquer linha de código. O objetivo vira escopo concreto.',
    },
    {
      letter: 'A',
      icon: Layers,
      title: 'Arquitetura',
      text: 'Defino tecnologias, estrutura de dados e fluxos pensando em manutenção simples e espaço para crescer.',
    },
    {
      letter: 'S',
      icon: Workflow,
      title: 'Sprints',
      text: 'Entregas curtas e frequentes, cada uma revisada com você. Os ajustes acontecem durante o processo, não no final.',
    },
    {
      letter: 'E',
      icon: Rocket,
      title: 'Evolução',
      text: 'Depois do lançamento, acompanho métricas e uso real para orientar as próximas melhorias do produto.',
    },
  ],
}

export const services = {
  title: 'Serviços',
  subtitle:
    'Soluções digitais completas, do planejamento ao suporte, construídas em torno da rotina e dos objetivos do seu negócio.',
  items: [
    {
      icon: Smartphone,
      title: 'Sistemas Web e Apps',
      text: 'Plataformas, painéis administrativos e aplicativos construídos do zero, com interface responsiva e código organizado.',
    },
    {
      icon: Blocks,
      title: 'Integrações e Automações',
      text: 'Conexão entre APIs e ferramentas que você já usa, eliminando tarefas manuais repetitivas e erros de digitação.',
    },
    {
      icon: BarChart3,
      title: 'Painéis de Dados',
      text: 'Dashboards que reúnem os números importantes em um só lugar e deixam claro o que está funcionando.',
    },
    {
      icon: LifeBuoy,
      title: 'Manutenção e Suporte',
      text: 'Correções, atualizações e melhorias contínuas para manter tudo estável, seguro e rápido ao longo do tempo.',
    },
  ],
}

export const differentials = {
  titleTop: 'Por que trabalhar com a',
  subtitle:
    'Em vez de pacotes genéricos, cada projeto recebe atenção direta, comunicação aberta e foco no resultado que importa para você.',
  items: [
    {
      icon: Rocket,
      title: 'Entrega contínua',
      text: 'Versões funcionais desde as primeiras semanas, para você testar e opinar cedo.',
    },
    {
      icon: Puzzle,
      title: 'Feito sob medida',
      text: 'Nada de modelo engessado. A solução se molda ao seu processo, e não o contrário.',
    },
    {
      icon: MessagesSquare,
      title: 'Comunicação direta',
      text: 'Você fala com quem desenvolve. Sem jargão, com status claro a cada etapa.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em resultado',
      text: 'Cada funcionalidade existe para gerar economia, receita ou agilidade mensurável.',
    },
  ],
}

export const about = {
  titleTop: 'Quem está por trás da',
  cards: [
    { icon: User, title: 'Desenvolvedor', text: 'Pedro Cesar Rocha' },
    { icon: GraduationCap, title: 'Formação', text: 'Sistemas de Informação' },
    { icon: Users, title: 'Parcerias', text: 'Design, dados e infraestrutura' },
  ],
  paragraphs: [
    'Sou Pedro Cesar Rocha, desenvolvedor e estudante de Sistemas de Informação. Gosto de entender como uma empresa funciona por dentro antes de propor qualquer solução, porque software bom é aquele que se encaixa na rotina de quem usa.',
    'Para projetos maiores, conto com parceiros de confiança em design, análise de dados e infraestrutura, mantendo um único ponto de contato e a mesma qualidade do início ao fim.',
  ],
}

export const contact = {
  titleTop: 'Tem um projeto em mente?',
  titleHighlight: 'Vamos tirar do papel',
  quote:
    'Toda solução sólida começa com uma boa conversa sobre o problema que precisa ser resolvido.',
  mission:
    'Conte o que você precisa, mesmo que ainda seja só uma ideia. Respondo com os próximos passos e uma visão clara de como podemos começar.',
  note: 'Retorno em até 2 dias úteis.',
  button: 'Enviar mensagem',
}
