// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 500);
  }, 2000);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.textContent = menuIcon.textContent === "☰" ? "✕" : "☰";
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.textContent = "☰";
  });
});

// Scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// About section animations
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const aboutText = document.querySelector(".about-text");
    const aboutImage = document.querySelector(".about-image");
    const contactHeading = document.querySelector(".contact-heading");
    const contactText = document.querySelector(".contact-text");
    const contactButton = document.querySelector(".contact-button");
    const projectCards = document.querySelectorAll(".project-card");

    if (aboutText) {
      observer.observe(aboutText);
      aboutText.style.animation = "fadeInRight 1s forwards";
    }

    if (aboutImage) {
      observer.observe(aboutImage);
      aboutImage.style.animation = "fadeInLeft 1s forwards";
    }

    if (contactHeading) observer.observe(contactHeading);
    if (contactText) observer.observe(contactText);
    if (contactButton) observer.observe(contactButton);

    projectCards.forEach((card, index) => {
      observer.observe(card);
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animation = "fadeInUp 1s forwards";
    });
  }, 500);
});

// Cursor effect
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  cursor.style.position = "fixed";
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.borderRadius = "50%";
  cursor.style.border = "2px solid #64ffda";
  cursor.style.pointerEvents = "none";
  cursor.style.transform = "translate(-50%, -50%)";
  cursor.style.transition = "width 0.3s, height 0.3s, border-color 0.3s";
  cursor.style.zIndex = "9999";
  document.body.appendChild(cursor);

  const cursorDot = document.createElement("div");
  cursorDot.classList.add("cursor-dot");
  cursorDot.style.position = "fixed";
  cursorDot.style.width = "5px";
  cursorDot.style.height = "5px";
  cursorDot.style.borderRadius = "50%";
  cursorDot.style.backgroundColor = "#64ffda";
  cursorDot.style.pointerEvents = "none";
  cursorDot.style.transform = "translate(-50%, -50%)";
  cursorDot.style.zIndex = "9999";
  document.body.appendChild(cursorDot);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
  });

  const links = document.querySelectorAll(
    "a, button, .project-card, .cta-button"
  );
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "#64ffda";
      cursor.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
    });

    link.addEventListener("mouseleave", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderColor = "#64ffda";
      cursor.style.backgroundColor = "transparent";
    });
  });

  // Hide default cursor
  document.body.style.cursor = "none";

  // Show default cursor on small screens (mobile)
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      document.body.style.cursor = "auto";
      cursor.style.display = "none";
      cursorDot.style.display = "none";
    } else {
      document.body.style.cursor = "none";
      cursor.style.display = "block";
      cursorDot.style.display = "block";
    }
  };

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

// Project card hover effect
document.querySelectorAll(".project-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.05}s`;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
