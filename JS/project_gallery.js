        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Filter functionality
        const filterChips = document.querySelectorAll('.filter-chip');
        const projectCards = document.querySelectorAll('.project-card');
        const searchInput = document.getElementById('search-input');
        const resetBtn = document.getElementById('reset-filters');
        const noResults = document.getElementById('no-results');

        let currentFilter = 'all';
        let currentSearch = '';

        function filterProjects() {
            let visibleCount = 0;
            
            projectCards.forEach(card => {
                const category = card.dataset.category;
                const title = card.dataset.title.toLowerCase();
                
                const matchesFilter = currentFilter === 'all' || category === currentFilter;
                const matchesSearch = currentSearch === '' || title.includes(currentSearch.toLowerCase());
                
                if (matchesFilter && matchesSearch) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });
            
            noResults.classList.toggle('hidden', visibleCount > 0);
        }

        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentFilter = chip.dataset.filter;
                filterProjects();
            });
        });

        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterProjects();
        });

        resetBtn.addEventListener('click', () => {
            currentFilter = 'all';
            currentSearch = '';
            searchInput.value = '';
            filterChips.forEach(c => c.classList.remove('active'));
            filterChips[0].classList.add('active');
            filterProjects();
        });

        // Lightbox functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxMainImage = document.getElementById('lightbox-main-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDate = document.getElementById('lightbox-date');
        const lightboxValue = document.getElementById('lightbox-value');
        const lightboxCategory = document.getElementById('lightbox-category');
        const lightboxDescription = document.getElementById('lightbox-description');
        const lightboxThumbs = document.querySelectorAll('.lightbox-thumb');

