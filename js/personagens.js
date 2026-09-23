const filterBtns = document.querySelectorAll(".filter-btn");
const charCards = document.querySelectorAll(".char-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        charCards.forEach(card => {

            if (filter === "all") {
                card.style.display = "";
                card.style.animation = "cardFadeIn 0.4s ease forwards";
            } else {

                const category = card.dataset.category;

                if (category === filter) {
                    card.style.display = "";
                    card.style.animation = "cardFadeIn 0.4s ease forwards";
                } else {
                    card.style.display = "none";
                }

            }

        });

    });

});


const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 50);

        }

    });

}, observerOptions);

charCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.5s ease";
    cardObserver.observe(card);
});


/* ═══════════════════════════════════════════════════════
   CHARACTER SHOWCASE — Tela cheia com transição de slides
   ═══════════════════════════════════════════════════════ */

const showcase = document.getElementById("charShowcase");
const showcaseHeroContent = document.getElementById("showcaseHeroContent");
const showcaseDetailsContent = document.getElementById("showcaseDetailsContent");
const showcasePortrait = document.getElementById("showcasePortrait");
const showcaseCuriosityBox = document.getElementById("showcaseCuriosityBox");
const showcaseCuriosity = document.getElementById("showcaseCuriosity");
const showcaseStatsMenu = document.getElementById("showcaseStatsMenu");
const showcaseInfoHeader = document.getElementById("showcaseInfoHeader");
const showcaseInfoText = document.getElementById("showcaseInfoText");
const showcaseBg = document.getElementById("showcaseBg");
const showcaseDetailsBg = document.getElementById("showcaseDetailsBg");

const showcaseInfoBtn = document.getElementById("showcaseInfoBtn");
const showcaseBackBtn = document.getElementById("showcaseBack");
const showcasePrevBtn = document.getElementById("showcasePrev");
const showcaseNextBtn = document.getElementById("showcaseNext");

const showcaseIntroText =
    "Passe o cursor sobre FOR, AGI e VIT para inspecionar os atributos.";

const catLabels = {
    protagonist: "PROTAGONISTA",
    antagonist: "ANTAGONISTA",
    hunter: "CAÇADOR",
    shadow: "SOMBRA",
    monarch: "MONARCA"
};

const curiosidades = {
    "Sung Jin-Woo": "Antes do Sistema, era chamado de 'o caçador mais fraco da humanidade' — exatamente por isso o Sistema o escolheu.",
    "Cha Hae-In": "Consegue sentir o cheiro do mana das pessoas; no início, passava mal só de ficar perto de Jin-Woo.",
    "Sung Su-Ho": "Nasceu com os poderes de sombra do pai e é o novo herdeiro do trono do Monarca das Sombras.",
    "Choi Jong-In": "Seu poder de fogo foi turbinado por Jin-Woo usando as gemas do Lago Smaug.",
    "Baek Yoon-Ho": "Comandou a segunda invasão à Ilha de Jeju e foi um dos primeiros a perceber o despertar de Jin-Woo.",
    "Lim Cheol-Ul": "Sua força física é tão imensa que os caçadores o chamam de 'o muro' de batalha.",
    "Min Byung-Gu": "Curandeiro Rank A raríssimo; durante a redigestão do Sistema chegou a perder temporariamente o título.",
    "Thomas Andre": "O caçador mais forte dos EUA, apelidado de Golias; seu corpo foi quebrado por um único golpe de Antares.",
    "Goto Ryuji": "Era o caçador mais forte do Japão até ser derrotado em segundos pela sombra de Kamish.",
    "Antares": "Foi ele quem matou Kamish no passado, com um único golpe, em plena batalha contra a humanidade.",
    "O Arquiteto": "Criatura feita de escuridão, criada para testar candidatos ao trono do Monarca das Sombras.",
    "Baran": "Monarca das Chamas Brancas; caiu diante de Jin-Woo nas profundezas do Castelo de Demônios.",
    "Legia": "Um dos Monarcas originais; rivalizava abertamente com o poder do Monarca das Sombras.",
    "Querehsha": "Monarca da Praga; seu exército de insetos chegou a ameaçar a Península Coreana.",
    "Igris": "Servia Ashborn como cavaleiro leal — e continua servindo o novo Rei com a mesma devoção.",
    "Beru": "Devorava caçadores na Ilha de Jeju; renascido, virou o primeiro soldado e a 'melhor mãe' do exército.",
    "Iron": "Toda noite reassume sua forma humana original para viver suas memórias antes da extração.",
    "Tusk": "Mago de elite capaz de lançar magias devastadoras direto da boca.",
    "Kamish": "O dragão que matou dezenas de ranks S; hoje é a sombra mais poderosa do exército de Jin-Woo.",
    "Greed": "A sombra mais veloz do exército; após a coleira, perdeu para sempre sua forma de monstro."
};

function montarAlvos() {

    return Array.from(charCards).map(card => {

        const stats = {};
        card.querySelectorAll(".char-stats span").forEach(s => {
            const partes = s.textContent.trim().split(/\s+/);
            stats[partes[0].toUpperCase()] = parseInt(partes[1], 10);
        });

        const rankEl = card.querySelector(".char-rank");

        return {
            name: card.querySelector("h3").textContent.trim(),
            title: card.querySelector(".char-class").textContent.trim(),
            rankText: rankEl.textContent.trim(),
            rankCls: rankEl.className,
            category: card.dataset.category,
            desc: card.querySelector(".char-desc").textContent.trim(),
            glyph: card.querySelector(".char-icon").innerHTML,
            stats: stats
        };

    });

}

