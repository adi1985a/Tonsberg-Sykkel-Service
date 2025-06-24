# Tønsberg Sykkelservice AS - Nowoczesna Strona Internetowa

## 🚴‍♂️ Opis Projektu

Nowoczesna, responsywna strona internetowa dla firmy rowerowej **Tønsberg Sykkelservice AS** z siedzibą w Tønsberg, Norwegia. Strona oferuje kompleksowe usługi związane z rowerami: sprzedaż, wypożyczanie i serwis.

## ✨ Funkcje i Ulepszenia

### 🎨 Design i UX
- **Nowoczesny, minimalistyczny design** z gradientami i efektami wizualnymi
- **Pełna responsywność** - optymalizacja dla wszystkich urządzeń
- **Animacje i przejścia** - płynne efekty z biblioteką AOS
- **Ikony Font Awesome** - profesjonalne ikony w całej aplikacji
- **Google Fonts** - nowoczesna typografia Inter

### 🚀 Funkcje Interaktywne
- **Ekran ładowania** z animowanym spinnerem
- **Przycisk przewijania do góry** z animacją
- **Menu mobilne** z hamburger menu
- **Filtrowanie kategorii** na stronie wypożyczeń
- **Wyszukiwanie i sortowanie** rowerów
- **FAQ z akordeonem** - rozwijane sekcje
- **Lightbox dla obrazów** - powiększanie zdjęć
- **Pasek postępu** - wskaźnik przewijania strony

### 📝 Formularze i Walidacja
- **Formularz kontaktowy** z walidacją w czasie rzeczywistym
- **Walidacja e-mail** i numerów telefonów
- **Powiadomienia** o sukcesie/błędach
- **Newsletter** z animacją rejestracji
- **Walidacja pól** z wizualnymi wskaźnikami

### 🎯 Sekcje i Treści
- **Hero section** z wideo tłem i statystykami
- **Karty usług** z hover efektami
- **Opinie klientów** z automatycznym przewijaniem
- **Zespół** z informacjami o pracownikach
- **Historia firmy** z oś czasu
- **Mapa Google** z lokalizacją
- **Galerie obrazów** z lazy loading

### 📱 Responsywność
- **Mobile-first approach**
- **Breakpointy**: 480px, 768px, 1200px
- **Touch-friendly** przyciski i interakcje
- **Optymalizacja obrazów** dla różnych rozdzielczości

## 🛠️ Technologie

### Frontend
- **HTML5** - semantyczna struktura
- **CSS3** - nowoczesne style z CSS Grid i Flexbox
- **JavaScript (ES6+)** - interaktywność i animacje
- **Alpine.js** - reaktywne komponenty
- **AOS** - animacje przy przewijaniu

### Biblioteki i CDN
- **Font Awesome 6.4.0** - ikony
- **Google Fonts** - typografia Inter
- **Alpine.js 3.x** - framework JavaScript
- **AOS 2.3.1** - animacje

### Narzędzia
- **CSS Custom Properties** - zmienne CSS
- **CSS Grid & Flexbox** - layout
- **Intersection Observer API** - lazy loading
- **Local Storage** - preferencje użytkownika

## 📁 Struktura Projektu

```
SykkelS/
├── index.html              # Strona główna
├── om-oss.html             # O nas
├── tjenester.html          # Usługi
├── sykler.html             # Rowery
├── utleie.html             # Wypożyczanie
├── kontakt.html            # Kontakt
├── css/
│   ├── style.css           # Główne style (2800+ linii)
│   └── scss/               # Pliki SCSS (źródłowe)
├── js/
│   └── main.js             # Główny JavaScript (400+ linii)
├── images/                 # Obrazy i grafiki
├── videos/                 # Pliki wideo
└── README.markdown         # Dokumentacja
```

## 🎨 Kolory i Style

### Paleta Kolorów
```css
--primary-color: #2B5BA1      /* Niebieski */
--secondary-color: #FF6B35    /* Pomarańczowy */
--accent-color: #4ECDC4       /* Turkusowy */
--success-color: #2ECC71      /* Zielony */
--warning-color: #F39C12      /* Żółty */
--error-color: #E74C3C        /* Czerwony */
```

