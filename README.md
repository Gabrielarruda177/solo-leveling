# ⚔️ SOLO LEVELING — FAN SITE & SYSTEM ARCHIVE 🌌

> **"ERGA-SE"** — De Caçador Rank E ao Lendário Monarca das Sombras.  
> Uma experiência web imersiva de alta performance inspirada na interface do Sistema de *Solo Leveling*.

---

## 📑 Índice

- [Visão Geral](#-visão-geral)
- [Demonstração das Páginas](#-demonstração-das-páginas)
- [Design System & Estética Cyber-Sombra](#-design-system--estética-cyber-sombra)
- [Banco de Dados de Personagens](#-banco-de-dados-de-personagens)
- [O Sistema do Monarca (HUD & Interatividade)](#-o-sistema-do-monarca-hud--interatividade)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Histórico de Melhorias & Changelog](#-histórico-de-melhorias--changelog)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar Localmente](#-como-executar-localmente)
- [Créditos e Direitos](#-créditos-e-direitos)

---

## 🌟 Visão Geral

Este projeto é uma homenagem visual e interativa completa ao universo de **Solo Leveling** (obra de *Chugong*, arte por *DUBU/REDICE STUDIO* e animação pela *A-1 Pictures*). 

A aplicação foi desenvolvida do zero para recriar as telas holográficas do **"Sistema"**, unindo tipografia futurista, efeitos de partículas, scanlines retrô-cibernéticas, iluminação neon azul/púrpura e animações fluidas sem a necessidade de frameworks pesados.

---

## 🖥️ Demonstração das Páginas

### 1. 🏠 Início / Home (`index.html`)
- **Hero Section Dinâmico**: Tipografia imponente com efeito glow, badges de gênero e chamada para ação rápida.
- **Card de Notificação do Sistema**: Status ao vivo de Sung Jin-Woo (Nível 146, Monarca das Sombras, Rank S).
- **Contador Estatístico Animado**: Contagem com incremento automático para temporadas, episódios, ano de estreia e estúdio.
- **Linha do Tempo / Lore**: Arcos narrativos desde o *Dungeon Duplo* até a *Guerra dos Monarcas*.
- **Hub de Mídia & Onde Assistir**: Links e cards de plataformas (Crunchyroll, Netflix).

### 2. 👥 Galeria de Personagens (`personagens.html`)
- **Filtro de Categorias Instantâneo**: Filtragem por `Todos`, `Protagonistas`, `Antagonistas`, `Caçadores`, `Sombras` e `Monarcas`.
- **Rankings Oficiais**: Badges estilizados para Ranks `E`, `D`, `C`, `B`, `A`, `S`, `Nacional` e `Monarca`.
- **Card Stats RPG**: Exibição de Força (FOR), Agilidade (AGI), Vitalidade (VIT) e classe de combate de cada figura.
- **Aura e Glow Reativo**: Hover cards 3D com brilho dinâmico condizente com a facção do personagem.

### 3. 👑 Central do Monarca — Sung Jin-Woo (`sung-jin-woo.html`)
- **Sidebar Interativa**: Navegação fluida entre tópicos essenciais:
  1. *Perfil & Origem*
  2. *Atributos & Status RPG*
  3. *Habilidades & Runas Ativas*
  4. *Exército de Sombras (Igris, Beru, Tusk, Kamish, Iron)*
  5. *Arsenal & Adagas Mágicas*
- **Entrar no Sistema (HUD Modal)**: Interface holográfica idêntica à do manhwa com atributos detalhados (HP, MP, Fadiga, Inteligência, Sentido), missões diárias e penalidades.
- **Troca Dinâmica de Arte**: Transições com parallax e atualização de imagens de acordo com a aba selecionada.

### 4. 📜 Registro do Sistema & Changelog (`guia-sistema.html`)
- **Documentação de Sistema**: Visão geral de todas as regras, patentes de caçadores, tipos de portais (Azul, Vermelho, Dungeon Duplo).
- **Painel de Atualizações**: Registro cronológico de todas as melhorias e novidades implementadas no portal.

---

## 🎨 Design System & Estética Cyber-Sombra

O projeto adota uma paleta personalizada de alta fidelidade baseada nas cores do mana e das sombras:

```css
:root {
  /* Cores Principais */
  --c-bg:           #03070b;                 /* Fundo Abissal */
  --c-surface:      rgba(4, 10, 16, 0.82);   /* Glassmorphism Escuro */
  --c-cyan:         #00c8ff;                 /* Azul Mana / Sistema */
  --c-cyan-glow:    rgba(0, 200, 255, 0.35); /* Brilho Holográfico */
  --c-purple:       #8b5cf6;                 /* Púrpura Monarca das Sombras */
  --c-red:          #ff0040;                 /* Vermelho Perigo / Penalidade */
  --c-gold:         #ffd700;                 /* Dourado Rank Nacional */

  /* Tipografia */
  --f-display:      'Orbitron', sans-serif;  /* Títulos e HUDs */
  --f-body:         'Rajdhani', sans-serif;  /* Textos de leitura e stats */
  --f-ui:           'Inter', sans-serif;     /* Elementos de navegação */
}
```

### Efeitos Visuais Incorporados:
- ✨ **Scanlines CRT Holográficas**: Linhas de varredura suaves simulando terminal do Sistema.
- 🌌 **Partículas Flutuantes de Mana**: Background com partículas em constante animação.
- 💎 **Glassmorphism com Backdrop-Filter**: Painéis translúcidos com bordas luminescentes.
- ⚡ **Hover Micro-Animations**: Resposta tátil ao passar o cursor em botões, links e cards.

---

## 🛡️ Banco de Dados de Personagens

| Personagem | Categoria | Rank / Título | Especialidade |
| :--- | :--- | :--- | :--- |
| **Sung Jin-Woo** | Protagonista | Rank S / Monarca | Monarca das Sombras / Extração de Almas |
| **Cha Hae-In** | Caçadora | Rank S | Mestre Espadachim / Dança das Espadas |
| **Sung Su-Ho** | Protagonista | Sucessor | Príncipe das Sombras (*Ragnarok*) |
| **Choi Jong-In** | Caçador | Rank S | O Mago Supremo de Chamas / Líder Hunters Guild |
| **Baek Yoon-Ho** | Caçador | Rank S | Transformação em Tigre Branco / Líder White Tiger |
| **Thomas Andre** | Caçador | Nível Nacional | Monarca Golias / Autoridade do Governante (EUA) |
| **Goto Ryuji** | Caçador | Rank S | Mestre Espadachim do Japão (Draw Sword Guild) |
| **Antares** | Antagonista | Monarca | Monarca da Destruição / Rei dos Dragões |
| **O Arquiteto** | Antagonista | Entidade | Criador do Sistema e da Estátua de Deus |
| **Igris** | Sombra | Comandante | Cavaleiro Carmesim Leal / Espadas Gêmeas |
| **Beru** | Sombra | Comandante | Antigo Rei das Formigas de Jeju / Velocidade Extrema |
| **Kamish** | Sombra | Dragão Antigo | O Maior Flagelo da Humanidade / Respiração de Dragão |

---

## ⚡ O Sistema do Monarca (HUD & Interatividade)

A tela de Sistema interativa permite visualizar a progressão completa de Sung Jin-Woo:
- **Missão Diária — Treinamento de Força**:
  - `100 Flexões` | `100 Abdominais` | `100 Agachamentos` | `Corrida de 10km`
  - *Penalidade por falha: Sobrevivência na Zona de Punição (4 horas)*.
- **Habilidades Notáveis**:
  - `Toque do Dominador` (Telecinese sem consumo de mana).
  - `Arrancada / Passo Veloz` (Aumento súbito de agilidade).
  - `Furtividade` (Invisibilidade completa).
  - `Extração de Sombras (ARAISE)` (Ressuscita monstros mortos como soldados leais).
  - `Troca de Sombras` (Teletransporte instantâneo para qualquer soldado no mundo).

---

## 📂 Estrutura do Repositório

```text
solo-leveling/
├── index.html              # Página Principal (Sinopse, Linha do Tempo, Stats)
├── personagens.html        # Catálogo Completo com Filtros e Cards RPG
├── sung-jin-woo.html       # Dossiê Especial com Sistema HUD Interativo
├── guia-sistema.html       # Guia do Universo, Regras do Sistema e Changelog
├── README.md               # Documentação Completa do Projeto
├── css/
│   ├── base.css            # Variáveis CSS, Reset, Header, Efeitos Glow & Scanlines
│   ├── home.css            # Estilos exclusivos da Homepage e Linha do Tempo
│   ├── personagens.css     # Estilos da Galeria, Filtros e Cards 3D
│   ├── sung.css            # Estilos do Dossiê, Parallax e HUD do Sistema
│   └── character.css       # Folhas modulares de suporte aos personagens
├── js/
│   ├── home.js             # Contadores animados e efeitos de scroll
│   ├── personagens.js      # Lógica de filtros reativos e modal
│   └── sung.js             # Gerenciamento de abas, HUD e imagens dinâmicas
└── img/                    # Assets visuais (sung1..4, solo, capas)
```

---

## 📈 Histórico de Melhorias & Changelog

### 🚀 Fase 1: Arquitetura Inicial & Reestruturação
- Separação modular de arquivos HTML e pastas dedicadas (`/css`, `/js`, `/img`).
- Criação das páginas base `index.html`, `personagens.html` e `sung-jin-woo.html`.

### 💎 Fase 2: Evolução Visual Extrema (CSS v5 Cyber-Shadow)
- Criação do `base.css v5` com sistema robusto de tokens de design (CSS Custom Properties).
- Implementação de scanlines CRT, partículas cósmicas e iluminação com gradientes radiais.
- Padronização de tipografias de ponta: **Orbitron** (Títulos Sci-fi) e **Rajdhani** (Leitura técnica).
- Efeitos avançados de `backdrop-filter: blur()`, neon glows e animações de entrada com reveal.

### ⚔️ Fase 3: Expansão do Catálogo de Personagens
- Inclusão de mais de 15 personagens do manhwa e novel (Protagonistas, Caçadores Rank S, Sombras e Monarcas).
- Sistema de filtros instantâneos em JavaScript por facção sem recarregar a página.
- Cartões com stats RPG detalhados (FOR, AGI, VIT) e badges de classificação de Rank.

### 🎮 Fase 4: Otimização do Sistema e HUD
- Interface imersiva do Sistema no perfil do Sung Jin-Woo.
- Contadores dinâmicos na Home com animação baseada no scroll do usuário (`IntersectionObserver`).
- Transições dinâmicas de tópicos e imagens no dossiê de Jin-Woo.

### 📚 Fase 5: Documentação & Guia Completo
- Atualização total do `README.md` com guia de lore, arquitetura técnica e tabelas.
- Criação do `guia-sistema.html` com o arquivo central de lore e changelog de desenvolvimento.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível com tags como `<main>`, `<section>`, `<aside>`, `<nav>`.
- **CSS3 Puro Avançado**: Flexbox, CSS Grid, Custom Properties (Variáveis), Keyframe Animations, Glassmorphism, Pseudo-elementos.
- **JavaScript (ES6+)**: Manipulação nativa do DOM, Event Listeners, Data Attributes, Intersection Observer API.
- **Google Fonts**: Orbitron, Rajdhani e Inter.

---

## 💻 Como Executar Localmente

Como o projeto é construído em código estático de alta fidelidade sem dependências de compilação:

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/Gabrielarruda177/solo-leveling.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari):
   - Você pode simplesmente dar legal 
---

<p align="center">
  <sub>Feito com ⚡ e 🌌 em homenagem ao Monarca das Sombras.</sub>
</p>
