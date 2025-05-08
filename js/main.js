// Obsługa menu mobilnego
document.addEventListener('alpine:init', () => {
    Alpine.data('header', () => ({
        isScrolled: false,
        mobileMenuOpen: false,

        init() {
            window.addEventListener('scroll', () => {
                this.isScrolled = window.pageYOffset > 20;
            });
        }
    }));
}); 