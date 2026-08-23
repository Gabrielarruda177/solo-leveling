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


const devModal = document.getElementById("devModal");
const devModalClose = document.getElementById("devModalClose");

function fecharDevModal() {
    devModal.classList.add("fechado");
}

if (devModal && devModalClose) {

    devModalClose.addEventListener("click", fecharDevModal);

    devModal.addEventListener("click", (event) => {
        if (event.target === devModal) {
            fecharDevModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            fecharDevModal();
        }
    });

}