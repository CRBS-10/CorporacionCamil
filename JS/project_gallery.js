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

       const lightbox = document.getElementById('lightbox');
const lightboxMainImage = document.getElementById('lightbox-main-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDate = document.getElementById('lightbox-date');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxTimeline = document.getElementById('lightbox-timeline');
const lightboxThumbs = document.querySelectorAll('.lightbox-thumb');

// Colores por categoría (ajusta a tus tailwind tokens)
const categoryColors = {
  'Construccion': 'bg-primary',
  'Vial': 'bg-secondary',
  'Hidraulico': 'bg-accent',
  'Electrico': 'bg-secondary'
};

// Datos de proyectos (ES) — sin "Equipo" ni "Estetica"
const projectData = {
  "Calle San Sebastian": {
    images: [
      "../Images/Construccion/Calles/Calle San Sebastian.jpg",
      "../Images/Construccion/Calles/Calle2-San Sabastian.jpg",
      "../Images/Construccion/Calles/Calle3-San Sebastian.jpg"
    ],
    date: "2024",
    category: "Vial",
    description: "Mejoramiento y rehabilitación vial con señalización y accesibilidad.",
    timeline: { "Planificación": "3 semanas", "Ejecución": "4 meses", "Cierre y recepción": "3 semanas" }
  },
  "Centro Escolar STC": {
    images: [
      "../Images/Construccion/Escuela/STC1.jpg",
      "../Images/Construccion/Escuela/STC2.jpg",
      "../Images/Construccion/Escuela/STC3.jpg"
    ],
    date: "2024",
    category: "Construccion",
    description: "Intervención en infraestructura educativa: aulas, techos y accesos.",
    timeline: { "Planificación": "1 mes", "Ejecución": "6 meses", "Cierre y recepción": "3 semanas" }
  },
  "Limpieza": {
    images: [
      "../Images/Hidraulico/Limpieza/LP1.jpg",
      "../Images/Hidraulico/Limpieza/LP2.jpg",
      "../Images/Hidraulico/Limpieza/LP3.jpg"
    ],
    date: "2024",
    category: "Hidraulico",
    description: "Limpieza y mantenimiento de sistemas hidráulicos y entorno de obra.",
    timeline: { "Planificación": "3 días", "Ejecución": "1 semana", "Cierre y recepción": "2 días" }
  },
  "PN": {
    images: [
      "../Images/Electrico/panel de control/PN1.JPG",
      "../Images/Electrico/panel de control/PN2.JPG",
      "../Images/Electrico/panel de control/PN3.JPG"
    ],
    date: "2024",
    category: "Electrico",
    description: "Instalación y configuración de paneles eléctricos de control.",
    timeline: { "Planificación": "2 semanas", "Ejecución": "1 mes", "Cierre y recepción": "1 semana" }
  },
  "Parque": {
    images: [
      "../Images/Construccion/Parque/p1.jpg",
      "../Images/Construccion/Parque/p2.jpg",
      "../Images/Construccion/Parque/p3.jpg"
    ],
    date: "2024",
    category: "Construccion",
    description: "Renovación de áreas recreativas, mobiliario urbano e iluminación.",
    timeline: { "Planificación": "3 semanas", "Ejecución": "2 meses", "Cierre y recepción": "2 semanas" }
  },
  "Parque Jutiapa": {
    images: [
      "../Images/Construccion/Parque/Jutiapa/PJ1.JPG",
      "../Images/Construccion/Parque/Jutiapa/PJ2.JPG",
      "../Images/Construccion/Parque/Jutiapa/PJ3.JPG"
    ],
    date: "2024",
    category: "Construccion",
    description: "Intervención en parque de Jutiapa con juegos, senderos e iluminación.",
    timeline: { "Planificación": "1 mes", "Ejecución": "3 meses", "Cierre y recepción": "2 semanas" }
  },
  "Pozo": {
    images: [
      "../Images/Hidraulico/Pozo/pozo-1.JPG",
      "../Images/Hidraulico/Pozo/Pozo2.JPG",
      "../Images/Hidraulico/Pozo/Pozo-3.JPG"
    ],
    date: "2024",
    category: "Hidraulico",
    description: "Obra hidráulica: excavación y habilitación de pozo con caseta técnica.",
    timeline: { "Planificación": "2 semanas", "Ejecución": "1 mes", "Cierre y recepción": "1 semana" }
  },
  "Subestacion": {
    images: [
      "../Images/Electrico/Sub estacion/subEstacion1.JPG",
      "../Images/Electrico/Sub estacion/subEztacion2.JPG",
      "../Images/Electrico/Sub estacion/subEstacion3.JPG"
    ],
    date: "2012",
    category: "Electrico",
    description: "Montaje y adecuación de infraestructura eléctrica/subestación.",
    timeline: { "Planificación": "1 mes", "Ejecución": "5 meses", "Cierre y recepción": "3 semanas" }
  },
  "Tuberias": {
    images: [
      "../Images/Hidraulico/Colocacion de tuberias/TB1.jpg",
      "../Images/Hidraulico/Colocacion de tuberias/TB2.jpg",
      "../Images/Hidraulico/Colocacion de tuberias/TB3.jpg"
    ],
    date: "2024",
    category: "Hidraulico",
    description: "Colocación de tuberías y cajas de registro para redes hidráulicas.",
    timeline: { "Planificación": "2 semanas", "Ejecución": "6 semanas", "Cierre y recepción": "1 semana" }
  },
  "Vivienda ACA": {
    images: [
      "../Images/Construccion/Vivienda/ACA1.JPG",
      "../Images/Construccion/Vivienda/ACA2.JPG",
      "../Images/Construccion/Vivienda/ACA3.JPG"
    ],
    date: "2024",
    category: "Construccion",
    description: "Vivienda unifamiliar con diseño eficiente y acabados de calidad.",
    timeline: { "Planificación": "1 mes", "Ejecución": "7 meses", "Cierre y recepción": "3 semanas" }
  },
  "Vivienda Casa P": {
    images: [
      "../Images/Construccion/Vivienda/Casa-p1.jpg"
    ],
    date: "2024",
    category: "Construccion",
    description: "Modelo de vivienda: variante P, optimizada para clima local.",
    timeline: { "Planificación": "3 semanas", "Ejecución": "5 meses", "Cierre y recepción": "2 semanas" }
  },
  "Vivienda Casa T": {
    images: [
      "../Images/Construccion/Vivienda/Casa-t1.jpg",
      "../Images/Construccion/Vivienda/Casa-t2.jpg",
      "../Images/Construccion/Vivienda/Casa-t3.jpg"
    ],
    date: "2024",
    category: "Construccion",
    description: "Modelo de vivienda: variante T, estructura eficiente y térmica.",
    timeline: { "Planificación": "3 semanas", "Ejecución": "5 meses", "Cierre y recepción": "2 semanas" }
  },
  "Obras de Mitigacion": {
    images: [
      "../Images/Obras mitigacion/mit1.JPG",
      "../Images/Obras mitigacion/mit2.JPG",
      "../Images/Obras mitigacion/mit3.JPG"
    ],
    date: "2024",
    category: "Construccion",
    description: "Obras de mitigación para estabilidad y seguridad del terreno.",
    timeline: { "Planificación": "3 semanas", "Ejecución": "2 meses", "Cierre y recepción": "2 semanas" }
  }
};

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const data = projectData[title];
    if (!data) return;

    lightboxTitle.textContent = title;
    lightboxDate.textContent = data.date;
    lightboxDescription.textContent = data.description;

    // Color por categoría
    const colorClass = categoryColors[data.category] || 'bg-primary';
    lightboxCategory.textContent = data.category;
    lightboxCategory.className = `px-3 py-1 rounded-full text-sm text-white ${colorClass}`;

    // Imagen principal
    lightboxMainImage.src = data.images[0] || '';
    lightboxMainImage.alt = title;

    // Miniaturas
    lightboxThumbs.forEach((thumb, index) => {
      if (data.images[index]) {
        thumb.src = data.images[index];
        thumb.classList.remove('hidden');
        thumb.classList.toggle('active', index === 0);
      } else {
        thumb.classList.add('hidden');
      }
    });

    // Cronograma
    lightboxTimeline.innerHTML = '';
    Object.entries(data.timeline || {}).forEach(([fase, dur]) => {
      const li = document.createElement('li');
      li.className = 'flex justify-between';
      li.innerHTML = `<span class="text-text-secondary">${fase}:</span><span class="text-sm">${dur}</span>`;
      lightboxTimeline.appendChild(li);
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

        // ===== Permalink del proyecto =====
function getProjectUrl(title) {
  const base = window.location.origin + window.location.pathname; // misma página
  const hash = '#project=' + encodeURIComponent(title);
  return base + hash;
}

// ===== Compartir (cards y lightbox) =====
function setupShareButtons(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const title = btn.dataset.title || 'Proyecto';
      const url = getProjectUrl(title);
      const text = `Mira este proyecto: ${title}`;

      // 1) Web Share API (móvil / algunos escritorios)
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${title} - Corporación CAMIL`,
            text,
            url
          });
          return;
        } catch (err) {
          // si el usuario cancela, seguimos al fallback
        }
      }

      // 2) Fallback: copiar enlace y abrir WhatsApp Web
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(url);
          alert('Enlace copiado al portapapeles ✅');
        } else {
          // copia “manual”
          const ta = document.createElement('textarea');
          ta.value = url;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          alert('Enlace copiado al portapapeles ✅');
        }
      } catch (_) {
        // si no se puede copiar, abrimos igual WhatsApp Web
      }

      // Abre WhatsApp Web con el texto (puedes cambiar por Facebook/Twitter si prefieres)
      const wText = encodeURIComponent(`${text}\n${url}`);
      window.open(`https://wa.me/?text=${wText}`, '_blank');
    }, { passive: true });
  });
}

// Aplica a botones de la tarjeta y del lightbox (si tienes uno allí)
setupShareButtons('.share-btn');
setupShareButtons('.share-btn-lightbox');

// ===== Abrir lightbox si viene con #project=... =====
window.addEventListener('DOMContentLoaded', () => {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));

  const projectFromHash = hash.get('project');
  if (projectFromHash && projectData[projectFromHash]) {
    // busca la tarjeta con ese título y dispara su click
    const card = Array.from(document.querySelectorAll('.project-card'))
      .find(el => (el.dataset.title || '').trim().toLowerCase() === projectFromHash.trim().toLowerCase());
    if (card) card.click();
  }
});
