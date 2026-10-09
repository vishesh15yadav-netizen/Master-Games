(() => {
  "use strict";

  const gameData = {
    dodge: {
      code: "MG-001",
      title: "Dodge the Balls",
      status: "PLAYABLE",
      description: "A quick arcade survival challenge: move around, avoid the falling red balls, and try to beat your best time. Simple to learn, tricky to master.",
      genre: "ARCADE / SURVIVAL",
      download: "games/Dodge-the-Balls.zip",
      note: "Download the ZIP, extract it to a folder, then open the game files."
    },
    doom: {
      code: "MG-002",
      title: "DooM The Dlc Investigation",
      status: "PROJECT",
      description: "A Doom-inspired, retro first-person project set around the Delta Lunar Corporation and its ruined space operation. This project is being developed independently.",
      genre: "RETRO FPS / SCI-FI",
      download: "games/Doom-The-Dlc-Investigation.zip",
      note: "Project build: download the ZIP and extract it before launching. If a build is not available yet, check back for the next release."
    }
  };

  const intro = document.getElementById("intro");
  const enterButton = document.getElementById("enter-site");
  const skipButton = document.getElementById("skip-intro");
  const modal = document.getElementById("game-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalCode = document.getElementById("modal-code");
  const modalStatus = document.getElementById("modal-status");
  const modalDescription = document.getElementById("modal-description");
  const modalGenre = document.getElementById("modal-genre");
  const modalDownload = document.getElementById("modal-download");
  const downloadNote = document.getElementById("download-note");
  const modalArt = document.getElementById("modal-art");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  let previousFocus = null;

  function closeIntro() {
    intro.classList.add("hidden");
    window.setTimeout(() => intro.setAttribute("aria-hidden", "true"), 650);
  }

  // Show the intro on each fresh page load. Visitors can skip it immediately.
  enterButton.addEventListener("click", closeIntro);
  skipButton.addEventListener("click", closeIntro);

  function openDetails(key) {
    const game = gameData[key];
    if (!game) return;
    previousFocus = document.activeElement;
    modalTitle.textContent = game.title;
    modalCode.textContent = game.code;
    modalStatus.textContent = game.status;
    modalStatus.classList.toggle("in-dev", key === "doom");
    modalDescription.textContent = game.description;
    modalGenre.textContent = game.genre;
    modalDownload.href = game.download;
    modalDownload.setAttribute("download", "");
    modalDownload.setAttribute("aria-label", "Download " + game.title);
    downloadNote.textContent = game.note;
    modalArt.classList.toggle("doom", key === "doom");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeDetails() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  document.querySelectorAll("[data-details]").forEach((button) => {
    button.addEventListener("click", () => openDetails(button.dataset.details));
  });
  modalClose.addEventListener("click", closeDetails);
  modal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeDetails);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modal.classList.contains("open")) closeDetails();
      else if (!intro.classList.contains("hidden")) closeIntro();
    }
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  }, { passive: true });
})();
