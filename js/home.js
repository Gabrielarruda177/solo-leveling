const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            revealObserver.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));


const statNums = document.querySelectorAll(".stat-num");

statNums.forEach((el) => {
    const alvo = parseInt(el.dataset.valor, 10);
    if (isNaN(alvo)) return;

    const passo = Math.max(1, Math.ceil(alvo / 40));
    let atual = 0;

    const timer = setInterval(() => {
        atual += passo;

        if (atual >= alvo) {
            atual = alvo;
            clearInterval(timer);
        }

        el.textContent = atual;
    }, 40);
});