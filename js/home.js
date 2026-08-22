const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel-content");


// =============================
// TROCA DE PAINEL
// =============================

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const section = item.dataset.section;

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        panels.forEach(panel => {
            panel.classList.remove("active-panel");
        });

        const selectedPanel = document.getElementById(section);

        if (selectedPanel) {
            selectedPanel.classList.add("active-panel");
        }

    });

});


// =============================
// NAVEGACAO ENTRE PAGINAS
// =============================

const headerLinks = document.querySelectorAll(".header-link");
const pages = document.querySelectorAll(".page");
const sidebar = document.querySelector(".sidebar");
const footerEl = document.querySelector("footer");

headerLinks.forEach(link => {

    link.addEventListener("click", () => {

        const page = link.dataset.page;

        headerLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        pages.forEach(p => p.classList.remove("active"));

        const selectedPage = document.getElementById("page-" + page);

        if (selectedPage) {
            selectedPage.classList.add("active");
        }

        if (page === "characters") {
            sidebar.style.display = "none";
            if (footerEl) footerEl.style.display = "none";
        } else {
            sidebar.style.display = "";
            if (footerEl) footerEl.style.display = "";
        }

    });

});


// =============================
// MODAL SYSTEM
// =============================

const enterSystem = document.getElementById("enterSystem");
const closeModal = document.getElementById("closeModal");
const systemModal = document.getElementById("systemModal");


enterSystem.addEventListener("click", () => {
    systemModal.classList.add("active");
});


closeModal.addEventListener("click", () => {
    systemModal.classList.remove("active");
});


systemModal.addEventListener("click", (event) => {
    if (event.target === systemModal) {
        systemModal.classList.remove("active");
    }
});


// =============================
// EFEITO DO MOUSE NO PERSONAGEM
// =============================

const character = document.querySelector(".character-image");

if (character) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 100;
        const y = (window.innerHeight / 2 - event.clientY) / 100;

        character.style.transform =
            "translate(" + x + "px, " + y + "px)";

    });

}


// =============================
// EFEITO DOS SKILLS
// =============================

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("click", () => {

        const skillName = skill.querySelector("strong").textContent;
        console.log("Skill selecionada: " + skillName);

        skill.style.boxShadow = "0 0 20px rgba(0, 200, 255, 0.3)";

        setTimeout(() => {
            skill.style.boxShadow = "";
        }, 500);

    });

});


// =============================
// FILTROS DE PERSONAGENS
// =============================

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


// =============================
// ANIMACAO DE ENTRADA DOS CARDS
// =============================

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


// =============================
// GLITCH EFFECT NO TITULO
// =============================

const heroH1 = document.querySelector(".hero-content h1");

if (heroH1) {

    setInterval(() => {

        heroH1.style.textShadow = "2px 0 #00c8ff, -2px 0 #ff0040";

        setTimeout(() => {
            heroH1.style.textShadow = "none";
        }, 100);

    }, 5000);

}