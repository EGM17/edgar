document.addEventListener('DOMContentLoaded', () => {
    // Código relacionado con ScrollReveal
    ScrollReveal().reveal('.hero-section, .skills-section, .experience-section, .about-section, .projects-section, .testimonials-section, .contact-section', {
        distance: '50px',
        origin: 'bottom',
        duration: 1200,
        easing: 'ease-out',
        delay: 500,
        reset: true
    });

    ScrollReveal().reveal('.header', {
        origin: 'bottom',
        duration: 800,
        easing: 'ease-out',
        delay: 500,
        reset: true
    });

    // Seleccionar los enlaces en .nav-item-02
    const navLinks = document.querySelectorAll('.nav-list .nav-item');

    navLinks.forEach(link => {
        // Crear un div dinámico para la línea
        const line = document.createElement('div');
        line.classList.add('nav-line'); // Clase para estilos
        link.appendChild(line); // Agregar el div al enlace

        // Eventos para mostrar y ocultar la línea
        link.addEventListener('mouseenter', () => {
            const linkWidth = link.offsetWidth; // Obtener ancho del enlace
            line.style.width = `${linkWidth}px`; // Ajustar ancho al tamaño del enlace
        });

        link.addEventListener('mouseleave', () => {
            line.style.width = '0'; // Reducir la línea al quitar el mouse
        });
    });

// Close and open menu
    const nav = document.querySelector ("#nav-list-container");
    const abrir = document.querySelector("#open-menu");
    const cerrar = document.querySelector("#close-menu");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    }) 

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
})