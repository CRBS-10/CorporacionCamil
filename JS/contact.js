  // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Form validation and submission
        const contactForm = document.getElementById('contact-form');
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const loadingText = submitBtn.querySelector('.loading-text');
        const successMessage = document.getElementById('success-message');

        function validateField(field) {
            const errorDiv = field.parentNode.querySelector('.error-message');
            const successIcon = document.getElementById(field.id + '-success');
            let isValid = true;
            let errorMessage = '';

            // Reset states
            field.classList.remove('border-error', 'border-success');
            if (successIcon) successIcon.classList.add('hidden');
            if (errorDiv) errorDiv.classList.add('hidden');

            // Validation logic
            if (field.hasAttribute('required') && !field.value.trim()) {
                isValid = false;
                errorMessage = 'Este campo es obligatorio';
            } else if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    errorMessage = 'Por favor ingrese un correo electrónico válido';
                }
            } else if (field.type === 'tel' && field.value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(field.value.replace(/[\s\-\(\)]/g, ''))) {
                    isValid = false;
                    errorMessage = 'Por favor ingrese un número de teléfono válido';
                }
            } else if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
                isValid = false;
                errorMessage = 'Debe aceptar los términos';
            }

            // Apply validation styles
            if (isValid && field.value.trim()) {
                field.classList.add('border-success');
                if (successIcon) successIcon.classList.remove('hidden');
            } else if (!isValid) {
                field.classList.add('border-error');
                if (errorDiv) {
                    errorDiv.textContent = errorMessage;
                    errorDiv.classList.remove('hidden');
                }
            }

            return isValid;
        }

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('border-error')) {
                    validateField(input);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Show loading state
                submitBtn.disabled = true;
                submitText.classList.add('hidden');
                loadingText.classList.remove('hidden');

                // Simulate form submission
                setTimeout(() => {
                    // Hide loading state
                    submitBtn.disabled = false;
                    submitText.classList.remove('hidden');
                    loadingText.classList.add('hidden');

                    // Show success message
                    successMessage.classList.remove('hidden');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Reset form
                    contactForm.reset();
                    inputs.forEach(input => {
                        input.classList.remove('border-success', 'border-error');
                        const successIcon = document.getElementById(input.id + '-success');
                        if (successIcon) successIcon.classList.add('hidden');
                    });

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                    }, 5000);
                }, 2000);
            } else {
                // Scroll to first error
                const firstError = contactForm.querySelector('.border-error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
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

        // Phone number formatting for Salvador
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 8) {
                value = value.replace(/(\d{4})(\d{4})/, '$1-$2');
            }
            e.target.value = value;
        });