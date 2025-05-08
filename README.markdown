# Tønsberg Sykkelservice AS

## Overview
Tønsberg Sykkelservice AS is a responsive HTML website promoting a bike service, rental, and sales business in Tønsberg, Norway. It features a video hero, service cards, a testimonial slider, and contact information. Built with Alpine.js for interactivity, Font Awesome icons, and Google Fonts for a modern design.

## Features
- **Responsive Navigation**: Mobile-friendly menu with links to Home, Services, Bikes, Rentals, and Contact.
- **Video Hero**: Autoplaying background video highlighting cycling in Tønsberg.
- **Service Cards**: Showcases bike sales, rentals, and repair services with links to detailed pages.
- **Testimonial Slider**: Displays customer reviews with Alpine.js-powered navigation.
- **Footer**: Includes contact details, opening hours, social media links, and legal navigation.
- **Accessibility**: Uses ARIA labels and semantic HTML for better accessibility.
- **SEO**: Meta description for search engine visibility.

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Internet connection for external resources:
  - Font Awesome (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`)
  - Google Fonts (`Inter`)
  - Alpine.js (`https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js`)
- Local assets:
  - `css/style.css`
  - `js/main.js`
  - `videos/4.mp4`

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `css/style.css`: Main stylesheet.
   - `js/main.js`: JavaScript for additional interactivity.
   - `videos/4.mp4`: Hero background video.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the homepage.
2. **Interface**:
   - **Navigation**: Click links to explore Services, Bikes, Rentals, or Contact pages.
   - **Hero Section**: View the background video and click "Se våre tjenester" to visit the services page.
   - **Services**: Browse cards for bike sales, rentals, and repairs with links to details.
   - **Testimonials**: Navigate customer reviews using slider buttons.
   - **Footer**: Access contact info, hours, social media, or legal links.
3. **Actions**:
   - Toggle the mobile menu using the hamburger button.
   - Click service links (e.g., "Se vårt utvalg", "Book nå") to visit relevant pages.
   - Interact with the testimonial slider to view customer feedback.

## File Structure
- `index.html`: Homepage with hero, services, testimonials, and footer.
- `css/style.css`: Custom styles for layout, responsiveness, and animations.
- `js/main.js`: JavaScript for interactivity (e.g., module-based functionality).
- `videos/4.mp4`: Background video for the hero section.
- `README.md`: This file, providing project documentation.

## Notes
- The `js/main.js` file is assumed to handle additional interactivity (e.g., animations, event listeners).
- The background video (`4.mp4`) should be optimized for web to reduce load times.
- Placeholder links (e.g., social media, "Explore More") require backend integration for functionality.
- The site is in Norwegian (`lang="no"`) with localized content for Tønsberg.
- Alpine.js powers the testimonial slider and mobile menu toggle; ensure it loads correctly.
- Ensure CORS support for external resources if hosted on a server.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.