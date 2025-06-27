document.addEventListener('DOMContentLoaded', function() {
    // Datos de las características del juego
    const featuresData = [
        {
            title: "Combate Épico",
            description: "Sistema de combate basado en habilidades con más de 100 armas y hechizos únicos. Domina diferentes estilos de lucha."
        },
        {
            title: "Mundo Abierto",
            description: "Explora un vasto reino medieval con ciudades bulliciosas, mazmorras peligrosas y paisajes impresionantes."
        },
        {
            title: "Historia Profunda",
            description: "Una narrativa compleja con múltiples finales basados en tus decisiones. Cada acción tiene consecuencias."
        },
        {
            title: "Personalización",
            description: "Crea tu personaje único con un sistema de progresión no lineal y miles de combinaciones de equipo."
        },
        {
            title: "Gremios y Facciones",
            description: "Únete a diferentes facciones, cada una con sus propias misiones, recompensas y ramas narrativas exclusivas."
        },
        {
            title: "Modo Multijugador",
            description: "Desafía a otros jugadores en arenas PvP o únete para enfrentar jefes épicos en cooperativo."
        }
    ];

    // Generar tarjetas de características dinámicamente
    const featuresGrid = document.querySelector('.features-grid');
    
    featuresData.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card scroll-effect';
        card.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(card);
    });

    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Efecto de scroll para las tarjetas
    const scrollElements = document.querySelectorAll('.scroll-effect');
    
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Inicializar animación
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});