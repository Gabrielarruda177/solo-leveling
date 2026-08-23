const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel-content");
const characterImage = document.querySelector(".character-image");
const defaultImage = "img/solo.png";

const pages = document.querySelectorAll(".page");

const systemPage = document.getElementById("page-system");
const sysContent = document.querySelector(".system-content");
const sysImage = document.getElementById("sysImage");
const sysEyebrow = document.getElementById("sysEyebrow");
const sysTitle = document.getElementById("sysTitle");
const sysDesc = document.getElementById("sysDesc");
const sysIndex = document.getElementById("sysIndex");
const enterSystem = document.getElementById("enterSystem");
const systemBack = document.getElementById("systemBack");
const prevTopicBtn = document.getElementById("prevTopic");
const nextTopicBtn = document.getElementById("nextTopic");

const topicosDetalhes = [
    {
        eyebrow: "IDENTIDADE",
        titulo: "PERFIL",
        descricao: "Sung Jin-Woo, caçador rank S da Guilda Ahjin. O primeiro humano a despertar como jogador do Sistema e herdeiro do trono do Monarca das Sombras."
    },
    {
        eyebrow: "ANÁLISE DE COMBATE",
        titulo: "ATRIBUTOS",
        descricao: "Nenhum limite mensurável restante. Força, agilidade, vitalidade, inteligência e percepção continuam subindo a cada dia, quebrando o teto imposto pelo Sistema original."
    },
    {
        eyebrow: "ARSENAL",
        titulo: "HABILIDADES",
        descricao: "Do comando supremo ERGAM-SE, que ergue exércitos inteiros das trevas, às habilidades de furtividade e domínio que fazem dele o caçador mais completo já registrado."
    },
    {
        eyebrow: "EXÉRCITO DAS SOMBRAS",
        titulo: "SOMBRAS",
        descricao: "Igris, Beru, Iron, Tusk, Kamish e Greed: generais e cavaleiros extraídos dos inimigos mais poderosos já derrotados, prontos para surgirem sempre que seu mestre ordenar."
    },
    {
        eyebrow: "CURIOSIDADE",
        titulo: "HISTÓRIA",
        descricao: "Antes do despertar, Jin-Woo era conhecido como o caçador mais fraco do mundo. Após sobreviver ao Templo do Duplo Calabouço, o Sistema o escolheu — e nada voltou a ser igual."
    }
];

let indiceAtual = 0;
let trocaTimeout = null;


function irParaPagina(id) {

    pages.forEach(p => p.classList.remove("active"));

    const destino = document.getElementById(id);

    if (destino) {
        destino.classList.add("active");
    }

}


function abrirTopico(index, trocarPagina = true) {

    const total = navItems.length;

    indiceAtual = ((index % total) + total) % total;

    navItems.forEach((nav, i) => {
        nav.classList.toggle("active", i === indiceAtual);
    });

    const item = navItems[indiceAtual];
    const dados = topicosDetalhes[indiceAtual];

    if (trocaTimeout) clearTimeout(trocaTimeout);

    sysImage.style.opacity = "0";
    sysContent.style.opacity = "0";

    trocaTimeout = setTimeout(() => {

        sysImage.src = item.dataset.image || defaultImage;
        sysEyebrow.textContent = dados.eyebrow;
        sysTitle.textContent = dados.titulo;
        sysDesc.textContent = dados.descricao;
        sysIndex.textContent =
            String(indiceAtual + 1).padStart(2, "0") +
            " / " +
            String(total).padStart(2, "0");

        sysImage.style.opacity = "1";
        sysContent.style.opacity = "1";

    }, 250);

    if (trocarPagina) {
        irParaPagina("page-system");
    }

}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        const section = item.dataset.section;

        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");

        panels.forEach(panel => panel.classList.remove("active-panel"));

        const selectedPanel = document.getElementById(section);

        if (selectedPanel) {
            selectedPanel.classList.add("active-panel");
        }

        if (characterImage) {

            const novaImagem = item.dataset.image || defaultImage;

            if (!characterImage.src.endsWith(novaImagem)) {
                characterImage.style.opacity = "0";

                setTimeout(() => {
                    characterImage.src = novaImagem;
                    characterImage.style.opacity = "1";
                }, 400);
            }

        }

    });

});


enterSystem.addEventListener("click", () => {
    abrirTopico(0);
});


if (systemBack) {
    systemBack.addEventListener("click", () => {
        irParaPagina("page-home");
    });
}


if (prevTopicBtn) {
    prevTopicBtn.addEventListener("click", () => {
        abrirTopico(indiceAtual - 1, false);
    });
}


if (nextTopicBtn) {
    nextTopicBtn.addEventListener("click", () => {
        abrirTopico(indiceAtual + 1, false);
    });
}


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && systemPage.classList.contains("active")) {
        irParaPagina("page-home");
    }
});


const character = document.querySelector(".character-image");

if (character) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 100;
        const y = (window.innerHeight / 2 - event.clientY) / 100;

        character.style.transform =
            "translate(" + x + "px, " + y + "px)";

    });

}

const heroH1 = document.querySelector(".hero-content h1");

if (heroH1) {

    setInterval(() => {

        heroH1.style.textShadow = "2px 0 #00c8ff, -2px 0 #ff0040";

        setTimeout(() => {
            heroH1.style.textShadow = "none";
        }, 100);

    }, 5000);

}