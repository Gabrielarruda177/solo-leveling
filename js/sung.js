const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel-content");
const panelTrack = document.querySelector(".panel-track");
const panelSlider = document.getElementById("panelSlider");
const panelDots = document.getElementById("panelDots");
const characterImage = document.querySelector(".character-image");
const defaultImage = "img/sung1.png";

const accents = {
    profile: { accent: "#00c8ff", soft: "rgba(0, 200, 255, 0.06)" },
    stats:   { accent: "#8b5cf6", soft: "rgba(139, 92, 246, 0.08)" },
    skills:  { accent: "#ff0040", soft: "rgba(255, 0, 64, 0.07)" },
    shadows: { accent: "#aab4bc", soft: "rgba(170, 180, 188, 0.08)" },
    story:   { accent: "#ffd700", soft: "rgba(255, 215, 0, 0.07)" }
};


function criarDots() {

    if (!panelDots) return;

    panels.forEach(panel => {
        const dot = document.createElement("span");

        if (panel.classList.contains("active-panel")) {
            dot.classList.add("active");
        }

        panelDots.appendChild(dot);
    });

}


function selecionarTopico(section) {

    const item = document.querySelector(
        '.nav-item[data-section="' + section + '"]'
    );

    navItems.forEach(nav => nav.classList.remove("active"));

    if (item) {
        item.classList.add("active");
    }

    const panelsArr = Array.from(panels);
    const indice = panelsArr.findIndex(panel => panel.id === section);

    if (indice !== -1) {

        panelsArr.forEach(panel => panel.classList.remove("active-panel"));
        panelsArr[indice].classList.add("active-panel");

        if (panelTrack) {
            panelTrack.style.transform =
                "translateX(-" + (indice * 20) + "%)";
        }

        if (panelDots) {
            const dots = panelDots.querySelectorAll("span");
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === indice);
            });
        }

    }

    const tema = accents[section] || accents.profile;

    if (panelSlider) {
        panelSlider.style.setProperty("--panel-accent", tema.accent);
        panelSlider.style.setProperty("--panel-soft", tema.soft);
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

}


navItems.forEach(item => {

    item.addEventListener("click", () => {
        selecionarTopico(item.dataset.section);
    });

});


criarDots();


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