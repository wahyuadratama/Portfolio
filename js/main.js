/* ============================================================
   Zaenal Wahyudin — Portfolio (redesign)
   Interaksi: reveal-on-scroll, filter animasi, ripple,
   counters, lightbox, theme toggle, salin email.
   ============================================================ */
"use strict";

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= DATA ================= */
const projectsData = [
  {
    id: 1,
    title: "Website Pondok Pesantren Modern Darul Mukhlisin",
    description:
      "Website resmi pondok pesantren dengan CMS penuh: manajemen berita, galeri, data guru, dan pendaftaran PSB online dengan role admin. Berjalan live di VPS dengan backup database otomatis.",
    image: "images/project-darul-mukhlisin.png",
    category: "web",
    catLabel: "Web",
    technologies: ["Next.js", "Express", "MySQL", "PM2"],
    metrics: [
      { icon: "fas fa-check-circle", value: "Live", label: "Production" },
      { icon: "fas fa-newspaper", value: "55+", label: "Berita" },
      { icon: "fas fa-user-shield", value: "3", label: "Role Admin" },
    ],
    github: "https://github.com/wahyuadratama/websekolahdmu",
    demo: "https://darulmukhlisin.ponpes.id",
  },
  {
    id: 2,
    title: "Website IKADM (Ikatan Keluarga Alumni)",
    description:
      "Rebuild total website alumni Darul Mukhlisin: 7 halaman generasi dengan tema warna dinamis, form pendaftaran alumni, struktur pengurus, agenda, dan CMS lengkap.",
    image: "images/project-ikadm.png",
    category: "web",
    catLabel: "Web",
    technologies: ["Next.js", "Express", "MySQL"],
    metrics: [
      { icon: "fas fa-check-circle", value: "Live", label: "Production" },
      { icon: "fas fa-users", value: "7", label: "Halaman Generasi" },
      { icon: "fas fa-cogs", value: "CMS", label: "Lengkap" },
    ],
    github: "https://github.com/wahyuadratama/ikadm-website",
    demo: "https://ikadm.darulmukhlisin.ponpes.id",
  },
  {
    id: 3,
    title: "Bot WhatsApp (botwa)",
    description:
      "Bot WhatsApp modular berbasis Baileys dengan 30 fitur, termasuk game Werewolf multiplayer lengkap dengan peran, voting, dan timer otomatis. Berjalan 24/7 di VPS.",
    image: "images/project-botwa.png",
    category: "web",
    catLabel: "Web",
    technologies: ["Node.js", "Baileys", "PM2"],
    metrics: [
      { icon: "fas fa-plug", value: "30", label: "Fitur" },
      { icon: "fas fa-gamepad", value: "Werewolf", label: "Game" },
      { icon: "fas fa-server", value: "24/7", label: "VPS" },
    ],
    github: "https://github.com/wahyuadratama/botwa",
    demo: "",
  },
  {
    id: 4,
    title: "TugasKu — Aplikasi To-Do List Flutter",
    description:
      "Aplikasi Android to-do list dengan deadline & pengingat, sub-tugas, tugas berulang, kategori, dan mode gelap/terang. Diuji langsung di perangkat Android.",
    image: "images/project-tugasku.png",
    category: "mobile",
    catLabel: "Mobile",
    technologies: ["Flutter", "Dart", "Android"],
    metrics: [
      { icon: "fas fa-mobile-alt", value: "Android", label: "Platform" },
      { icon: "fas fa-bell", value: "Reminder", label: "Notifikasi" },
      { icon: "fas fa-moon", value: "Dark", label: "Mode" },
    ],
    github: "https://github.com/wahyuadratama/aplikasi_tugasku",
    demo: "",
  },
  {
    id: 5,
    title: "The Jogja Sun — Prototipe Portal Berita",
    description:
      "Prototipe portal berita Yogyakarta di Figma: 9 layar (homepage, kategori, detail berita, video, pencarian, CMS admin) plus logo resmi dan proposal pembangunan ke klien.",
    image: "images/project-jogja-sun.png",
    category: "ui",
    catLabel: "UI Desain",
    technologies: ["Figma", "UI Design", "Prototyping"],
    metrics: [
      { icon: "fas fa-pen-nib", value: "9", label: "Layar Figma" },
      { icon: "fas fa-palette", value: "Logo", label: "Final" },
      { icon: "fas fa-file-invoice", value: "RAB", label: "Proposal" },
    ],
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Jadwal Nonton Persib",
    description:
      "Web jadwal pertandingan Persib Bandung: jadwal lengkap, klasemen 3 kompetisi, panel live score, dan panduan nonton gratis via siaran resmi. Responsif untuk mobile.",
    image: "images/project-jadwal-persib.png",
    category: "web",
    catLabel: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    metrics: [
      { icon: "fas fa-futbol", value: "3", label: "Klasemen" },
      { icon: "fas fa-tv", value: "Resmi", label: "Siaran" },
      { icon: "fas fa-mobile-alt", value: "100%", label: "Responsif" },
    ],
    github: "",
    demo: "https://muse.ai/s/jadwal-nonton-persib-sxe6xaxixxxy4xoro/hZS-pL8JsV5tp3cUHiLc1LfbBPI3Q2k7zGDakgFmWBQ",
  },
];