const alvos = montarAlvos();
let indiceShow = 0;
let showcaseTimeout = null;

function temaDoAlvo(alvo) {

    if (alvo.rankCls.indexOf("rank-monarch") !== -1) return "theme-red";
    if (alvo.rankCls.indexOf("rank-shadow") !== -1) return "theme-purple";
    if (alvo.rankCls.indexOf("rank-national") !== -1) return "theme-gold";
    if (alvo.rankCls.indexOf("rank-a") !== -1) return "theme-orange";
    return "";

}

function textoStats(alvo) {

    return {
        FOR: "A força bruta de " + alvo.name + " marca " + alvo.stats.FOR +
             " no medidor do Sistema — poder suficiente para enfrentar os maiores flagelos do mundo.",
        AGI: "A agilidade de " + alvo.name + " registra " + alvo.stats.AGI +
             " pontos, combinando reflexos, velocidade e precisão letal em combate.",
        VIT: "Com " + alvo.stats.VIT + " de vitalidade, " + alvo.name +
             " sustenta batalhas exaustivas e se recupera de ferimentos que seriam fatais para outros caçadores."
    };

}

function renderChar() {

    const alvo = alvos[indiceShow];

    ["theme-red", "theme-purple", "theme-gold", "theme-orange"].forEach(t => {
        showcase.classList.remove(t);
    });

    const tema = temaDoAlvo(alvo);
    if (tema) showcase.classList.add(tema);

    [showcaseHeroContent, showcaseDetailsContent].forEach(c => c.classList.add("fade"));

    if (showcaseTimeout) clearTimeout(showcaseTimeout);

    showcaseTimeout = setTimeout(() => {

        document.getElementById("showcaseIndex").textContent =
            String(indiceShow + 1).padStart(2, "0") +
            " / " +
            String(alvos.length).padStart(2, "0");

        document.getElementById("showcaseCategory").textContent =
            catLabels[alvo.category] || alvo.category;

        document.getElementById("showcaseName").textContent = alvo.name;

        document.getElementById("showcaseRank").textContent =
            (alvo.rankText.length <= 2 ? "RANK " : "") + alvo.rankText;

        document.getElementById("showcaseTitle").textContent = alvo.title;
        document.getElementById("showcaseDesc").textContent = alvo.desc;
        document.getElementById("showcasePortrait").innerHTML = alvo.glyph;
        document.getElementById("showcaseCuriosity").textContent =
            curiosidades[alvo.name] || "Este registro ainda está sendo catalogado pelo Sistema.";

        showcaseStatsMenu.querySelectorAll(".stat-trigger").forEach(t => {
            const valor = alvo.stats[t.dataset.stat];
            t.querySelector("h3").textContent = (valor !== undefined) ? valor : "??";
        });

        showcaseInfoHeader.textContent = "DETALHES";
        showcaseInfoText.textContent = showcaseIntroText;

        [showcaseHeroContent, showcaseDetailsContent].forEach(c => c.classList.remove("fade"));

    }, 320);

}

function abrirShowcase(i) {
    indiceShow = i;
    document.body.classList.add("showcase-lock");
    showcase.classList.add("showcase-open");
    showcase.classList.remove("active-details");
    renderChar();
}

function fecharShowcase() {

    if (showcase.classList.contains("active-details")) {
        showcase.classList.remove("active-details");
        return;
    }

    document.body.classList.remove("showcase-lock");
    showcase.classList.remove("showcase-open");

}


charCards.forEach((card, i) => {

    card.addEventListener("click", () => {
        abrirShowcase(i);
    });

});


if (showcaseInfoBtn) {
    showcaseInfoBtn.addEventListener("click", () => {
        showcase.classList.add("active-details");
    });
}

if (showcaseBackBtn) {
    showcaseBackBtn.addEventListener("click", fecharShowcase);
}

if (showcasePrevBtn) {
    showcasePrevBtn.addEventListener("click", () => {
        indiceShow = ((indiceShow - 1) % alvos.length + alvos.length) % alvos.length;
        renderChar();
    });
}

if (showcaseNextBtn) {
    showcaseNextBtn.addEventListener("click", () => {
        indiceShow = (indiceShow + 1) % alvos.length;
        renderChar();
    });
}


showcaseStatsMenu.querySelectorAll(".stat-trigger").forEach(trigger => {

    trigger.addEventListener("mouseenter", () => {
        const alvo = alvos[indiceShow];
        showcaseInfoHeader.textContent = trigger.dataset.stat;
        showcaseInfoText.textContent = textoStats(alvo)[trigger.dataset.stat];
        trigger.classList.add("ativo");
    });

    trigger.addEventListener("mouseleave", () => {
        showcaseInfoHeader.textContent = "DETALHES";
        showcaseInfoText.textContent = showcaseIntroText;
        trigger.classList.remove("ativo");
    });

});


showcasePortrait.addEventListener("mouseenter", () => {
    showcaseCuriosityBox.classList.add("active");
});

showcasePortrait.addEventListener("mouseleave", () => {
    showcaseCuriosityBox.classList.remove("active");
});


showcase.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 22;
    const y = (event.clientY / window.innerHeight - 0.5) * 22;

    showcaseBg.style.transform = "scale(1.08) translate(" + x + "px, " + y + "px)";
    showcaseDetailsBg.style.transform = "scale(1.08) translate(" + (-x) + "px, " + (-y) + "px)";

});

showcase.addEventListener("mouseleave", () => {
    showcaseBg.style.transform = "";
    showcaseDetailsBg.style.transform = "";
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && showcase.classList.contains("showcase-open")) {
        fecharShowcase();
    }
});