// Project data for lightbox
const projectData = {
  'Modern Family Home': {
    images: [
      'https://images.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=800'
    ],
    date: 'March 2024',
    value: '$450,000',
    category: 'Residential',
    description: 'Contemporary residential construction with sustainable materials and energy-efficient design features. This project showcases modern architecture with smart home integration.'
  },
  'Office Complex Downtown': {
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=800'
    ],
    date: 'January 2024',
    value: '$2.1M',
    category: 'Commercial',
    description: 'Multi-story commercial complex with modern amenities and smart building technology. Features include advanced HVAC systems and sustainable construction practices.'
  },
  'Urbanización Los Robles': {
    images: [
      '../Images/Construccion/Vivienda/Casa-t1.jpg',
      '../Images/Construccion/Vivienda/Casa-t2.jpg',
      '../Images/Construccion/Vivienda/Casa-t3.jpg'
    ],
    date: 'Enero 2024',
    value: '$1.5M',
    category: 'Residencial',
    description: 'Proyecto habitacional de 24 viviendas unifamiliares con diseño eficiente, acceso pavimentado y áreas verdes comunes.'
  },
  'Mejoras en Parque Recreativo': {
    images: [
      '../Images/Construccion/Parque/p1.jpg',
      '../Images/Construccion/Parque/p2.jpg',
      '../Images/Construccion/Parque/p3.jpg'
    ],
    date: 'Noviembre 2023',
    value: '$180,000',
    category: 'Remodelación',
    description: 'Reacondicionamiento de zonas verdes, juegos infantiles, mobiliario urbano y senderos iluminados en comunidad rural.'
  },
  'Restaurante El Sazón Urbano': {
    images: [
      '../Images/Estetica/Pictures/ESTE1.jpg',
      '../Images/Estetica/Equipo de trabajo/Eq1.jpg',
      '../Images/Construccion/Vivienda/Casa-p1.jpg'
    ],
    date: 'Junio 2023',
    value: '$95,000',
    category: 'Comida',
    description: 'Diseño e implementación de restaurante moderno con iluminación cálida, cocina industrial y fachada de impacto.'
  },
  'Supervisión Centro Escolar STC': {
    images: [
      '../Images/Construccion/Escuela/STC1.jpg',
      '../Images/Construccion/Escuela/STC2.jpg',
      '../Images/Construccion/Escuela/STC3.jpg'
    ],
    date: 'Abril 2022',
    value: '$210,000',
    category: 'Supervisión',
    description: 'Supervisión técnica y control de calidad para la ampliación de aulas, techos y accesos del Centro Escolar STC.'
  },
  'Pozo Artesanal Comunidad Los Pinos': {
    images: [
      '../Images/Hidraulico/Pozo/pozo-1.JPG',
      '../Images/Hidraulico/Pozo/Pozo2.JPG',
      '../Images/Hidraulico/Pozo/Pozo-3.JPG'
    ],
    date: 'Marzo 2023',
    value: '$58,000',
    category: 'Remodelación',
    description: 'Excavación y habilitación de pozo artesanal con cercado, sistema de bombeo manual y caseta técnica para comunidad rural.'
  },
  'Instalación Paneles de Control': {
    images: [
      '../Images/Electrico/panel de control/PN1.JPG',
      '../Images/Electrico/panel de control/PN2.JPG',
      '../Images/Electrico/panel de control/PN3.JPG'
    ],
    date: 'Agosto 2023',
    value: '$130,000',
    category: 'Supervisión',
    description: 'Instalación y configuración de paneles eléctricos de control automatizado en planta de distribución.'
  },
  'Rehabilitación Calle San Sebastián': {
    images: [
      '../Images/Logo.png',
      '../Images/Construccion/Calles/Calle San Sebastian.jpg',
      '../Images/Construccion/Calles/Calle2-San Sabastian.jpg'
    ],
    date: 'Febrero 2024',
    value: '$320,000',
    category: 'Remodelación',
    description: 'Recarpeteo de vía principal, señalización horizontal y accesibilidad universal.'
  },

  'Ampliación Centro Escolar El Rosario': {
    images: [
      '../Images/Construccion/Calles/Calle3-San Sebastian.jpg',
      '../Images/Construccion/Escuela/STC1.jpg',
      '../Images/Construccion/Escuela/STC2.jpg'
    ],
    date: 'Enero 2024',
    value: '$275,000',
    category: 'Supervisión',
    description: 'Ampliación de infraestructura educativa: aulas, sanitarios y techado.'
  },

  'Renovación Parque Infantil Sur': {
    images: [
      '../Images/Construccion/Escuela/STC3.jpg',
      '../Images/Construccion/Escuela/STC4.jpg',
      '../Images/Construccion/Parque/p1.jpg'
    ],
    date: 'Diciembre 2023',
    value: '$98,000',
    category: 'Remodelación',
    description: 'Remodelación completa de parque infantil con seguridad perimetral.'
  },

  'Instalación Juegos Nuevos': {
    images: [
      '../Images/Construccion/Parque/p2.jpg',
      '../Images/Construccion/Parque/p3.jpg',
      '../Images/Construccion/Parque/Jutiapa/PJ1.JPG'
    ],
    date: 'Noviembre 2023',
    value: '$110,000',
    category: 'Comida',
    description: 'Implementación de juegos recreativos modernos y sistema de vigilancia.'
  },

  'Viviendas Modelo Compacto': {
    images: [
      '../Images/Construccion/Parque/Jutiapa/PJ2.JPG',
      '../Images/Construccion/Parque/Jutiapa/PJ3.JPG',
      '../Images/Construccion/Vivienda/Casa-t1.jpg'
    ],
    date: 'Octubre 2023',
    value: '$490,000',
    category: 'Residencial',
    description: 'Construcción de vivienda eficiente con materiales térmicos y diseño compacto.'
  },

  'Supervisión Planta Potabilizadora': {
    images: [
      '../Images/Construccion/Vivienda/Casa-t2.jpg',
      '../Images/Construccion/Vivienda/Casa-t3.jpg',
      '../Images/Hidraulico/Pozo/pozo-1.JPG'
    ],
    date: 'Septiembre 2023',
    value: '$240,000',
    category: 'Supervisión',
    description: 'Supervisión técnica y control de calidad para planta de agua potable.'
  },

  'Construcción Losa Comunal': {
    images: [
      '../Images/Hidraulico/Pozo/Pozo2.JPG',
      '../Images/Hidraulico/Pozo/Pozo-3.JPG',
      '../Images/Electrico/panel de control/PN1.JPG'
    ],
    date: 'Agosto 2023',
    value: '$180,000',
    category: 'Remodelación',
    description: 'Ejecución de losa de concreto armado con drenaje y graderíos.'
  },

  'Instalación Cableado Subterráneo': {
    images: [
      '../Images/Electrico/panel de control/PN2.JPG',
      '../Images/Electrico/panel de control/PN3.JPG',
      '../Images/Estetica/Equipo de trabajo/Eq1.jpg'
    ],
    date: 'Julio 2023',
    value: '$130,000',
    category: 'Supervisión',
    description: 'Tendido eléctrico subterráneo y cajas de inspección en zona residencial.'
  },

  'Urbanización Jardines del Valle': {
    images: [
      '../Images/Estetica/Pictures/ESTE1.jpg',
      '../Images/Construccion/Vivienda/Casa-p1.jpg',
      '../Images/Construccion/Escuela/STC1.jpg'
    ],
    date: 'Junio 2023',
    value: '$680,000',
    category: 'Residencial',
    description: 'Urbanización con diseño vial, servicios básicos y lotificación de viviendas.'
  }
        };

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                const data = projectData[title] || projectData['Modern Family Home'];
                
                lightboxTitle.textContent = title;
                lightboxDate.textContent = data.date;
                lightboxValue.textContent = data.value;
                lightboxCategory.textContent = data.category;
                lightboxDescription.textContent = data.description;
                
                // Set category color
                lightboxCategory.className = `px-3 py-1 rounded-full text-sm text-white ${
                    data.category === 'Residential' ? 'bg-primary' :
                    data.category === 'Commercial' ? 'bg-secondary' :
                    data.category === 'Remodeling' ? 'bg-accent' : 'bg-primary'
                }`;
                
                // Set main image
                lightboxMainImage.src = data.images[0];
                lightboxMainImage.alt = title;
                
                // Update thumbnails
                lightboxThumbs.forEach((thumb, index) => {
                    if (data.images[index]) {
                        thumb.src = data.images[index];
                        thumb.classList.remove('hidden');
                        thumb.classList.toggle('active', index === 0);
                    } else {
                        thumb.classList.add('hidden');
                    }
                });
                
                lightbox.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        // Thumbnail click handlers
        lightboxThumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                lightboxThumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                lightboxMainImage.src = thumb.src;
            });
        });

        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Share functionality
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const title = btn.dataset.title;
                if (navigator.share) {
                    navigator.share({
                        title: `${title} - Construction Pro`,
                        text: `Check out this amazing project: ${title}`,
                        url: window.location.href
                    });
                } else {
                    // Fallback for browsers that don't support Web Share API
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`Check out this amazing project: ${title}`);
                    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
                }
            });
        });

        // Load more functionality
        const loadMoreBtn = document.getElementById('load-more-btn');
        let currentPage = 1;
        const projectsPerPage = 8;

        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more projects
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                // In a real application, you would fetch more projects from an API
                loadMoreBtn.textContent = 'Load More Projects';
                loadMoreBtn.disabled = false;
                currentPage++;
                
                // Hide button after loading a few pages (simulate end of content)
                if (currentPage > 3) {
                    loadMoreBtn.style.display = 'none';
                }
            }, 1000);
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

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            }
        });