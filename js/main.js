// ===== GLOBAL VARIABLES =====
let isLoading = false;

// ===== DOM ELEMENTS =====
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const portfolioGrid = document.getElementById("portfolio-grid");
const certificatesGrid = document.getElementById("certificates-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const addCertBtn = document.getElementById("add-cert-btn");
const certModal = document.getElementById("cert-modal");
const certForm = document.getElementById("cert-form");
const modalClose = document.getElementById("modal-close");
const cancelCert = document.getElementById("cancel-cert");
const loading = document.getElementById("loading");

// ===== PROJECT DATA =====
const projectsData = [
  {
    id: 1,
    title: "Personal Budget Calculator",
    description:
      "Aplikasi desktop offline untuk tracking income dan expenses dengan interface yang user-friendly. Membantu pengguna mengelola keuangan personal dengan mudah dan efisien.",
    image: "images/offline kalkulator.png",
    category: "web",
    technologies: ["Python", "Tkinter", "SQLite"],
    metrics: [
      { icon: "fas fa-users", value: "100+", label: "Active Users" },
      {
        icon: "fas fa-database",
        value: "1000+",
        label: "Transactions Tracked",
      },
      { icon: "fas fa-clock", value: "50%", label: "Faster Data Entry" },
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Dynamic To-Do List Web Application",
    description:
      "Aplikasi to-do list modern dengan drag & drop functionality, local storage persistence, dan animasi yang smooth. Meningkatkan produktivitas dengan interface yang intuitif.",
    image: "images/todolist.png",
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    metrics: [
      { icon: "fas fa-bolt", value: "40%", label: "Productivity Boost" },
      { icon: "fas fa-mobile-alt", value: "100%", label: "Mobile Responsive" },
      { icon: "fas fa-tachometer-alt", value: "1.2s", label: "Load Time" },
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Portfolio website modern dan responsive dengan smooth animations, dark theme yang elegant, dan performance optimization. Menampilkan skills dan projects dengan cara yang menarik dan profesional.",
    image: "images/wahyu.jpg",
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    metrics: [
      { icon: "fas fa-rocket", value: "95+", label: "Lighthouse Score" },
      { icon: "fas fa-eye", value: "500+", label: "Monthly Visitors" },
      { icon: "fas fa-star", value: "4.8/5", label: "User Rating" },
    ],
    github: "#",
    demo: "#",
  },
];

// ===== CERTIFICATES DATA =====
const certificatesData = [
  {
    id: 1,
    title: "Use Generative AI For Software Development",
    issuer: "IBM SkillsBuild",
    year: "2024",
    image: "images/CER 2.png",
  },
  {
    id: 2,
    title: "Hackathon 2025 Winner",
    issuer: "IBM SkillsBuild",
    year: "2025",
    image: "images/CER 1.png",
  },
  {
    id: 3,
    title: "AI for Everyone",
    issuer: "IBM SkillsBuild",
    year: "2024",
    image: "images/CER 3.png",
  },
];

// ===== UTILITY FUNCTIONS =====
function showLoading() {
  isLoading = true;
  loading.style.display = "flex";
}

function hideLoading() {
  isLoading = false;
  loading.style.display = "none";
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== NAVIGATION FUNCTIONS =====
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      updateActiveNavLink();
    }, 10),
  );
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) navLink.classList.add("active");
    }
  });
}

// ===== PORTFOLIO FUNCTIONS =====
function renderProjects(projects = projectsData) {
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = "";

  projects.forEach((project, index) => {
    const projectElement = createProjectElement(project);
    projectElement.classList.add("fade-in", "interactive-bg");
    projectElement.style.animationDelay = `${index * 0.1}s`;
    portfolioGrid.appendChild(projectElement);
  });

  // Re-observe new elements
  initScrollAnimations();
}

