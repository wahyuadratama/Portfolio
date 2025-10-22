// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Dynamic loading of project cards
const projectData = [
  {
    title: "Personal Budget Calculator",
    description:
      "a simple offline desktop application to track income and expense. Built with Python + Thinker.",
    image: "offline kalkulator.png",
  },
  {
    title: "Dynamic To-Do List Web Application",
    description:
      "This is a modern, simple and dynamic To-Do List Web application built using HTML, CSS and JAVA SCRIPT.",
    image: "todolist.png",
  },
  // Add more project data as needed
];

const projectGrid = document.querySelector(".project-grid");

projectData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;

  projectGrid.appendChild(projectCard);
});

const timeline = document.querySelector(".timeline");

timelineData.forEach((item) => {
  const timelineCard = document.createElement("div");
  timelineCard.classList.add("timeline-card");

  timelineCard.innerHTML = `
        <h3>${item.title} <span>${item.date}</span></h3>
        <p>${item.details}</p>
    `;

  timeline.appendChild(timelineCard);
});

document.getElementById('addProjectBtn').addEventListener('click', function() {
  alert('Fitur tambah project akan datang! 🚀');
});

document.getElementById('addCertBtn').addEventListener('click', function() {
  alert('Fitur tambah sertifikat akan datang! 🏆');
});

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addCertBtn");
  const form = document.getElementById("certForm");
  const saveBtn = document.getElementById("saveCert");
  const cancelBtn = document.getElementById("cancelCert");
  const certGrid = document.getElementById("certGrid");

  let certificates = JSON.parse(localStorage.getItem("certificates")) || [];

  function renderCertificates() {
    certGrid.innerHTML = "";
    certificates.forEach((cert, index) => {
      const card = document.createElement("div");
      card.classList.add("cert-card");
      card.innerHTML = `
        <button class="delete-cert" data-index="${index}">&times;</button>
        <img src="${cert.image}" alt="${cert.title}">
        <h3>${cert.title}</h3>
        <p>${cert.issuer} | ${cert.year}</p>
      `;
      certGrid.appendChild(card);
    });
  }

  renderCertificates();

  // Buka form
  addBtn.addEventListener("click", () => {
    form.style.display = "block";
  });

  // Tutup form
  cancelBtn.addEventListener("click", () => {
    form.style.display = "none";
  });

  // Simpan sertifikat baru
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("certTitle").value.trim();
    const issuer = document.getElementById("certIssuer").value.trim();
    const year = document.getElementById("certYear").value.trim();
    const image = document.getElementById("certImage").value.trim();

    if (!title || !issuer || !year || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const newCert = { title, issuer, year, image };
    certificates.push(newCert);
    localStorage.setItem("certificates", JSON.stringify(certificates));
    renderCertificates();

    form.style.display = "none";
    form.querySelectorAll("input").forEach((i) => (i.value = ""));
  });

  // Hapus sertifikat
  certGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-cert")) {
      const index = e.target.dataset.index;
      certificates.splice(index, 1);
      localStorage.setItem("certificates", JSON.stringify(certificates));
      renderCertificates();
    }
  });
});
