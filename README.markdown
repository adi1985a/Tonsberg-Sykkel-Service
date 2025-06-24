# 🚲🛠️ Tønsberg Sykkelservice AS: Bike Services Website 🇳🇴
_A responsive HTML website for a bike service, rental, and sales business in Tønsberg, Norway, featuring a video hero, service cards, a testimonial slider (Alpine.js), Font Awesome icons, and Norwegian content._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-77C1D2.svg?logo=alpine.js)](https://alpinejs.dev/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.x-528DD7.svg?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Inter-4285F4.svg?logo=googlefonts)](https://fonts.google.com/specimen/Inter)

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

**Tønsberg Sykkelservice AS** is a responsive HTML-based website designed to promote a bicycle service, rental, and sales business located in Tønsberg, Norway. The site aims to attract customers by showcasing its offerings through a dynamic video hero section, clear service cards, and a customer testimonial slider. Built with a focus on modern web practices, it utilizes **Alpine.js** for client-side interactivity (like the testimonial slider and mobile menu), **Font Awesome** for iconography, and the "Inter" **Google Font** for typography. All content is presented in Norwegian, tailored to the local market.

## ✨ Key Features

*   📱 **Responsive Design**: Built to adapt seamlessly to various screen sizes (desktops, tablets, mobile phones), likely using CSS flexbox, grid, and media queries within `css/style.css`.
*   🧭 **Mobile-Friendly Navigation**:
    *   A clear navigation menu with links to "Hjem" (Home), "Tjenester" (Services), "Sykler" (Bikes), "Utleie" (Rentals), and "Kontakt" (Contact).
    *   Includes a hamburger button for toggling the menu on smaller screens, likely powered by Alpine.js or custom JavaScript in `js/main.js`.
*   🎬 **Video Hero Section**:
    *   Features an autoplaying background video (`videos/4.mp4`) showcasing cycling or scenes relevant to Tønsberg, creating an engaging first impression.
    *   Includes overlay text and a call-to-action button like "Se våre tjenester" (See our services).
*   🛠️ **Service Cards**:
    *   Clearly presents the core business offerings: Bike Sales ("Salg av sykler"), Rentals ("Sykkelutleie"), and Repairs ("Reparasjon og service").
    *   Each card typically includes a brief description and a link (e.g., "Se vårt utvalg," "Book nå") to a more detailed page or section (currently placeholders).
*   💬 **Testimonial Slider**:
    *   Displays customer reviews or testimonials in a slideshow format.
    *   Navigation for the slider (e.g., previous/next buttons) is powered by **Alpine.js**, allowing users to cycle through different testimonials.
*   🦶 **Comprehensive Footer**:
    *   Contains essential business information: contact details (address, phone, email), opening hours.
    *   Links to social media profiles (using Font Awesome icons).
    *   Navigation links for legal pages (e.g., privacy policy, terms of service - placeholders).
*   ♿ **Accessibility Considerations**:
    *   Employs ARIA (Accessible Rich Internet Applications) labels and semantic HTML elements to improve accessibility for users with disabilities.
*   🔍 **SEO Meta Tags**:
    *   Includes a meta description tag to provide a concise summary for search engines, enhancing visibility.
*   🎨 **Modern Styling & Typography**:
    *   Styled with a custom stylesheet (`css/style.css`).
    *   Utilizes Font Awesome for a wide range of scalable vector icons.
    *   Employs the "Inter" Google Font for clean and modern typography.
*   🇳🇴 **Norwegian Content**: The entire website content and UI text are in Norwegian (`lang="no"`), specifically targeting the Tønsberg locale.

## 🖼️ Screenshots (Conceptual)

**Coming soon!**

_This section would ideally show screenshots of: the website's homepage featuring the video hero, the service cards, the Alpine.js powered testimonial slider in action, the responsive mobile menu, and the footer._

## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`css/style.css`)
*   **Interactivity**: JavaScript (ES6+ via `js/main.js`), Alpine.js (v3.x.x via CDN)
*   **Icons**: Font Awesome (v6.x via CDN)
*   **Fonts**: Google Fonts (Inter)

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Internet Connection**: **Required** to load external resources:
    *   Font Awesome CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
    *   Google Fonts (Inter)
    *   Alpine.js CDN: `https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js`
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

1.  Open `index.html` in your web browser (ensure an internet connection for CDN-hosted resources like Font Awesome, Google Fonts, and Alpine.js).
2.  **Interface**:
    *   **Navigation Menu**: Click on links like "Hjem," "Tjenester," "Sykler," "Utleie," or "Kontakt" to navigate to (potentially placeholder or section-linked) parts of the site.
    *   **Hero Section**: Observe the autoplaying background video. Click the "Se våre tjenester" button to (presumably) navigate to the services page/section.
    *   **Service Cards**: Browse the cards for bike sales, rentals, and repairs. Click links like "Se vårt utvalg" or "Book nå" to (presumably) go to more detailed pages (currently placeholders).
    *   **Testimonials**: Use the previous/next buttons on the slider to navigate through different customer reviews. This interactivity is powered by Alpine.js.
    *   **Footer**: Access contact information, opening hours, social media links (placeholders), or legal page links (placeholders).
3.  **Actions**:
    *   **Mobile Menu**: On smaller screens, a hamburger button should appear. Click it to toggle the display of the mobile navigation menu (functionality likely handled by Alpine.js or `js/main.js`).
    *   Interact with the testimonial slider.
    *   Click on various links and buttons. Most will be placeholders leading to "#" or non-existent pages until further implemented.

## 🗂️ File Structure

The project is expected to have the following basic file structure:

*   `index.html`: The main HTML file for the homepage, containing all sections like hero, services, testimonials, and footer.
*   `css/` (subfolder):
    *   `style.css`: The primary custom CSS file for styling the layout, responsiveness, and visual elements.
*   `js/` (subfolder):
    *   `main.js`: Custom JavaScript file for additional interactivity (e.g., advanced animations, event listeners beyond Alpine.js capabilities).
*   `videos/` (subfolder):
    *   `4.mp4`: The background video file used in the hero section.
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **Norwegian Language**: The entire website content and UI text are in Norwegian (`lang="no"`), tailored for the Tønsberg market.
*   **`js/main.js` Functionality**: The specific interactive features handled by `js/main.js` (beyond what Alpine.js might cover for the slider or mobile menu) are assumed but not detailed. This file needs to be implemented for any custom JavaScript logic.
*   **Video Optimization**: The background video (`videos/4.mp4`) should be optimized for web delivery (e.g., compressed, appropriate format like WebM or MP4 with H.264 codec) to minimize load times and ensure smooth playback.
*   **Placeholder Links**: Many links (e.g., detailed service pages, specific bike/rental pages, social media URLs, legal pages) are currently placeholders. These require corresponding pages to be created or valid URLs to be inserted for full functionality.
*   **Alpine.js Dependency**: The testimonial slider and potentially the mobile menu toggle rely on Alpine.js. Ensure the CDN link is correct and accessible for these features to work.
*   **CORS (Cross-Origin Resource Sharing)**: The note about CORS support is relevant if external resources (beyond standard CDNs like Google Fonts or Font Awesome, which are usually configured for wide access) are fetched via JavaScript, or if the site is hosted on one domain and tries to fetch resources from another. For typical static site hosting with CDN assets, this is usually not an issue.

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
