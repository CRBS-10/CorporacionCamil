 // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Animated statistics counter
        function animateStats() {
            const statItems = document.querySelectorAll('.stat-item');
            
            statItems.forEach(item => {
                const target = parseInt(item.getAttribute('data-target'));
                const display = item.querySelector('div');
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    if (target === 98) {
                        display.textContent = Math.floor(current) + '%';
                    } else {
                        display.textContent = Math.floor(current) + '+';
                    }
                }, 20);
            });
        }

        // Intersection Observer for stats animation
        const statsSection = document.querySelector('.py-20.bg-primary');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Cards animation on scroll
        const cards = document.querySelectorAll('.card');
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardsObserver.observe(card);
        });