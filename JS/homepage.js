

        // Language switching functionality
        function switchLanguage(lang) {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            document.documentElement.lang = lang;
            localStorage.setItem('selectedLanguage', lang);
        }

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });




        // Lightbox functionality
        function openLightbox(imageSrc, caption) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            lightboxImage.src = imageSrc;
            lightboxImage.alt = caption;
            lightboxCaption.textContent = caption;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

       function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-lightbox');
    const lightbox = document.getElementById('lightbox');
    
    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

        // Form validation
        const contactForm = document.getElementById('contact-form');
        const inputs = contactForm.querySelectorAll('input, select, textarea');

        function validateField(field) {
            const errorDiv = field.parentNode.querySelector('.error-message');
            let isValid = true;
            let errorMessage = '';

            if (field.hasAttribute('required') && !field.value.trim()) {
                isValid = false;
                errorMessage = 'Este campo es requerido';
            } else if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    errorMessage = 'Por favor ingrese un correo electrónico válido';
                }
            } else if (field.type === 'tel' && field.value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
                    isValid = false;
                    errorMessage = 'Por favor ingrese un número de teléfono válido';
                }
            }

            if (isValid) {
                field.classList.remove('border-error');
                field.classList.add('border-success');
                errorDiv.classList.add('hidden');
            } else {
                field.classList.remove('border-success');
                field.classList.add('border-error');
                errorDiv.textContent = errorMessage;
                errorDiv.classList.remove('hidden');
            }

            return isValid;
        }

        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('border-error')) {
                    validateField(input);
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
                    contactForm.reset();
                    inputs.forEach(input => {
                        input.classList.remove('border-success', 'border-error');
                    });
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });

        // Smooth scrolling for anchor links
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

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('shadow-medium');
            } else {
                header.classList.remove('shadow-medium');
            }
        });