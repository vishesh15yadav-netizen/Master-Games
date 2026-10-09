/* =========================
   CYBERPUNK PARTICLES
========================= */

const particleContainer =
    document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);
}


/* =========================
   MOUSE GLOW
========================= */

const glow =
    document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {

    glow.style.left =
        event.clientX + "px";

    glow.style.top =
        event.clientY + "px";

});
