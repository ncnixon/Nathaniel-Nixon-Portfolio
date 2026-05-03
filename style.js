// Core element references
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const projectCards = document.querySelectorAll(".project-card");
const resumeLinks = document.querySelectorAll(".resume-link");

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

// Open resume links directly without any in-page navigation behavior
resumeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const resumeUrl = link.getAttribute("href");
    if (!resumeUrl) return;

    const shouldDownload = link.hasAttribute("download");

    if (shouldDownload) {
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download =
        link.getAttribute("download") || "Resume-Portfolio.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      return;
    }

    window.open(resumeUrl, "_blank", "noopener,noreferrer");
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
