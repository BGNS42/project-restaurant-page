# 🍽️ Restaurant Page - The Odin Project Full Stack JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Webpack](https://img.shields.io/badge/Webpack-bundler-blue)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-green)
![MIT License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Project Overview

This is the **Restaurant Page** project built as part of *The Odin Project’s Full Stack JavaScript curriculum*.  
The goal of this assignment was to practice **DOM manipulation** by dynamically generating all website content using **JavaScript modules** and bundling the app with **Webpack** — *no static HTML content besides the root template*.

Instead of hard-coding HTML in the original file, **all elements — including navigation, homepage, menu, and contact sections — are built dynamically through JavaScript** and appended to the DOM on user interaction.

---

## ✨ Features

- 🧠 **Dynamic Content Generation:** Page sections (Home, Menu, Contact) are created entirely via JavaScript modules.  
- 🛠️ **Tabbed Navigation:** Clicking on navigation tabs swaps the content without a full page reload.  
- 📦 **Webpack Bundling:** JavaScript modules and assets are bundled using Webpack for efficient loading and modular structure. 
- 🎯 **Modular Architecture:** Each “tab” exports a function that constructs its section and appends it to the DOM. 
- ⚡ **Live Navigation:** Event listeners handle dynamic content swapping for a seamless single-page experience.  

---

## 🛠️ Technologies Used

- **JavaScript (ES6 Modules)** – For dynamic DOM creation and navigation logic.
- **Webpack** – Module bundler to compile source into `dist/`.
- **HTML5 & CSS3** – Layout structure and styling. 
- **npm** – Dependency and script management.

---

## 🧠 What I Learned & Reinforced

This project was a great opportunity to strengthen core front-end and tooling skills:

- 🔹 **DOM Manipulation:** Practiced constructing page content programmatically.  
- 🔹 **Module Structure:** Split logic into reusable JavaScript modules (Home, Menu, Contact).  
- 🔹 **Event Handling:** Managed navigation clicks to re-render content without refresh.  
- 🔹 **Webpack Configuration:** Learned to configure entry/output and bundle scripts.  
- 🔹 **Deployment with Pages:** Set up the `gh-pages` branch to serve the compiled `dist/` folder.  

---


## 📁 Project Structure

The project is organized using a modular JavaScript architecture, separating responsibilities into small, focused files. This approach improves readability, scalability, and maintainability.

```text
project-restaurant-page/
├── dist/
│   └── index.html # Compiled Webpack output (production build)
├── src/
│    assets/
│   │   ├── bg.jpg
│   │   └── map.png
|   ├── components/
│   │   ├── DivTitleTxt.js
│   │   ├── MenuItem.js
│   │   └── pageLoad.js
|   ├── pages/
│   │   ├── contact.js # Contact tab module
│   │   ├── home.js # Home tab module
│   │   └── menu.js # Menu tab module
│   ├── style/
│   │   ├── pages.css
│   │   └── styles.css # CSS base styling
│   ├── index.js # Main entry & navigation logic
│   └── template.html # Root HTML template used during build
├── webpack.config.js
└── package.json
```

---

## 🧩 How It Works

1. **Webpack bundles the source files** and outputs everything into `dist/`.  
2. The page is served from the compiled `index.html` in `dist/`. 
3. JavaScript modules create and inject DOM elements dynamically based on user navigation.

---

## ⚙️ How to Run It Locally

To run this project on your machine:


- Clone the repo
git clone https://github.com/BGNS42/project-restaurant-page.git

- Navigate to project directory
```
cd project-restaurant-page
```

- Install dependencies
```
npm install
```

- Start the dev server
```
npm start
```

- Then open http://localhost:8080 in your browser to view the restaurant page.

Or try it [LIVE!](https://bgns42.github.io/project-restaurant-page/)

---

## 📦 Deployment

This project is deployed on GitHub Pages from the `gh-pages` branch.
The compiled `dist/index.html` is served as the site root.
Your live site link appears on the repository page under the “pages” badge.

---

## 🧑‍💻 Author

[BGNS42](https://github.com/BGNS42)

Feel free to explore my GitHub profile and other projects!

--- 

## 📄 License

This project is open-source and available under the [MIT License](project-restaurant-page/LICENSE).