// Judul sesuai isi dokumen sertifikat aslinya
const certificatesData = [
  { id: 1, title: "Use Generative AI for Software Development", issuer: "IBM SkillsBuild", year: "2025", image: "images/CER 2.png" },
  { id: 2, title: "Code Generation and Optimization Using IBM Granite", issuer: "IBM SkillsBuild", year: "2025", image: "images/CER 1.png" },
  { id: 3, title: "IBM Granite Models for Software Development", issuer: "IBM SkillsBuild", year: "2025", image: "images/CER 3.png" },
];

/* ================= THEME ================= */
function initTheme() {
  const root = document.documentElement;
  const btn = $("#theme-toggle");
  const icon = $("#theme-icon");
  const saved = localStorage.getItem("zw-theme");
  const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    localStorage.setItem("zw-theme", t);
    if (icon) icon.className = t === "dark" ? "fas fa-sun" : "fas fa-moon";
  };
  apply(initial);
  if (btn) btn.addEventListener("click", () => {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
}

/* ================= NAV ================= */
function initNav() {
  const navbar = $("#navbar");
  const burger = $("#nav-burger");
  const links = $("#nav-links");
  const navLinks = $$(".nav-link");

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
    // active link
    const pos = window.scrollY + 120;
    let current = "home";
    $$("main section[id], header[id]").forEach((s) => {
      if (pos >= s.offsetTop) current = s.id;
    });
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  navLinks.forEach((a) => a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      links.classList.remove("open");
      burger.classList.remove("open");
    }
  });
}

/* ================= RIPPLE ================= */
function initRipple() {
  if (prefersReducedMotion) return;
  document.addEventListener("pointerdown", (e) => {
    const el = e.target.closest(".ripple");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ink = document.createElement("span");
    ink.className = "ripple-ink";
    ink.style.width = ink.style.height = size + "px";
    ink.style.left = e.clientX - rect.left - size / 2 + "px";
    ink.style.top = e.clientY - rect.top - size / 2 + "px";
    el.appendChild(ink);
    setTimeout(() => ink.remove(), 650);
  });
}

/* ================= REVEAL ================= */
function initReveal() {
  const els = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el, i) => {
    if (!el.hasAttribute("data-delay")) el.setAttribute("data-delay", String((i % 4)));
    io.observe(el);
  });
}

/* ================= COUNTERS ================= */
function initCounters() {
  const counters = $$(".counter");
  if (!counters.length) return;
  const run = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (prefersReducedMotion) { el.textContent = target; return; }
    const dur = 1200, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => io.observe(c));
}

/* ================= TYPING ================= */
function initTyping() {
  const el = $("#typed-role");
  if (!el || prefersReducedMotion) return;
  const phrases = ["Web Developer & UI Designer", "Next.js • Flutter • Node.js", "Mahasiswa Informatika — Alma Ata"];
  let pi = 0, ci = phrases[0].length, deleting = true;
  // mulai dari teks penuh lalu hapus → ketik ulang (efek hidup)
  const tick = () => {
    const cur = phrases[pi];
    if (deleting) {
      ci--;
      el.textContent = cur.slice(0, ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 350); return; }
      setTimeout(tick, 32);
    } else {
      ci++;
      el.textContent = phrases[pi].slice(0, ci);
      if (ci === phrases[pi].length) { deleting = true; setTimeout(tick, 2200); return; }
      setTimeout(tick, 60);
    }
  };
  setTimeout(tick, 2500);
}

/* ================= PROJECTS ================= */
function projectCard(p) {
  const links = [
    p.github ? `<a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub — ${p.title}"><i class="fab fa-github"></i></a>` : "",
    p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Demo — ${p.title}"><i class="fas fa-external-link-alt"></i></a>` : "",
  ].join("");
  return `
  <article class="project-card" data-cat="${p.category}">
    <div class="p-img">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      <div class="p-links">${links}</div>
    </div>
    <div class="p-body">
      <span class="p-cat">${p.catLabel}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="p-tech">${p.technologies.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="p-metrics">
        ${p.metrics.map((m) => `<div class="p-metric"><i class="${m.icon}"></i><strong>${m.value}</strong><small>${m.label}</small></div>`).join("")}
      </div>
    </div>
  </article>`;
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  grid.innerHTML = projectsData.map(projectCard).join("");
  initRevealCards(grid);
}

