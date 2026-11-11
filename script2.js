
// 1. Welcome loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);
});

// 2. Typing animation
const typingElement = document.getElementById("typing");

const words = [
  "Technology Lover",
  "Travel Enthusiast",
  "Curious Explorer",
  "Creative Thinker",
  "Future Innovator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  typingElement.textContent = currentWord.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1100);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 95);
}

typeEffect();

// 3. Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// 4. Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// 5. Floating background particles
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 35; i++) {
  const particle = document.createElement("span");

  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration =
    (Math.random() * 15 + 10) + "s";

  particle.style.animationDelay =
    (Math.random() * 15) + "s";

  particle.style.opacity = Math.random() * 0.6 + 0.2;

  particleContainer.appendChild(particle);
}

// 6. Current year
document.getElementById("year").textContent =
  new Date().getFullYear();
  