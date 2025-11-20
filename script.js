// ===== CHOPSTUDIOS - SCRIPT (RESPONSIVE + LIGHTBOX) =====

// Mobile Menu
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle && navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('show');
    }
  });
});

// Simple Lightbox
(function () {
  const gallery = document.querySelectorAll('.gallery .media a');
  if (!gallery.length) return;

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.background = 'rgba(0, 0, 0, 0.85)';
  lightbox.style.display = 'none';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.zIndex = 9999;

  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  gallery.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      img.src = item.href;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    img.src = "";
  });
})();

// Contact form message
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    setTimeout(() => {
      alert("Mensagem enviada com sucesso!");
    }, 200);
  });
}