function initRevealCards(grid) {
  // entrance stagger via card-in (bukan .reveal, agar tak konflik dengan hover)
  $$(".project-card", grid).forEach((c, i) => {
    c.classList.add("card-in");
    if (!prefersReducedMotion) c.style.animationDelay = (i * 0.07) + "s";
  });
}

function initFilters() {
  const btns = $$(".filter-btn");
  const grid = $("#project-grid");
  if (!btns.length || !grid) return;
  btns.forEach((btn) => btn.addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    const cards = $$(".project-card", grid);
    cards.forEach((card) => {
      const show = f === "all" || card.dataset.cat === f;
      if (show) {
        card.classList.remove("gone");
        // paksa reflow agar transisi fade-in jalan
        void card.offsetWidth;
        card.classList.remove("filter-hide");
      } else {
        card.classList.add("filter-hide");
        setTimeout(() => { if (card.classList.contains("filter-hide")) card.classList.add("gone"); }, prefersReducedMotion ? 0 : 300);
      }
    });
  }));
}

/* ================= CERTIFICATES + LIGHTBOX ================= */
function renderCertificates() {
  const grid = $("#cert-grid");
  if (!grid) return;
  grid.innerHTML = certificatesData.map((c, i) => `
    <article class="cert-card card-in" ${prefersReducedMotion ? "" : `style="animation-delay:${i * 0.08}s"`} data-full="${c.image}" data-title="${c.title} — ${c.issuer} (${c.year})" tabindex="0" role="button" aria-label="Lihat sertifikat ${c.title}">
      <img src="${c.image}" alt="${c.title}" loading="lazy" />
      <div class="cert-body">
        <h3>${c.title}</h3>
        <p>${c.issuer} · <span class="mono">${c.year}</span></p>
      </div>
    </article>`).join("");
  $$(".cert-card", grid).forEach((card) => {
    const open = () => openLightbox(card.dataset.full, card.dataset.title);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  initReveal();
}

function openLightbox(src, title) {
  const lb = $("#lightbox");
  $("#lightbox-img").src = src;
  $("#lightbox-img").alt = title;
  $("#lightbox-cap").textContent = title;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  $("#lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function initLightbox() {
  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
}

/* ================= COPY EMAIL ================= */
function initCopyEmail() {
  const btn = $("#copy-email");
  const emailEl = $("#contact-email");
  if (!btn || !emailEl) return;
  btn.addEventListener("click", async () => {
    const text = emailEl.textContent.trim();
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand("copy"); } catch (__) {}
      ta.remove();
    }
    const label = btn.querySelector("span");
    btn.classList.add("copied");
    if (label) label.textContent = ok ? "Tersalin ✓" : "Gagal";
    setTimeout(() => { btn.classList.remove("copied"); if (label) label.textContent = "Salin"; }, 1800);
  });
}

/* ================= GITHUB STATS =================
   Angka di HTML sudah nilai asli (terverifikasi via API).
   Refresh hanya jika API valid; gagal = biarkan statis. */
function setTextIfValid(id, v) {
  const el = document.getElementById(id);
  if (el && v !== undefined && v !== null && v !== "") el.textContent = v;
}
async function refreshGitHubStats() {
  const u = "wahyuadratama";
  try {
    const r = await fetch(`https://api.github.com/users/${u}`);
    if (!r.ok) throw new Error("HTTP " + r.status);
    const d = await r.json();
    if (typeof d.public_repos !== "number") throw new Error("invalid");
    const r2 = await fetch(`https://api.github.com/users/${u}/repos?per_page=100`);
    if (!r2.ok) throw new Error("HTTP " + r2.status);
    const repos = await r2.json();
    if (!Array.isArray(repos)) throw new Error("invalid");
    const stars = repos.reduce((a, x) => a + (x.stargazers_count || 0), 0);
    setTextIfValid("github-repos", d.public_repos);
    setTextIfValid("github-stars", stars);
    setTextIfValid("github-followers", d.followers);
    if (d.avatar_url) $("#github-avatar").src = d.avatar_url;
    setTextIfValid("github-name", d.name || u);
    setTextIfValid("github-username", "@" + d.login);
    setTextIfValid("github-bio", d.bio);
    setTextIfValid("github-location", d.location);
  } catch (e) {
    console.warn("GitHub stats: memakai angka statis.", e.message);
  }
}

/* ================= INIT ================= */
function init() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }
  try {
    initTheme();
    initNav();
    initRipple();
    renderProjects();
    initFilters();
    renderCertificates();
    initLightbox();
    initReveal();
    initCounters();
    initTyping();
    initCopyEmail();
    refreshGitHubStats();
    console.log("Portfolio initialized.");
  } catch (e) {
    console.error("Init error:", e);
  }
}
init();
