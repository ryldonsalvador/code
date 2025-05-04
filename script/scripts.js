document.addEventListener("DOMContentLoaded", () => {
  gsap.set(
    "h3, h1, h2, .cta, .portfolio h2, .portfolio p, .social-a, .connect h2, .connect p",
    {
      opacity: 0,
      y: -10,
      transform: "translateZ(0)",
    }
  );
  gsap.set(".divider", { width: "0%", transform: "translateZ(0)" });
  gsap.set(".floating-icons-container, .typing-text", {
    opacity: 0,
    transform: "translateZ(0)",
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      transform: "translateZ(0)",
      ease: "expo.out",
    },
    paused: true,
  });

  tl.to("h3", { opacity: 1, y: 0 })
    .to(".floating-icons-container", { opacity: 1 }, "-=0.4")
    .to("h1", { opacity: 1, y: 0 }, "-=0.4")
    .to(".divider", { width: "100%" }, "-=0.3")
    .to(
      "h2",
      {
        opacity: 1,
        y: 0,
        onComplete: () => {
          gsap.set(".typing-text", { opacity: 1 });
          type(); // Call your function after h2 animation completes
        },
      },
      "-=0.3"
    )
    .to(".cta", { opacity: 1, y: 0 }, "+=0.2");

  gsap.to(".portfolio h2, .portfolio p", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    transform: "translateZ(0)",
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 80%",
    },
  });

  gsap.from(".mockup", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top 80%",
    },
  });

  gsap.to(".connect h2, .connect p", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".connect",
      start: "top 100%",
    },
  });

  gsap.to(".social-a", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".connect",
      start: "top 100%",
    },
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav-link");

  window.addEventListener("load", updateActiveLink); // <--- add this!
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const hero = document.querySelector(".hero");

    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      hero.style.setProperty("--gradient-opacity", "0"); // Fade out
    } else {
      nav.classList.remove("scrolled");
      hero.style.setProperty("--gradient-opacity", "1"); // Fully visible
    }

    updateActiveLink();
  });

  function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLink.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }

      link.addEventListener("click", () => {
        navLinks.classList.remove("show"); // Hide menu when clicking a link
      });
    });
  }

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Typing text animation
  const typingText = document.querySelector(".typing-text");
  const words = [
    "HTML5 Banners",
    "HTML5 Playable Ads",
    "HTML Email Templates",
    "Landing Pages",
    "Interactive Websites",
    "Web Design",
  ];
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typingText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }

  const pencil = document.getElementById("pencil");
  const line = document.getElementById("drawLine");
  const sparkles = document.querySelectorAll(".sparkles");

  // Animate the line width and wave it up and down
  gsap.to(line, {
    width: 80,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  gsap.to(line, {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Animate the pencil to move with a small curve
  gsap.to(pencil, {
    x: 80,
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Add trailing effect to the pencil
  gsap.to(pencil, {
    rotation: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    transformOrigin: "center center",
    ease: "sine.inOut",
  });

  // Animate sparkles around the pencil
  sparkles.forEach((sparkle, index) => {
    gsap.to(sparkle, {
      opacity: 1,
      scale: 2,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      delay: index * 0.2,
      ease: "power1.inOut",
      x: Math.random() * 30 - 15,
      y: Math.random() * 30 - 15,
    });
  });

  // Scroll to the top of the page on load
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // No smooth scrolling
  });

  const preloader = document.getElementById("preloader");

  preloader.style.pointerEvents = "none";
  setTimeout(() => {
    preloader.style.display = "none";
    preloader.style.opacity = "0";
    tl.play();
  }, 500);
});
// Remove the hash from the URL
history.replaceState(null, null, " ");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"; // Disable browser scroll restoration
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0); // Scroll to top before page unload
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // Remove the hash from URL
      history.replaceState(null, null, window.location.pathname);
    }
  });
});
