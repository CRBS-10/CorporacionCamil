// Service data
const serviceData = {
  construccion: {
    title: "Construcción General",
    description:
      "Especialistas en edificaciones residenciales, naves industriales y construcción de infraestructura con los más altos estándares de calidad y profesionalismo.",
    heroImage:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    overview: `
       <p>Nuestra área de Construcción General abarca desde edificaciones residenciales hasta complejas naves industriales. Nos especializamos en proyectos que requieren precisión técnica y cumplimiento de los más altos estándares de calidad en la industria de la construcción.</p>
       <p>Con años de experiencia en el sector, hemos desarrollado procesos eficientes que garantizan la entrega de proyectos en tiempo y forma, manteniendo siempre la comunicación transparente con nuestros clientes durante todo el proceso constructivo.</p>
   `,
    highlights: [
      "Edificaciones Residenciales Verticales",
      "Naves Industriales",
      "Construcción de Cuartos Fríos",
      "Reparación y Construcción de Viviendas",
    ],
    timeline: "4-8 meses según complejidad del proyecto",
  },
  hidraulica: {
    title: "Infraestructura Hidráulica",
    description:
      "Servicios especializados en diseño, construcción y mantenimiento de sistemas hidráulicos, desde pozos profundos hasta sistemas completos de abastecimiento de agua.",
    heroImage:
      "https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    overview: `
       <p>Nuestra especialidad en Infraestructura Hidráulica abarca desde el diseño hidráulico hasta la construcción completa de sistemas de abastecimiento de agua. Contamos con la experiencia y tecnología necesaria para ejecutar proyectos desde estudios hidrogeológicos hasta sistemas de bombeo complejos.</p>
       <p>Trabajamos con tecnología de punta y personal altamente calificado para garantizar sistemas hidráulicos eficientes, sustentables y que cumplan con todas las normativas técnicas vigentes.</p>
   `,
    highlights: [
      "Diseño Hidráulico",
      "Estudios Hidrogeológicos",
      "Perforación y Equipamiento de Pozos Profundos",
      "Sistemas de Abastecimiento de Agua Potable",
    ],
    timeline: "2-6 meses según complejidad del sistema",
  },
  electrica: {
    title: "Area Electrica",
    description:
      "Instalaciones eléctricas especializadas para proyectos residenciales, industriales y subestaciones eléctricas con los más altos estándares de seguridad y eficiencia.",
    heroImage:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    overview: `
       <p>Nuestro Área Eléctrica se especializa en el diseño, instalación y mantenimiento de sistemas eléctricos para todo tipo de proyectos. Desde instalaciones residenciales hasta complejas subestaciones eléctricas para sistemas industriales.</p>
       <p>Contamos con personal certificado y experiencia comprobada en instalaciones eléctricas que cumplen con todas las normativas de seguridad y eficiencia energética, garantizando sistemas confiables y duraderos.</p>
   `,
    highlights: [
      "Subestaciones Eléctricas",
      "Instalaciones Eléctricas en Naves Industriales",
      "Instalaciones Eléctricas en Viviendas y Residencias",
      "Sistemas de Bombeo",
    ],
    timeline: "1-4 meses según complejidad del proyecto",
  },
  vial: {
    title: "Infraestructura Vial",
    description:
      "Construcción, mantenimiento y supervisión de carreteras, caminos y red vial con tecnología moderna y cumplimiento de estándares internacionales.",
    heroImage:
      "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    overview: `
       <p>Nuestra área de Infraestructura Vial se dedica al mantenimiento, construcción y supervisión de redes viales. Trabajamos tanto en carreteras pavimentadas como en caminos rurales, garantizando conectividad y seguridad en el transporte.</p>
       <p>Utilizamos técnicas modernas de construcción y mantenimiento vial, cumpliendo con estándares internacionales de calidad y durabilidad en todos nuestros proyectos de infraestructura vial.</p>
   `,
    highlights: [
      "Mantenimiento de Red Pavimentada",
      "Mantenimiento de Red Vial No Pavimentada",
      "Balastado y Rehabilitación de Caminos",
      "Supervisión de Construcción y Mantenimiento",
    ],
    timeline: "1-6 meses según extensión del proyecto",
  },
};

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Service tab switching
        const serviceTabs = document.querySelectorAll('.service-tab');
        const serviceBreadcrumb = document.getElementById('service-breadcrumb');
        const heroTitle = document.getElementById('hero-title');
        const heroDescription = document.getElementById('hero-description');
        const heroImage = document.getElementById('hero-image');
        const serviceOverview = document.getElementById('service-overview');
        const totalDuration = document.getElementById('total-duration');

        serviceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const service = tab.dataset.service;
                const data = serviceData[service];

                // Update active tab
                serviceTabs.forEach(t => {
                    t.classList.remove('active', 'bg-primary', 'text-white');
                    t.classList.add('bg-gray-100', 'text-text-secondary');
                });
                tab.classList.add('active', 'bg-primary', 'text-white');
                tab.classList.remove('bg-gray-100', 'text-text-secondary');

                // Update content
                serviceBreadcrumb.textContent = data.title.replace(' Services', '');
                heroTitle.textContent = data.title;
                heroDescription.textContent = data.description;
                heroImage.src = data.heroImage;
                serviceOverview.innerHTML = data.overview;
                totalDuration.textContent = data.timeline;

                // Update service highlights
                const highlightsList = document.getElementById('service-highlights');
                const highlights = data.highlights.map(highlight => `
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <span class="text-text-primary font-semibold">${highlight}</span>
                    </div>
                `).join('');
                
                highlightsList.innerHTML = highlights + `
                  
                `;
            });
        });

        // Accordion functionality for mobile
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                if (window.innerWidth < 768) { // Only on mobile
                    const target = header.dataset.target;
                    const content = document.getElementById(target);
                    const arrow = header.querySelector('svg');
                    
                    content.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-180');
                }
            });
        });

        // Project filtering
        const projectFilters = document.querySelectorAll('.project-filter');
        const projectItems = document.querySelectorAll('.project-item');

        projectFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const filterValue = filter.dataset.filter;

                // Update active filter
                projectFilters.forEach(f => {
                    f.classList.remove('active', 'bg-primary', 'text-white');
                    f.classList.add('bg-gray-100', 'text-text-secondary');
                });
                filter.classList.add('active', 'bg-primary', 'text-white');
                filter.classList.remove('bg-gray-100', 'text-text-secondary');

                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.dataset.category === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
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

        document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                closeLightbox();
            }
        });

        // Service contact form
        const serviceContactForm = document.getElementById('service-contact-form');
        
        serviceContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = serviceContactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your inquiry! We will contact you soon with a detailed quote.');
                serviceContactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
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

        // Initialize with default service (residential)
        document.addEventListener('DOMContentLoaded', () => {
            // Show accordion content on desktop by default
            if (window.innerWidth >= 768) {
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.classList.remove('hidden');
                });
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.classList.remove('hidden');
                });
                document.querySelectorAll('.accordion-header svg').forEach(arrow => {
                    arrow.classList.remove('rotate-180');
                });
            } else {
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.classList.add('hidden');
                });
            }
        });