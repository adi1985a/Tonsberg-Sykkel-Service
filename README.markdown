# 🚲🛠️ Tønsberg Sykkelservice AS: Bike Services Website 🇳🇴
_A responsive HTML website for a bike service, rental, and sales business in Tønsberg, Norway, featuring a video hero, service cards, a testimonial slider (Alpine.js), Font Awesome icons, AOS animations, and Norwegian content._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-77C1D2.svg?logo=alpine.js)](https://alpinejs.dev/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.x-528DD7.svg?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Inter-4285F4.svg?logo=googlefonts)](https://fonts.google.com/specimen/Inter)
[![AOS](https://img.shields.io/badge/AOS-2.3.1-FF6B6B.svg)](https://michalsnik.github.io/aos/)

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Setup & Viewing](#️-local-setup--viewing)
6.  [Website Usage & Navigation](#️-website-usage--navigation)
7.  [File Structure](#-file-structure)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**Tønsberg Sykkelservice AS** is a responsive HTML-based website designed to promote a bicycle service, rental, and sales business located in Tønsberg, Norway. The site aims to attract customers by showcasing its offerings through a dynamic video hero section, clear service cards, and a customer testimonial slider. Built with a focus on modern web practices, it utilizes **Alpine.js** for client-side interactivity (like the testimonial slider and mobile menu), **Font Awesome** for iconography, **AOS (Animate On Scroll)** for smooth animations, and the "Inter" **Google Font** for typography. All content is presented in Norwegian, tailored to the local market.

<br><br>
<p align="center">
  <img src="screenshots/1.gif" width="75%">
</p>
<p align="center">
  <img src="screenshots/2.gif" width="75%">
</p>
<p align="center">
  <img src="screenshots/3.gif" width="75%">
</p>
<p align="center">
  <img src="screenshots/4.gif" width="75%">
</p>
<p align="center">
  <img src="screenshots/5.gif" width="75%">
</p>
<p align="center">
  <img src="screenshots/6.gif" width="75%">
</p>


## ✨ Key Features

*   📱 **Responsive Design**: Built to adapt seamlessly to various screen sizes (desktops, tablets, mobile phones), using CSS flexbox, grid, and media queries within `css/style.css`.
*   🧭 **Mobile-Friendly Navigation**:
    *   A clear navigation menu with links to "Hjem" (Home), "Om oss" (About), "Tjenester" (Services), "Sykler" (Bikes), "Utleie" (Rentals), and "Kontakt" (Contact).
    *   Includes a hamburger button for toggling the menu on smaller screens, powered by Alpine.js.
*   🎬 **Video Hero Section**:
    *   Features an autoplaying background video (`videos/4.mp4`) showcasing cycling scenes relevant to Tønsberg, creating an engaging first impression.
    *   Includes overlay text, call-to-action buttons, and animated statistics showing customer satisfaction metrics.
*   🛠️ **Service Cards**:
    *   Clearly presents the core business offerings: Bike Sales ("Sykkel salg"), Rentals ("Sykkel utleie"), and Repairs ("Service og reparasjon").
    *   Each card includes detailed features and links to specific pages.
*   💬 **Testimonial Slider**:
    *   Displays customer reviews or testimonials in a slideshow format with auto-rotation.
    *   Navigation for the slider is powered by **Alpine.js** and custom JavaScript, allowing users to cycle through different testimonials.
*   🎭 **AOS Animations**: Smooth scroll-triggered animations throughout the site using the AOS (Animate On Scroll) library.
*   ⏳ **Loading Screen**: Professional loading screen with animated bicycle icon for better user experience.
*   ⬆️ **Scroll to Top Button**: Convenient button that appears when scrolling down, allowing users to quickly return to the top.
*   🦶 **Comprehensive Footer**:
    *   Contains essential business information: contact details (address, phone, email), opening hours.
    *   Links to social media profiles (using Font Awesome icons).
    *   Navigation links for legal pages (e.g., privacy policy, terms of service).
*   ♿ **Accessibility Considerations**:
    *   Employs ARIA (Accessible Rich Internet Applications) labels and semantic HTML elements to improve accessibility for users with disabilities.
*   🔍 **SEO Meta Tags**:
    *   Includes a meta description tag to provide a concise summary for search engines, enhancing visibility.
*   🎨 **Modern Styling & Typography**:
    *   Styled with a custom stylesheet (`css/style.css`).
    *   Utilizes Font Awesome for a wide range of scalable vector icons.
    *   Employs the "Inter" Google Font for clean and modern typography.
*   🇳🇴 **Norwegian Content**: The entire website content and UI text are in Norwegian (`lang="no"`), specifically targeting the Tønsberg locale.
*   📄 **Complete Page Structure**: Includes dedicated pages for all services: `om-oss.html`, `tjenester.html`, `sykler.html`, `utleie.html`, and `kontakt.html`.

## 🖼️ Screenshots (Conceptual)

_Screenshots of: the website's homepage featuring the video hero, the service cards, the Alpine.js powered testimonial slider in action, the responsive mobile menu, and the footer._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
  <img src="screenshots\7.jpg" width="300"/>
  <img src="screenshots\8.jpg" width="300"/>
  <img src="screenshots\9.jpg" width="300"/>
  <img src="screenshots\10.jpg" width="300"/>
  <img src="screenshots\11.jpg" width="300"/>
  <img src="screenshots\12.jpg" width="300"/>
  <img src="screenshots\14.jpg" width="300"/>
  <img src="screenshots\15.jpg" width="300"/>
  <img src="screenshots\16.jpg" width="300"/>
  <img src="screenshots\17.jpg" width="300"/>
  <img src="screenshots\18.jpg" width="300"/>
  <img src="screenshots\19.jpg" width="300"/>
  <img src="screenshots\20.jpg" width="300"/>
  <img src="screenshots\21.jpg" width="300"/>
  <img src="screenshots\22.jpg" width="300"/>
  <img src="screenshots\23.jpg" width="300"/>
  <img src="screenshots\24.jpg" width="300"/>
  <img src="screenshots\25.jpg" width="300"/>
  <img src="screenshots\26.jpg" width="300"/>
  <img src="screenshots\27.jpg" width="300"/>
  <img src="screenshots\28.jpg" width="300"/>
  <img src="screenshots\29.jpg" width="300"/>
  <img src="screenshots\30.jpg" width="300"/>
  <img src="screenshots\31.jpg" width="300"/>
  <img src="screenshots\32.jpg" width="300"/>
  <img src="screenshots\33.jpg" width="300"/>
</p>


## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`css/style.css`)
*   **Interactivity**: JavaScript (ES6+ via `js/main.js`), Alpine.js (v3.x.x via CDN)
*   **Animations**: AOS (Animate On Scroll) v2.3.1 via CDN
*   **Icons**: Font Awesome (v6.4.0 via CDN)
*   **Fonts**: Google Fonts (Inter)

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Internet Connection**: **Required** to load external resources:
    *   Font Awesome CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
    *   Google Fonts (Inter)
    *   Alpine.js CDN: `https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js`
    *   AOS Animation Library: `https://unpkg.com/aos@2.3.1/dist/aos.css` and `https://unpkg.com/aos@2.3.1/dist/aos.js`
*   **Local Assets**:
    *   `css/style.css` (main stylesheet)
    *   `js/main.js` (custom JavaScript for additional interactivity)
    *   `videos/4.mp4` (hero section background video)

## ⚙️ Local Setup & Viewing

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder).*

2.  **Ensure Asset Placement**:
    *   Verify that the `css/` folder contains `style.css`.
    *   Verify that the `js/` folder contains `main.js`.
    *   Verify that the `videos/` folder contains `4.mp4`.
    *   Ensure all paths in `index.html` to these local assets are correct.

3.  **Open in Browser or Host Locally**:
    *   **Directly in Browser**: You can usually open `index.html` directly in your web browser (File > Open File).
    *   **Using a Simple HTTP Server (Recommended for consistent behavior, especially if `js/main.js` involves fetching local resources or has complex pathing)**:
        If you have Python installed, navigate to the project's root directory in your terminal and run:
        ```bash
        python -m http.server 8000
        ```
        Then, open your web browser and go to `http://localhost:8000`.
    *   Alternatively, use any other local web server solution (e.g., Live Server extension in VS Code).

## 💡 Website Usage & Navigation

1.  Open `index.html` in your web browser (ensure an internet connection for CDN-hosted resources like Font Awesome, Google Fonts, Alpine.js, and AOS).
2.  **Interface**:
    *   **Loading Screen**: Experience the professional loading animation with bicycle icon.
    *   **Navigation Menu**: Click on links like "Hjem," "Om oss," "Tjenester," "Sykler," "Utleie," or "Kontakt" to navigate to dedicated pages.
    *   **Hero Section**: Observe the autoplaying background video with animated statistics. Click the "Se våre tjenester" or "Kontakt oss" buttons to navigate to respective pages.
    *   **Service Cards**: Browse the cards for bike sales, rentals, and repairs. Click links to go to detailed pages.
    *   **Features Section**: View key business features with smooth AOS animations.
    *   **Testimonials**: Use the navigation buttons on the slider to cycle through different customer reviews. Auto-rotation occurs every 5 seconds.
    *   **CTA Section**: Call-to-action section encouraging user engagement.
    *   **Footer**: Access contact information, opening hours, social media links, and legal page links.
3.  **Actions**:
    *   **Mobile Menu**: On smaller screens, a hamburger button appears. Click it to toggle the display of the mobile navigation menu.
    *   **Scroll to Top**: Use the scroll-to-top button that appears when scrolling down.
    *   Interact with the testimonial slider and various animated elements.
    *   Navigate between different pages using the menu links.

## 🗂️ File Structure

The project has the following file structure:

*   `index.html`: The main HTML file for the homepage, containing all sections like hero, services, features, testimonials, and footer.
*   `om-oss.html`: About us page with company information and history.
*   `tjenester.html`: Services page with detailed service offerings.
*   `sykler.html`: Bikes page showcasing available bicycles for sale.
*   `utleie.html`: Rental page with rental options and booking information.
*   `kontakt.html`: Contact page with contact form and business information.
*   `css/` (subfolder):
    *   `style.css`: The primary custom CSS file for styling the layout, responsiveness, and visual elements.
    *   `scss/`: SCSS source files for advanced styling.
*   `js/` (subfolder):
    *   `main.js`: Custom JavaScript file for additional interactivity including loading screen, scroll-to-top, testimonials slider, form validation, and animations.
*   `videos/` (subfolder):
    *   `4.mp4`: The background video file used in the hero section.
*   `images/` (subfolder): Contains all website images and graphics.
*   `screenshots/` (subfolder): Website screenshots and GIFs for documentation.
*   `README.markdown`: This documentation file.

## 📝 Important Notes & Considerations

*   **Norwegian Language**: The entire website content and UI text are in Norwegian (`lang="no"`), tailored for the Tønsberg market.
*   **Complete Page Structure**: The website includes dedicated pages for all major sections, not just placeholders.
*   **Advanced JavaScript Features**: The `js/main.js` file includes comprehensive functionality for loading screen, scroll-to-top button, testimonial slider, form validation, parallax effects, and more.
*   **AOS Animations**: Smooth scroll-triggered animations enhance user experience throughout the site.
*   **Video Optimization**: The background video (`videos/4.mp4`) should be optimized for web delivery to minimize load times and ensure smooth playback.
*   **Alpine.js Integration**: The testimonial slider and mobile menu toggle rely on Alpine.js. Ensure the CDN link is correct and accessible for these features to work.
*   **Form Validation**: Contact forms include client-side validation for better user experience.
*   **Performance Optimizations**: The site includes lazy loading for images and other performance enhancements.

## 🤝 Contributing

Contributions to **Tønsberg Sykkelservice AS** website are welcome! If you have ideas for:

*   Implementing the placeholder pages and content.
*   Adding more interactive features with Alpine.js or `js/main.js`.
*   Improving CSS styling, responsiveness, or animations.
*   Optimizing the video or other assets for better performance.
*   Enhancing accessibility or SEO.

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourBikeServiceEnhancement`).
3.  Make your changes (HTML, CSS, JS, assets).
4.  Commit your changes (`git commit -m 'Feature: Implement YourBikeServiceEnhancement'`).
5.  Push to the branch (`git push origin feature/YourBikeServiceEnhancement`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions or feedback, please open an issue on the GitHub repository or contact the repository owner.

---
🚴 _Your premier destination for bike services in Tønsberg!_
