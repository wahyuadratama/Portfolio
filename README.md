# 🌐 Modern Portfolio Website - Zaenal Wahyudin

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Overview

A modern, responsive, and interactive portfolio website showcasing my skills, projects, and achievements as a web developer and UI designer. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and user experience.

🔗 **Live Website:** [Portfolio Demo](https://zaenalwahyudin.github.io/portfolio/)

---

## ✨ Features

### 🎨 **Modern Design**

- Clean and professional interface
- Smooth animations and transitions
- Gradient backgrounds and modern typography
- Responsive design for all devices

### 📱 **Fully Responsive**

- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly navigation
- Adaptive layouts

### 🔧 **Interactive Elements**

- Dynamic project filtering
- Certificate management system
- Contact form with validation
- Smooth scrolling navigation
- Loading animations

### ⚡ **Performance Optimized**

- Lazy loading for images
- Debounced scroll events
- Minimal JavaScript bundle
- Optimized CSS animations

### 🎯 **Accessibility Features**

- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

---

## 🛠️ Tech Stack

| Technology            | Purpose               | Version    |
| --------------------- | --------------------- | ---------- |
| **HTML5**             | Structure & Semantics | Latest     |
| **CSS3**              | Styling & Animations  | Latest     |
| **JavaScript (ES6+)** | Interactivity & Logic | ES2020+    |
| **Font Awesome**      | Icons                 | 6.5.0      |
| **Google Fonts**      | Typography            | Inter Font |

---

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main HTML file
├── 📁 css/
│   ├── 🎨 style.css          # Main stylesheet
│   └── 📜 styles-old.css     # Legacy styles (backup)
├── 📁 js/
│   ├── ⚡ main.js            # Main JavaScript file
│   └── 📜 script-old.js      # Legacy script (backup)
├── 📁 images/
│   ├── 🖼️ profil1.jpg       # Profile image
│   ├── 🏆 CER*.png          # Certificate images
│   ├── 💼 *.png             # Project screenshots
│   └── 🎯 favicon2.png      # Favicon
├── 📁 Assets/               # Additional assets
└── 📖 README.md            # Documentation
```

---

## 🚀 Quick Start

### 1. **Clone Repository**

```bash
git clone https://github.com/zaenalwahyudin/portfolio.git
cd portfolio
```

````bash
git add .
git commit -m "Deskripsi perubahan"
git push origin main

### 2. **Open in Browser**
```bash
# Simply open index.html in your browser
# Or use a local server for better experience
python -m http.server 8000
# Then visit: http://localhost:8000
````

### 3. **Customize Content**

- Edit personal information in `index.html`
- Update project data in `js/main.js`
- Replace images in `images/` folder
- Modify styles in `css/style.css`

---

## 🎨 Customization Guide

### **Personal Information**

Update the following sections in `index.html`:

- Hero section (name, title, description)
- About section (bio, skills, stats)
- Contact information
- Social media links

### **Projects**

Modify the `projectsData` array in `js/main.js`:

```javascript
const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    image: "images/your-image.png",
    category: "web", // web, ui, mobile
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/...",
    demo: "https://your-demo.com",
  },
];
```

### **Certificates**

Update the `certificatesData` array in `js/main.js`:

```javascript
const certificatesData = [
  {
    id: 1,
    title: "Certificate Title",
    issuer: "Issuing Organization",
    year: "2024",
    image: "images/certificate.png",
  },
];
```

### **Styling**

Customize colors and fonts in `css/style.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #ffffff;
}
```

---

## 📱 Responsive Breakpoints

| Device      | Breakpoint    | Layout                          |
| ----------- | ------------- | ------------------------------- |
| **Mobile**  | < 480px       | Single column, stacked elements |
| **Tablet**  | 481px - 768px | Two columns, adjusted spacing   |
| **Desktop** | > 768px       | Full grid layout, all features  |

---

## 🔧 Features in Detail

### **Navigation System**

- Sticky navigation with scroll effects
- Mobile hamburger menu
- Smooth scrolling to sections
- Active link highlighting

### **Portfolio Filtering**

- Filter projects by category
- Smooth animations during filtering
- Responsive grid layout
- Lazy loading for images

### **Certificate Management**

- Add new certificates via modal
- Local storage persistence
- Delete functionality
- Form validation

### **Contact Form**

- Form validation
- Integration with Formspree
- Success/error notifications
- Responsive design

---

## 🚀 Deployment

### **GitHub Pages**

1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select source branch (main)
5. Your site will be available at: `https://username.github.io/portfolio/`

### **Netlify**

1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy automatically on push

### **Vercel**

1. Import your GitHub repository
2. Configure project settings
3. Deploy with zero configuration

---

## 📤 Panduan Update ke GitHub

### **Setup Awal (Hanya Sekali)**

#### 1. **Install Git**

```bash
# Download dan install Git dari:
# https://git-scm.com/downloads

# Verifikasi instalasi
git --version
```

#### 2. **Konfigurasi Git**

```bash
# Set username dan email
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"

# Verifikasi konfigurasi
git config --list
```

#### 3. **Inisialisasi Repository (Jika Belum Ada)**

```bash
# Masuk ke folder portfolio
cd c:\portfolio

# Inisialisasi git
git init

# Tambahkan remote repository
git remote add origin https://github.com/username/portfolio.git
```

---

### **Update Rutin ke GitHub**

#### **Metode 1: Update Lengkap (Recommended)**

```bash
# 1. Cek status perubahan
git status

# 2. Tambahkan semua perubahan
git add .

# 3. Commit dengan pesan
git commit -m "Update portfolio - tambah project baru"

# 4. Push ke GitHub
git push origin main
```

#### **Metode 2: Update File Spesifik**

```bash
# Tambahkan file tertentu saja
git add index.html
git add css/style.css
git add js/main.js

# Commit dan push
git commit -m "Update halaman utama dan styling"
git push origin main
```

#### **Metode 3: Update dengan Branch (Advanced)**

```bash
# Buat branch baru untuk fitur
git checkout -b feature/new-design

# Lakukan perubahan, lalu commit
git add .
git commit -m "Redesign hero section"

# Push branch baru
git push origin feature/new-design

# Merge ke main setelah review
git checkout main
git merge feature/new-design
git push origin main
```

---

### **Pesan Commit yang Baik**

```bash
# ✅ BAIK - Jelas dan deskriptif
git commit -m "Tambah section testimonial di homepage"
git commit -m "Fix responsive bug pada mobile navigation"
git commit -m "Update foto profil dan CV terbaru"
git commit -m "Tambah 3 project baru: E-commerce, Blog, Dashboard"

# ❌ BURUK - Tidak jelas
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

---

### **Troubleshooting**

#### **Problem: Push Ditolak**

```bash
# Solusi: Pull dulu, lalu push
git pull origin main --rebase
git push origin main
```

#### **Problem: Conflict saat Merge**

```bash
# 1. Lihat file yang conflict
git status

# 2. Edit file, hapus marker conflict (<<<<, ====, >>>>)
# 3. Tambahkan file yang sudah diperbaiki
git add .

# 4. Lanjutkan merge
git commit -m "Resolve merge conflict"
git push origin main
```

#### **Problem: Lupa Password/Token**

```bash
# Gunakan Personal Access Token (PAT)
# 1. Buat token di: GitHub Settings > Developer settings > Personal access tokens
# 2. Gunakan token sebagai password saat push

# Atau simpan credential
git config --global credential.helper store
```

#### **Problem: File Terlalu Besar**

```bash
# Tambahkan ke .gitignore
echo "node_modules/" >> .gitignore
echo "*.psd" >> .gitignore
echo "*.zip" >> .gitignore

git add .gitignore
git commit -m "Update gitignore"
```

---

### **Workflow Harian**

```bash
# Pagi: Mulai kerja
git pull origin main          # Ambil update terbaru

# Siang: Setelah selesai coding
git add .
git commit -m "Deskripsi perubahan"

# Sore: Sebelum selesai kerja
git push origin main          # Upload ke GitHub
```

---

### **Tips & Best Practices**

✅ **DO:**

- Commit sesering mungkin dengan pesan yang jelas
- Pull sebelum mulai coding
- Push setelah selesai sesi coding
- Gunakan branch untuk fitur besar
- Review perubahan sebelum commit (`git diff`)

❌ **DON'T:**

- Commit file yang tidak perlu (node_modules, .env)
- Push langsung ke main tanpa testing
- Gunakan pesan commit yang tidak jelas
- Lupa pull sebelum push
- Commit credential atau API keys

---

### **File .gitignore (Recommended)**

Buat file `.gitignore` di root folder:

```
# Dependencies
node_modules/
package-lock.json

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Build
dist/
build/

# Backup
*.backup
*.old
*-old.*

# Large files
*.psd
*.ai
*.zip
*.rar
```

---

### **GitHub Pages Auto-Deploy**

Setelah push ke GitHub, website otomatis update:

1. **Enable GitHub Pages:**
   - Buka repository di GitHub
   - Settings > Pages
   - Source: Deploy from branch
   - Branch: main / root
   - Save

2. **Akses Website:**
   - URL: `https://username.github.io/portfolio/`
   - Update otomatis setiap kali push

3. **Custom Domain (Optional):**
   ```bash
   # Tambahkan file CNAME
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

---

### **Cheat Sheet Perintah Git**

| Perintah                 | Fungsi                    |
| ------------------------ | ------------------------- |
| `git status`             | Cek status perubahan      |
| `git add .`              | Tambahkan semua perubahan |
| `git add <file>`         | Tambahkan file tertentu   |
| `git commit -m "pesan"`  | Commit dengan pesan       |
| `git push origin main`   | Upload ke GitHub          |
| `git pull origin main`   | Download dari GitHub      |
| `git log`                | Lihat history commit      |
| `git diff`               | Lihat perubahan detail    |
| `git branch`             | Lihat daftar branch       |
| `git checkout -b <name>` | Buat branch baru          |
| `git reset --hard HEAD`  | Batalkan semua perubahan  |
| `git clone <url>`        | Clone repository          |

---

## 🔍 SEO Optimization

- ✅ Semantic HTML structure
- ✅ Meta tags and descriptions
- ✅ Open Graph tags
- ✅ Structured data markup
- ✅ Optimized images with alt text
- ✅ Fast loading times
- ✅ Mobile-friendly design

---

## 🧪 Browser Support

| Browser     | Version | Support            |
| ----------- | ------- | ------------------ |
| **Chrome**  | 60+     | ✅ Full Support    |
| **Firefox** | 55+     | ✅ Full Support    |
| **Safari**  | 12+     | ✅ Full Support    |
| **Edge**    | 79+     | ✅ Full Support    |
| **IE**      | 11      | ⚠️ Limited Support |

---

## 📫 Contact

💼 **Name:** WahyuAdratama  
📧 **Email:** zaenalwahyudin270@gmail.com
🌐 **Portfolio:** [https://wahyuadratama.github.io/Portfolio/](https://wahyuadratama.github.io/Portfolio/)  
🔗 **GitHub:** [https://github.com/wahyuadratama](https://github.com/wahyuadratama)

---

## 📈 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

**Zaenal Wahyudin**

- 📧 Email: zaenalwahyudin@example.com
- 🌐 Portfolio: [zaenalwahyudin.github.io](https://zaenalwahyudin.github.io)
- 💼 LinkedIn: [linkedin.com/in/zaenal-wahyudin](https://linkedin.com/in/zaenal-wahyudin-39b3a3313/)
- 🐙 GitHub: [github.com/zaenalwahyudin](https://github.com/wahyuadratama)

---

## 🙏 Acknowledgments

- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Unsplash** for placeholder images
- **CSS Gradient** for gradient inspirations
- **MDN Web Docs** for technical references

---

## 📊 Changelog

### Version 2.0.0 (2025-01-XX)

- ✨ Complete redesign with modern UI
- 🚀 Improved performance and loading times
- 📱 Enhanced mobile responsiveness
- 🔧 Added certificate management system
- ⚡ Implemented lazy loading and animations
- 🎨 New color scheme and typography
- 🔍 SEO optimizations
- ♿ Accessibility improvements

### Version 1.0.0 (2024-XX-XX)

- 🎉 Initial release
- 📄 Basic portfolio structure
- 🎨 Simple CSS styling
- 📱 Basic responsive design

---

⭐ **If you like this portfolio, please give it a star!**  
Your feedback and support mean a lot 💙

---

<div align="center">
  <p>Made with ❤️ by Zaenal Wahyudin</p>
  <p>© 2025 All Rights Reserved</p>
</div>
