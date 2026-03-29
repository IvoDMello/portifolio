// Tema
const inputs = document.querySelectorAll('input[name="theme"]');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});

// Contact toggle
function toggleContact() {
    const overlay = document.getElementById('contact-overlay');
    if (!overlay) return;
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

// Fechar ao clicar no fundo escuro
window.onclick = function(event) {
    ['contact-overlay', 'cert-overlay'].forEach(id => {
        const overlay = document.getElementById(id);
        if (overlay && event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

// Certificates toggle
function toggleCertificates() {
    const overlay = document.getElementById('cert-overlay');
    if (!overlay) return;
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

function copyEmail() {
    navigator.clipboard.writeText("ivompb2000@gmail.com");
    alert("E-mail copiado!");
}

// Contador de dias estudando programação
const daysCounter = document.getElementById('days-counter');
if (daysCounter) {
    const startDate = new Date('2023-06-01');
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const daysStr = String(days).padStart(3, '0');
    daysCounter.innerHTML = daysStr.split('').map(d => `<span class="flip-digit">${d}</span>`).join('');
}

// Carousel de projetos
let carouselIndex = 0;
const CAROUSEL_GAP = 10;

function getCarouselVisibleCount() {
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
}

function carouselMove(dir) {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    const cards = track.querySelectorAll('.project-card');
    const visible = getCarouselVisibleCount();
    const maxIndex = cards.length - visible;
    carouselIndex = Math.max(0, Math.min(carouselIndex + dir, maxIndex));
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${carouselIndex * (cardWidth + CAROUSEL_GAP)}px)`;
    document.querySelector('.carousel-btn--prev').disabled = carouselIndex === 0;
    document.querySelector('.carousel-btn--next').disabled = carouselIndex >= maxIndex;
}

function carouselPrev() { carouselMove(-1); }
function carouselNext() { carouselMove(1); }

// Inicializa estado dos botões do carousel
window.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.carousel-btn--prev');
    if (prev) prev.disabled = true;
});

window.addEventListener('resize', () => {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    carouselIndex = 0;
    track.style.transform = 'translateX(0)';
    const prev = document.querySelector('.carousel-btn--prev');
    const next = document.querySelector('.carousel-btn--next');
    if (prev) prev.disabled = true;
    const cards = track.querySelectorAll('.project-card');
    if (next) next.disabled = cards.length <= getCarouselVisibleCount();
});

// Toggle informações pessoais
function togglePersonal() {
    const details = document.getElementById('personal-details');
    const btn = document.querySelector('.btn-expand');
    if (!details || !btn) return;
    if (details.style.display === 'none') {
        details.style.display = 'block';
        btn.textContent = 'Click To Collapse ▲';
    } else {
        details.style.display = 'none';
        btn.textContent = 'Click To Expand ▼';
    }
}
