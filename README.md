# 🌐 Portfolio Website

## Overview

This project is a **personal portfolio website** developed by **Amir Shaaban** to showcase front-end development skills and design capabilities.  
The project adheres to **BEM (Block Element Modifier)** methodology and the **7-1 Sass architecture**, ensuring a clean, scalable, and maintainable codebase.

It demonstrates advanced styling practices using **Sass**, **PostCSS**, and **CSS optimization pipelines**, as well as interactive UI components written in **vanilla JavaScript**.

---

## 🧩 Tech Stack

| Category               | Technologies                                         |
| ---------------------- | ---------------------------------------------------- |
| **Frontend**           | HTML5, CSS3, JavaScript (ES6)                        |
| **Preprocessor**       | Sass (SCSS Syntax)                                   |
| **Methodology**        | BEM                                                  |
| **Architecture**       | 7-1 Sass Architecture                                |
| **Build Tools**        | Node.js, npm-run-all, PostCSS, cssnano, Autoprefixer |
| **Development Server** | live-server                                          |

---

## 🧱 Project Structure

```bash
portfolio/
│
├── public/
│ ├── css/
│ │ ├── style.css
│ │ ├── style.prefix.css
│ │ └── style.comp.css
│ ├── js/
│ └── index.html
│
├── sass/
│ ├── abstracts/
│ ├── base/
│ ├── components/
│ ├── layout/
│ ├── pages/
│ ├── themes/
│ └── vendors/
│ └── main.scss
│
├── package.json
└── README.md
```

The project follows the **7-1 architecture** convention:

- `abstracts/`: variables, mixins, and functions.
- `base/`: global styles, resets, and typography.
- `components/`: reusable UI elements (buttons, cards, forms).
- `layout/`: grid, header, footer, navigation, and overall layout.
- `pages/`: page-specific styles.
- `themes/`: theme-related rules (dark/light).
- `vendors/`: external library overrides.

---

## ⚙️ NPM Scripts

| Script         | Command                                                                  | Description                                              |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `watch:sass`   | `sass sass/main.scss public/css/style.css -w`                            | Watches and compiles Sass to CSS in real time.           |
| `devserver`    | `live-server public`                                                     | Runs a live development server.                          |
| `start`        | `npm-run-all --parallel devserver watch:sass`                            | Runs both the live server and Sass watcher concurrently. |
| `compile:sass` | `sass sass/main.scss public/css/style.comp.css`                          | Compiles Sass files once into CSS.                       |
| `prefix:css`   | `postcss public/css/style.comp.css -o public/css/style.prefix.css`       | Adds vendor prefixes using Autoprefixer.                 |
| `compress:css` | `postcss public/css/style.prefix.css -u cssnano -o public/css/style.css` | Compresses CSS using cssnano.                            |
| `build:css`    | `npm-run-all compile:sass prefix:css compress:css`                       | Full production build of CSS assets.                     |

---

## 🧠 Key Concepts

- **BEM Methodology**: Provides clear and modular class naming conventions.
- **7-1 Sass Architecture**: Promotes scalability and organized file structure.
- **PostCSS Pipeline**: Automates prefixing and compression for optimized output.
- **Modular Sass Code**: Ensures maintainability and reusability across components.
- **Responsive Design**: Fully adaptable layout across devices and screen sizes.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmirAhmedShaaban/My-Portfolio.git
cd portfolio
```

🚀 Getting Started

1️⃣ Install Dependencies

To install all required packages, run:

```bash
npm install
```

2️⃣ Run Development Server

To start the development environment, execute:

```bash
npm start
```

This will launch both the live-server and the Sass watcher simultaneously, allowing real-time updates during development.

🧩 Build for Production

3️⃣ Generate Optimized CSS

To create the production-ready CSS build, run:

```bash
npm run build:css
```

This command compiles, prefixes, and minifies the CSS files to ensure the best performance in production environments.

🪪 License & Attribution

This project is licensed under the ISC License.
You are free to use, modify, and adapt the project with proper credit to the original author.

⚠️ Disclaimer:
This project is the intellectual property of Amir Shaaban.
Any use that fails to attribute proper credit, claims authorship, or employs the project for educational/training purposes without explicit permission will be considered an infringement of intellectual property rights.

👤 Author

Amir Shaaban
Front-End Developer & UI/UX Enthusiast
📍 Egypt
📧 amirahmed896123@gmail.com

⭐ Contributing

Contributions are welcome.
If you wish to enhance or fix something, please fork the repository, create a feature branch, and submit a pull request.

© 2025 Amir Shaaban — All rights reserved.
