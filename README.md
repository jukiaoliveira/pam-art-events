# Pam Art Events ✨

O Pam Art Events é um conceito de e-commerce e catálogo dinâmico focado em decoração e cenários para eventos. A aplicação substitui formulários estáticos e frios por uma experiência digital interativa, onde o cliente monta o seu visual passo a passo e envia o pedido customizado direto para o WhatsApp.

Desenvolvido como um projeto prático para consolidar meus conhecimentos de front-end após concluir minha graduação em Análise e Desenvolvimento de Sistemas (ADS), o objetivo principal foi unir uma arquitetura de código limpa com uma interface editorial, minimalista e de alta costura visual.

## 🚀 Funcionalidades
- **Filtro Preditivo & Seleção por Categoria:** Um sistema de busca utilizando `Autocomplete` combinado com cards reativos que alteram o input instantaneamente, otimizando a escolha do tema da festa.
- **Catálogo de Itens Simétrico:** Um feed visual inspirado no Instagram que força uma proporção de caixa fixa (`1:1`), garantindo a organização visual dos cards de peças independentemente do tamanho das imagens originais.
- **Resumo Final Estilo "Invoice":** Um modal de revisão expandido, minimalista e de alto contraste, com totalizador destacado em bloco preto absoluto e payload tratado nativamente para a API do WhatsApp.
- **Layout Imersivo (Full-Bleed):** Controle rígido de seções em `100vh` para evitar quebras visuais e garantir impacto estético de tela cheia em qualquer tamanho de monitor.

## 🛠️ Stack Tecnológica
- **React:** Construção de uma Single Page Application (SPA) modular e componentizada.
- **TypeScript:** Tipagem forte (`interfaces` estritas de Itens e Quantidades) para garantir segurança e escalabilidade no código.
- **Material UI (MUI v5):** Utilizado para toda a base de componentes estruturais, estilizados e customizados via propriedade `sx` para fugir do padrão genérico.
- **React Context API:** Escolhida para o gerenciamento de estado global do tema selecionado, desacoplando a lógica das barreiras visuais das páginas.

## 🧠 Aprendizados e Próximos Passos
Este projeto foi um excelente laboratório para aprimorar minha visão sobre design de interface de alto padrão (UI/UX) focado em marcas premium. Consegui evoluir significativamente na manipulação de estados globais nativos do React e na resolução de problemas complexos de viewport e scroll displacements.

**O que pretendo implementar no futuro:**
- [ ] Criar um painel administrativo (CMS) para que o administrador possa cadastrar novas fotos e temas em tempo real.
- [ ] Implementar micro-animações fluidas na transição das etapas utilizando Framer Motion.
- [ ] Adicionar um sistema de agendamento integrado para verificar a disponibilidade de datas na API.

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/jukiaoliveira/pam-art-events.git](https://github.com/jukiaoliveira/pam-art-events.git)

2. Acesse a pasta do projeto:
    ```bash
    cd pam-art-events

3. Instale as dependências:
    ```bash
    npm install

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev

Foco na evolução contínua por Julia!