function createProjectElement(project) {
  const projectDiv = document.createElement("div");
  projectDiv.className = `portfolio-item ${project.category}`;

  // Generate metrics HTML if metrics exist
  const metricsHTML = project.metrics
    ? `
    <div class="project-metrics">
      ${project.metrics
        .map(
          (metric) => `
        <div class="metric-item">
          <i class="${metric.icon}"></i>
          <div class="metric-info">
            <span class="metric-value">${metric.value}</span>
            <span class="metric-label">${metric.label}</span>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
    : "";

  projectDiv.innerHTML = `
        <div class="portfolio-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="portfolio-overlay">
                <div class="portfolio-links">
                    <a href="${project.github}" class="portfolio-link" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.demo}" class="portfolio-link" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        <div class="portfolio-content">
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            ${metricsHTML}
            <div class="portfolio-tech">
                ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
        </div>
    `;
  return projectDiv;
}

function initPortfolioFilters() {
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // Update active filter button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter projects
      filterProjects(filter);
    });
  });
}

function filterProjects(category) {
  const projectItems = document.querySelectorAll(".portfolio-item");

  projectItems.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// ===== CERTIFICATES FUNCTIONS =====
function renderCertificates() {
  if (!certificatesGrid) return;

  const certificates = getCertificatesFromStorage();
  certificatesGrid.innerHTML = "";

  certificates.forEach((cert) => {
    const certElement = createCertificateElement(cert);
    certificatesGrid.appendChild(certElement);
  });
}

function createCertificateElement(cert) {
  const certDiv = document.createElement("div");
  certDiv.className = "certificate-item fade-in interactive-bg glow";
  certDiv.innerHTML = `
        <div class="certificate-image">
            <img src="${cert.image}" alt="${cert.title}" loading="lazy" data-title="${cert.title}">
        </div>
        <div class="certificate-content">
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-issuer">${cert.issuer}</p>
            <p class="certificate-year">${cert.year}</p>
        </div>
    `;

  // Add image preview functionality
  const img = certDiv.querySelector(".certificate-image img");
  img.addEventListener("click", () => {
    openImageModal(cert.image, cert.title);
  });

  return certDiv;
}

function getCertificatesFromStorage() {
  const stored = localStorage.getItem("certificates");
  return stored ? JSON.parse(stored) : certificatesData;
}

function saveCertificatesToStorage(certificates) {
  localStorage.setItem("certificates", JSON.stringify(certificates));
}

function addCertificate(certData) {
  const certificates = getCertificatesFromStorage();
  const newCert = {
    id: Date.now(),
    ...certData,
  };
  certificates.push(newCert);
  saveCertificatesToStorage(certificates);
  renderCertificates();
}

function deleteCertificate(id) {
  if (confirm("Are you sure you want to delete this certificate?")) {
    const certificates = getCertificatesFromStorage();
    const filtered = certificates.filter((cert) => cert.id !== id);
    saveCertificatesToStorage(filtered);
    renderCertificates();
  }
}

function initCertificateModal() {
  if (!addCertBtn || !certModal) return;

  // Open modal
  addCertBtn.addEventListener("click", () => {
    certModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Close modal
  const closeModal = () => {
    certModal.style.display = "none";
    document.body.style.overflow = "auto";
    certForm.reset();
  };

  modalClose.addEventListener("click", closeModal);
  cancelCert.addEventListener("click", closeModal);

  // Close modal when clicking outside
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
      closeModal();
    }
  });

  // Handle form submission
  certForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(certForm);
    const certData = {
      title: document.getElementById("cert-title").value.trim(),
      issuer: document.getElementById("cert-issuer").value.trim(),
      year: document.getElementById("cert-year").value.trim(),
      image: document.getElementById("cert-image").value.trim(),
    };

    // Validate form data
    if (
      !certData.title ||
      !certData.issuer ||
      !certData.year ||
      !certData.image
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // Validate year
    const currentYear = new Date().getFullYear();
    const year = parseInt(certData.year);
    if (isNaN(year) || year < 1900 || year > currentYear + 1) {
      alert("Please enter a valid year!");
      return;
    }

    // Validate URL
    try {
      new URL(certData.image);
    } catch {
      alert("Please enter a valid image URL!");
      return;
    }

    showLoading();

    // Simulate API call
    setTimeout(() => {
      addCertificate(certData);
      closeModal();
      hideLoading();

      // Show success message
      showNotification("Certificate added successfully! 🎉", "success");
    }, 1000);
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Add staggered animation for grid items
        if (
          entry.target.parentElement.classList.contains("skills-grid") ||
          entry.target.parentElement.classList.contains("portfolio-grid") ||
          entry.target.parentElement.classList.contains("certificates-grid")
        ) {
          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });

  // Add floating animation to skill items
  document.querySelectorAll(".skill-item").forEach((item, index) => {
    item.classList.add("floating");
    item.style.animationDelay = `${index * 0.5}s`;
  });
}

