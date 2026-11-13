# ROCHA.dev — Portfólio

Portfólio de **Pedro Cesar Rocha**: página única (one-page) apresentando serviços de desenvolvimento de sistemas web, automações e painéis de dados.

Visual inspirado em terminal: barra de abas estilo tmux, cards como janelas de terminal, fonte JetBrains Mono e rodapé como barra de status do vim.

Feito com **React 19 + Vite**, CSS puro, ícones do [lucide-react](https://lucide.dev) e fonte self-hosted via [@fontsource](https://fontsource.org).

## Seções

| Seção | Componente | Conteúdo |
| --- | --- | --- |
| Barra superior | `Nav.jsx` | Abas estilo tmux que destacam a seção visível, com relógio |
| Hero | `Hero.jsx` | Janela de terminal com `whoami`, título digitado com cursor e chuva de código no fundo (`CodeRain.jsx`) |
| Desafios | `Challenges.jsx` | 3 janelas `.md` com problemas comuns de PMEs |
| Método | `Method.jsx` | Método **BASE** em 4 janelas `step_0X.sh`, com letra vazada e barra de progresso |
| Serviços | `Services.jsx` | Uma janela no formato `ls -l` com os 4 serviços |
| Diferenciais | `Differentials.jsx` | 4 "testes" com selo PASS |
| Sobre | `About.jsx` | Card no estilo `neofetch` + `sobre.txt` |
| Contato | `Contact.jsx` | Formulário com validação e máscara de telefone (abre o email do visitante já preenchido) |
| Rodapé | `Footer.jsx` | Barra de status do vim |

Componentes base: `Window.jsx` (janela de terminal), `Prompt.jsx` (linha `pedro@rocha:~$`), `SectionHeader.jsx` e `Reveal.jsx`.

## Editando os textos

Todo o conteúdo da página fica em [`src/data/content.js`](src/data/content.js): títulos, descrições, ícones dos cards e o email que recebe as mensagens do formulário (`brand.contactEmail`). Os componentes só leem esse arquivo, então dá para trocar qualquer texto sem mexer no JSX.

## Estrutura

```
src/
├── components/     # um componente por seção (JSX + CSS)
├── data/content.js # textos e ícones
├── hooks/          # useReveal (animação ao rolar) e useTypewriter
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
