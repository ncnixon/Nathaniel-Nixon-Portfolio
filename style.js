// Core element references
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const projectCards = document.querySelectorAll(".project-card");

// Smooth in-page scrolling for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Tap/click flip support for project cards (mobile + desktop)
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

// Close open cards when clicking outside
document.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".project-card");
  if (clickedCard) return;

  projectCards.forEach((card) => card.classList.remove("is-flipped"));
});