// ===== FORM HANDLING =====
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    showLoading();

    // Simulate form submission
    setTimeout(() => {
      hideLoading();
      showNotification(
        "Message sent successfully! I'll get back to you soon. 📧",
        "success",
      );
      contactForm.reset();
    }, 2000);
  });
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;

  // Add notification styles if not exists
  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style");
    styles.id = "notification-styles";
    styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 4000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            .notification-success {
                border-left: 4px solid #28a745;
            }
            .notification-info {
                border-left: 4px solid #17a2b8;
                background: #d1ecf1;
            }
            .notification-info i {
                color: #17a2b8;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 8px;
                flex: 1;
            }
            .notification-success i {
                color: #28a745;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                color: #666;
                padding: 0;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);

  // Manual close
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.remove();
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// ===== KEYBOARD NAVIGATION =====
function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // ESC key closes modals
    if (e.key === "Escape") {
      if (certModal && certModal.style.display === "flex") {
        certModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });
}

// ===== THEME TOGGLE (Optional) =====
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ===== PARTICLE BACKGROUND =====
function initParticleBackground() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Create floating particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 70, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1;
        `;
    hero.appendChild(particle);
  }
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
  const subtitle = document.querySelector(".hero-subtitle");
  if (!subtitle) return;

  const text = "Programmer • UI/UX Designer • Web Developer";
  let charIndex = 0;
  let isComplete = false;

  // Clear initial text
  subtitle.textContent = "";

  function typeWriter() {
    if (charIndex < text.length && !isComplete) {
      subtitle.textContent += text.charAt(charIndex);
      charIndex++;
      // Smooth typing speed - 80ms per character
      setTimeout(typeWriter, 80);
    } else {
      isComplete = true;
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// ===== MOUSE PARALLAX =====
function initMouseParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  hero.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth) * 100;
    const yPos = (clientY / innerHeight) * 100;

    hero.style.backgroundPosition = `${xPos}% ${yPos}%`;
  });
}

// ===== SMOOTH COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace("+", ""));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "+";
      }
    };

    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// ===== IMAGE PREVIEW MODAL =====
function openImageModal(imageSrc, title) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalTitle.textContent = title;
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function initImageModal() {
  const modal = document.getElementById("image-modal");
  const closeBtn = document.getElementById("image-modal-close");

  if (!modal || !closeBtn) return;

  // Close modal when clicking close button
  closeBtn.addEventListener("click", closeImageModal);

  // Close modal when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeImageModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeImageModal();
    }
  });
}

// ===== DOWNLOAD CV FUNCTION =====
function initDownloadCV() {
  const downloadBtn = document.getElementById("download-cv-btn");
  if (!downloadBtn) return;

  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Tampilkan notifikasi
    showNotification("CV sedang dipersiapkan untuk diunduh... 📄", "info");

    // Simulasi download (ganti dengan URL CV asli Anda)
    setTimeout(() => {
      // Ganti 'assets/CV-Zaenal-Wahyudin.pdf' dengan path CV Anda yang sebenarnya
      const cvUrl = "assets/CV-Zaenal-Wahyudin.pdf";
      // Buat link download temporary
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV-Zaenal-Wahyudin.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showNotification("CV berhasil diunduh! ✅", "success");
    }, 1000);
  });
}

// ===== WHATSAPP QUICK CONTACT =====
function initWhatsAppContact() {
  // Buat floating WhatsApp button
  const waButton = document.createElement("a");
  waButton.href =
    "https://wa.me/6283895937947?text=Halo%20Zaenal,%20saya%20tertarik%20dengan%20portfolio%20Anda";
  waButton.target = "_blank";
  waButton.rel = "noopener noreferrer";
  waButton.className = "whatsapp-float";
  waButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
  waButton.title = "Chat via WhatsApp";

  document.body.appendChild(waButton);

  // Tambahkan styling untuk WhatsApp button
  if (!document.querySelector("#whatsapp-styles")) {
    const styles = document.createElement("style");
    styles.id = "whatsapp-styles";
    styles.textContent = `
            .whatsapp-float {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: #25d366;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                z-index: 1000;
                transition: all 0.3s ease;
                text-decoration: none;
            }
            .whatsapp-float:hover {
                transform: scale(1.1) translateY(-5px);
                box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
            }
            .whatsapp-float i {
                animation: pulse 2s ease-in-out infinite;
            }
            @media (max-width: 768px) {
                .whatsapp-float {
                    bottom: 20px;
                right: 20px;
                width: 50px;
                    height: 50px;
                    font-size: 26px;
                }
        `;
    document.head.appendChild(styles);
  }
}

// === GITHUB STATS FUNCTIONS =====
async function fetchGitHubStats() {
  const username = "wahyuadratama"; // Ganti dengan username GitHub Anda
  try {
    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
    );
    const userData = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
    );
    const reposData = await reposResponse.json();

    // Calculate total stars
    const totalStars = reposData.reduce(
      (acc, repo) => acc + repo.stargazers_count,
      0,
    );

    // Update DOM
    document.getElementById("github-repos").textContent =
      userData.public_repos || 0;
    document.getElementById("github-stars").textContent = totalStars || 0;
    document.getElementById("github-followers").textContent =
      userData.followers || 0;
    document.getElementById("github-contributions").textContent = "150+"; // GitHub API tidak menyediakan ini secara langsung

    // Update profile card
    if (userData.avatar_url) {
      document.getElementById("github-avatar").src = userData.avatar_url;
    }
    document.getElementById("github-name").textContent =
      userData.name || username;
    document.getElementById("github-username").textContent =
      `@${userData.login}`;
    document.getElementById("github-bio").textContent =
      userData.bio || "No bio available";
    document.getElementById("github-location").textContent =
      userData.location || "Location not set";

    console.log("✅ GitHub stats loaded successfully");
  } catch (error) {
    console.error("❌ Error fetching GitHub stats:", error);
    // Set default values on error
    document.getElementById("github-repos").textContent = "10+";
    document.getElementById("github-stars").textContent = "25+";
    document.getElementById("github-followers").textContent = "15+";
    document.getElementById("github-contributions").textContent = "150+";
    document.getElementById("github-name").textContent = "Zaenal Wahyudin";
    document.getElementById("github-bio").textContent =
      "Passionate developer | Open source enthusiast";
  }
}

// ===== INITIALIZATION ====
function init() {
  // Wait for DOM to be fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }

  try {
    // Initialize all components
    initNavigation();
    renderProjects();
    initPortfolioFilters();
    renderCertificates();
    initCertificateModal();
    initImageModal();
    initScrollAnimations();
    initContactForm();
    initLazyLoading();
    initKeyboardNavigation();
    initThemeToggle();

    // Initialize new visual effects
    initParticleBackground();
    initTypingEffect();
    initMouseParallax();
    animateCounters();

    // Initialize new features for personal branding
    initDownloadCV();
    initWhatsAppContact();

    // Fetch GitHub stats
    fetchGitHubStats();

    // Hide loading spinner
    hideLoading();

    console.log("🎉 Portfolio website initialized successfully!");
  } catch (error) {
    console.error("Error initializing portfolio:", error);
    hideLoading();
  }
}

// ===== ERROR HANDLING =====
window.addEventListener("error", (e) => {
  console.error("Global error:", e.error);
  hideLoading();
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  hideLoading();
});

// ===== START APPLICATION =====
init();
