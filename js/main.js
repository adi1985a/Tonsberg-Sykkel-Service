// Inicjalizacja AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling dla anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Counter Animation dla statystyk
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, 0, finalValue, 2000);
                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => statsObserver.observe(stat));

    // Testimonials slider functionality
    const testimonialsSlider = document.getElementById('testimonials-slider');
    if (testimonialsSlider) {
        const testimonials = testimonialsSlider.querySelectorAll('.testimonial');
        const navButtons = testimonialsSlider.querySelectorAll('.nav-btn');
        let currentSlide = 0;

        function showSlide(slideIndex) {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Remove active class from all nav buttons
            navButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show current testimonial
            testimonials[slideIndex].classList.add('active');
            navButtons[slideIndex].classList.add('active');
            
            currentSlide = slideIndex;
        }

        // Add click event listeners to nav buttons
        navButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            const nextSlide = (currentSlide + 1) % testimonials.length;
            showSlide(nextSlide);
        }, 5000);

        // Initialize first slide
        showSlide(0);
    }

    // Parallax effect dla hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                showNotification('Vennligst fyll ut alle påkrevde felter', 'error');
            }
        });
    });

    // Hover effects dla service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Lazy loading dla obrazów
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Rental category filtering
    const rentalCards = document.querySelectorAll('.rental-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('@click').match(/selectedCategory = '(.+)'/)[1];
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter cards
                rentalCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease-in-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Rental card hover effects
    const rentalCardsElements = document.querySelectorAll('.rental-card');
    rentalCardsElements.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Price animation for rental cards
    const priceItems = document.querySelectorAll('.price-item.featured');
    priceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Bike search and filtering functionality
    const bikeSearchInput = document.querySelector('#bike-search');
    const bikeCards = document.querySelectorAll('.bike-card');
    const bikeSortSelect = document.querySelector('#bike-sort');
    
    if (bikeSearchInput) {
        bikeSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            bikeCards.forEach(card => {
                const bikeName = card.querySelector('.bike-name').textContent.toLowerCase();
                const bikeCategory = card.querySelector('.bike-category').textContent.toLowerCase();
                const bikeDescription = card.querySelector('.bike-description').textContent.toLowerCase();
                
                if (bikeName.includes(searchTerm) || 
                    bikeCategory.includes(searchTerm) || 
                    bikeDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    if (bikeSortSelect) {
        bikeSortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const bikeGrid = document.querySelector('.bikes-grid');
            const bikeCardsArray = Array.from(bikeCards);
            
            bikeCardsArray.sort((a, b) => {
                if (sortBy === 'price-low') {
                    const priceA = parseInt(a.querySelector('.bike-price').textContent.match(/\d+/)[0]);
                    const priceB = parseInt(b.querySelector('.bike-price').textContent.match(/\d+/)[0]);
                    return priceA - priceB;
                } else if (sortBy === 'price-high') {
                    const priceA = parseInt(a.querySelector('.bike-price').textContent.match(/\d+/)[0]);
                    const priceB = parseInt(b.querySelector('.bike-price').textContent.match(/\d+/)[0]);
                    return priceB - priceA;
                } else if (sortBy === 'name') {
                    const nameA = a.querySelector('.bike-name').textContent;
                    const nameB = b.querySelector('.bike-name').textContent;
                    return nameA.localeCompare(nameB);
                }
                return 0;
            });
            
            bikeCardsArray.forEach(card => {
                bikeGrid.appendChild(card);
            });
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherAnswer.style.maxHeight = '0';
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Smooth reveal animation for sections
    const revealObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, revealObserverOptions);

    // Observe all sections for reveal animation
    document.querySelectorAll('section').forEach(section => {
        revealObserver.observe(section);
    });

    // Enhanced form validation with real-time feedback
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Newsletter subscription with animation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                showNotification('Takk for din registrering!', 'success');
                this.reset();
                
                // Add success animation
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Registrert!';
                submitBtn.style.background = 'var(--success-color)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Registrer';
                    submitBtn.style.background = '';
                }, 3000);
            } else {
                showNotification('Vennligst skriv inn en gyldig e-postadresse', 'error');
            }
        });
    }

    // Image gallery lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                }
            });
        });
    });

    // Progress bar for page loading
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-primary);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Back to top button with smooth scroll
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile menu improvements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (mobileMenuToggle && navContainer) {
        mobileMenuToggle.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on a link
        navContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navContainer.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

// Funkcja animacji licznika
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
}

// Funkcja wyświetlania powiadomień
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Obsługa menu mobilnego z Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('header', () => ({
        isScrolled: false,
        mobileMenuOpen: false,

        init() {
            window.addEventListener('scroll', () => {
                this.isScrolled = window.pageYOffset > 20;
            });
        },

        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
        }
    }));
});

// Dodatkowe funkcje dla interaktywności
document.addEventListener('DOMContentLoaded', function() {
    // Smooth reveal dla sekcji
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => sectionObserver.observe(section));
});

// Helper functions
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Dette feltet er påkrevd';
    }
    
    // Email validation
    if (fieldType === 'email' && value && !validateEmail(value)) {
        isValid = false;
        errorMessage = 'Vennligst skriv inn en gyldig e-postadresse';
    }
    
    // Phone validation
    if (fieldName === 'phone' && value && !validatePhone(value)) {
        isValid = false;
        errorMessage = 'Vennligst skriv inn et gyldig telefonnummer';
    }
    
    // Update field appearance
    if (isValid) {
        field.classList.remove('error');
        field.classList.add('valid');
        removeFieldError(field);
    } else {
        field.classList.remove('valid');
        field.classList.add('error');
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: var(--error-color);
        font-size: 0.85rem;
        margin-top: 0.25rem;
        animation: slideIn 0.3s ease;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
} 