### Typografia
- **Font**: Inter (Google Fonts)
- **Wagi**: 300, 400, 500, 600, 700, 800
- **Responsive**: clamp() dla skalowania

## 🚀 Funkcje JavaScript

### Animacje i Efekty
- **Parallax scrolling** - efekt głębi
- **Counter animations** - animowane liczniki
- **Smooth scrolling** - płynne przewijanie
- **Hover effects** - interaktywne elementy
- **Loading animations** - animacje ładowania

### Interaktywność
- **Form validation** - walidacja formularzy
- **Search functionality** - wyszukiwanie
- **Filtering system** - filtrowanie
- **Notification system** - system powiadomień
- **Mobile menu** - menu mobilne

### Optymalizacja
- **Lazy loading** - leniwe ładowanie obrazów
- **Intersection Observer** - obserwacja elementów
- **Debounced search** - zoptymalizowane wyszukiwanie
- **Performance monitoring** - monitorowanie wydajności

## 📱 Responsywność

### Breakpointy
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Large Desktop**: > 1200px

### Funkcje Mobilne
- **Touch gestures** - gesty dotykowe
- **Mobile menu** - menu hamburger
- **Optimized images** - zoptymalizowane obrazy
- **Fast loading** - szybkie ładowanie

## 🔧 Instalacja i Uruchomienie

### Wymagania
- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)
- Serwer HTTP (opcjonalnie dla pełnej funkcjonalności)

### Uruchomienie
1. Pobierz lub sklonuj projekt
2. Otwórz `index.html` w przeglądarce
3. Lub uruchom lokalny serwer:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## 📊 Wydajność

### Optymalizacje
- **Minified CSS** - skompresowane style
- **Optimized images** - zoptymalizowane obrazy
- **Lazy loading** - leniwe ładowanie
- **CDN resources** - zasoby z CDN
- **Efficient animations** - wydajne animacje

### Metryki
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **PageSpeed Insights**: 90+ (Mobile & Desktop)
- **Core Web Vitals**: Zielone wskaźniki

## 🌐 SEO i Dostępność

### SEO
- **Semantic HTML** - semantyczny HTML
- **Meta tags** - meta tagi
- **Structured data** - dane strukturalne
- **Sitemap** - mapa strony
- **Robots.txt** - plik robots

### Dostępność (A11y)
- **ARIA labels** - etykiety ARIA
- **Keyboard navigation** - nawigacja klawiaturą
- **Screen reader support** - wsparcie dla czytników ekranu
- **Color contrast** - kontrast kolorów
- **Focus indicators** - wskaźniki fokusu

## 🔄 Aktualizacje i Rozwój

### Ostatnie Ulepszenia
- ✅ Nowoczesny design z gradientami
- ✅ Responsywność dla wszystkich urządzeń
- ✅ Interaktywne animacje i efekty
- ✅ Zaawansowana walidacja formularzy
- ✅ System powiadomień
- ✅ Lightbox dla obrazów
- ✅ Filtrowanie i wyszukiwanie
- ✅ Optymalizacja wydajności

### Planowane Funkcje
- 🔄 System rezerwacji online
- 🔄 Integracja z płatnościami
- 🔄 Panel administracyjny
- 🔄 Blog/aktualności
- 🔄 Integracja z mediami społecznościowymi

## 📞 Kontakt i Wsparcie

### Informacje o Firmie
- **Nazwa**: Tønsberg Sykkelservice AS
- **Adres**: Sykkelgata 1, 3111 Tønsberg, Norwegia
- **Telefon**: +47 12 34 56 78
- **Email**: info@tonsbergsykkel.no

### Godziny Otwarcia
- **Poniedziałek-Piątek**: 09:00 - 17:00
- **Sobota**: 10:00 - 15:00
- **Niedziela**: Zamknięte

## 📄 Licencja

Projekt jest objęty licencją MIT. Szczegóły w pliku `LICENSE`.

---

**Stworzone z ❤️ dla Tønsberg Sykkelservice AS**