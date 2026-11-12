# ROCHA.dev — Portfólio

Portfólio de **Pedro Cesar Rocha**: página única (one-page) apresentando serviços de desenvolvimento de sistemas web, automações e painéis de dados.

Feito com **React 19 + Vite**, CSS puro e ícones do [lucide-react](https://lucide.dev).

## Seções

| Seção | Componente | Conteúdo |
| --- | --- | --- |
| Hero | `Hero.jsx` | Marca, título com destaque, chamada e botões, fundo com rede de partículas em canvas |
| Desafios | `Challenges.jsx` | 3 cards com problemas comuns de PMEs |
| Método | `Method.jsx` | Método **BASE** (Briefing, Arquitetura, Sprints, Evolução) com a letra em destaque no card |
| Serviços | `Services.jsx` | Grade 2×2 de serviços |
| Diferenciais | `Differentials.jsx` | 4 cards com ícone circular |
| Sobre | `About.jsx` | Cards de perfil + bio |
| Contato | `Contact.jsx` | Formulário com validação e máscara de telefone (abre o email do visitante já preenchido) |
| Rodapé | `Footer.jsx` | Logo e copyright |

## Editando os textos

Todo o conteúdo da página fica em [`src/data/content.js`](src/data/content.js): títulos, descrições, ícones dos cards e o email que recebe as mensagens do formulário (`brand.contactEmail`). Os componentes só leem esse arquivo, então dá para trocar qualquer texto sem mexer no JSX.

## Estrutura

```
src/
├── components/     # um componente por seção (JSX + CSS)
├── data/content.js # textos e ícones
├── hooks/          # useReveal (animação ao rolar)
├── index.css       # tema, cards, botões e utilitários globais
├── App.jsx
└── main.jsx
```

## Rodando

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # serve o build localmente
npm run lint     # oxlint
```
