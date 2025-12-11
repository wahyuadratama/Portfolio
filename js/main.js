// ===== GLOBAL VARIABLES =====
let isLoading = false;

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const portfolioGrid = document.getElementById('portfolio-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const addCertBtn = document.getElementById('add-cert-btn');
const certModal = document.getElementById('cert-modal');
const certForm = document.getElementById('cert-form');
const modalClose = document.getElementById('modal-close');
const cancelCert = document.getElementById('cancel-cert');
const loading = document.getElementById('loading');

// ===== PROJECT DATA =====
const projectsData = [
    {
        id: 1,
        title: "Personal Budget Calculator",
        description: "A simple offline desktop application to track income and expenses. Built with Python and Tkinter for easy financial management.",
        image: "images/offline kalkulator.png",
        category: "web",
        technologies: ["Python", "Tkinter", "SQLite"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Dynamic To-Do List Web Application",
        description: "A modern, responsive to-do list application with local storage, drag & drop functionality, and beautiful animations.",
        image: "images/todolist.png",
        category: "web",
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and modern design.",
        image: "images/profil1.jpg",
        category: "web",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "#",
        demo: "#"
    }
];

// ===== CERTIFICATES DATA =====
const certificatesData = [
    {
        id: 1,
        title: "Front-End Developer Learning Path",
        issuer: "Dicoding Indonesia",
        year: "2024",
        image: "images/CER 2.png"
    },
    {
        id: 2,
        title: "Hackathon 2025 Winner",
        issuer: "Google Developer Student Club",
        year: "2025",
        image: "images/CER 1.png"
    },
    {
        id: 3,
        title: "AI for Everyone",
        issuer: "Coursera",
        year: "2024",
        image: "images/CER 3.png"
    }
];

// ===== UTILITY FUNCTIONS =====
function showLoading() {
    isLoading = true;
    loading.style.display = 'flex';
}

function hideLoading() {
    isLoading = false;
    loading.style.display = 'none';
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
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    }, 10));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// ===== PORTFOLIO FUNCTIONS =====
function renderProjects(projects = projectsData) {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectElement = createProjectElement(project);
        projectElement.classList.add('fade-in', 'interactive-bg');
        projectElement.style.animationDelay = `${index * 0.1}s`;
        portfolioGrid.appendChild(projectElement);
    });
    
    // Re-observe new elements
    initScrollAnimations();
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = `portfolio-item ${project.category}`;
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
        </div>
        <div class="portfolio-content">
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    return projectDiv;
}

function initPortfolioFilters() {
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
}

function filterProjects(category) {
    const projectItems = document.querySelectorAll('.portfolio-item');
    
    projectItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// ===== CERTIFICATES FUNCTIONS =====
function renderCertificates() {
    if (!certificatesGrid) return;

    const certificates = getCertificatesFromStorage();
    certificatesGrid.innerHTML = '';
    
    certificates.forEach(cert => {
        const certElement = createCertificateElement(cert);
        certificatesGrid.appendChild(certElement);
    });
}

function createCertificateElement(cert) {
    const certDiv = document.createElement('div');
    certDiv.className = 'certificate-item fade-in interactive-bg glow';
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
    const img = certDiv.querySelector('.certificate-image img');
    img.addEventListener('click', () => {
        openImageModal(cert.image, cert.title);
    });
    
    return certDiv;
}

function getCertificatesFromStorage() {
    const stored = localStorage.getItem('certificates');
    return stored ? JSON.parse(stored) : certificatesData;
}

function saveCertificatesToStorage(certificates) {
    localStorage.setItem('certificates', JSON.stringify(certificates));
}

function addCertificate(certData) {
    const certificates = getCertificatesFromStorage();
    const newCert = {
        id: Date.now(),
        ...certData
    };
    certificates.push(newCert);
    saveCertificatesToStorage(certificates);
    renderCertificates();
}

function deleteCertificate(id) {
    if (confirm('Are you sure you want to delete this certificate?')) {
        const certificates = getCertificatesFromStorage();
        const filtered = certificates.filter(cert => cert.id !== id);
        saveCertificatesToStorage(filtered);
        renderCertificates();
    }
}

function initCertificateModal() {
    if (!addCertBtn || !certModal) return;

    // Open modal
    addCertBtn.addEventListener('click', () => {
        certModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    const closeModal = () => {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        certForm.reset();
    };

    modalClose.addEventListener('click', closeModal);
    cancelCert.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeModal();
        }
    });

    // Handle form submission
    certForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(certForm);
        const certData = {
            title: document.getElementById('cert-title').value.trim(),
            issuer: document.getElementById('cert-issuer').value.trim(),
            year: document.getElementById('cert-year').value.trim(),
            image: document.getElementById('cert-image').value.trim()
        };

        // Validate form data
        if (!certData.title || !certData.issuer || !certData.year || !certData.image) {
            alert('Please fill in all fields!');
            return;
        }

        // Validate year
        const currentYear = new Date().getFullYear();
        const year = parseInt(certData.year);
        if (isNaN(year) || year < 1900 || year > currentYear + 1) {
            alert('Please enter a valid year!');
            return;
        }

        // Validate URL
        try {
            new URL(certData.image);
        } catch {
            alert('Please enter a valid image URL!');
            return;
        }

        showLoading();
        
        // Simulate API call
        setTimeout(() => {
            addCertificate(certData);
            closeModal();
            hideLoading();
            
            // Show success message
            showNotification('Certificate added successfully! 🎉', 'success');
        }, 1000);
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.parentElement.classList.contains('skills-grid') ||
                    entry.target.parentElement.classList.contains('portfolio-grid') ||
                    entry.target.parentElement.classList.contains('certificates-grid')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // Add floating animation to skill items
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        item.classList.add('floating');
        item.style.animationDelay = `${index * 0.5}s`;
    });
}

// ===== FORM HANDLING =====
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        showLoading();
        
        // Simulate form submission
        setTimeout(() => {
            hideLoading();
            showNotification('Message sent successfully! I\'ll get back to you soon. 📧', 'success');
            contactForm.reset();
        }, 2000);
    });
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;

    // Add notification styles if not exists
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
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
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== KEYBOARD NAVIGATION =====
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes modals
        if (e.key === 'Escape') {
            if (certModal && certModal.style.display === 'flex') {
                certModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// ===== THEME TOGGLE (Optional) =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ===== PARTICLE BACKGROUND =====
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
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
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = 'Web Developer & UI Designer';
    const words = text.split(' ');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            subtitle.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            subtitle.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// ===== MOUSE PARALLAX =====
function initMouseParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth) * 100;
        const yPos = (clientY / innerHeight) * 100;
        
        hero.style.backgroundPosition = `${xPos}% ${yPos}%`;
    });
}

// ===== SMOOTH COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initImageModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.getElementById('image-modal-close');
    
    if (!modal || !closeBtn) return;
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeImageModal);
    
    // Close modal when clicking outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeImageModal();
        }
    });
}

// ===== INITIALIZATION =====
function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
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

        // Hide loading spinner
        hideLoading();

        console.log('🎉 Portfolio website initialized successfully!');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        hideLoading();
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    hideLoading();
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    hideLoading();
});

// ===== START APPLICATION =====
init();