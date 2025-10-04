'use strict';

// ────────────────◈ Popup Hide with overlay click ◈────────────────

const popupOverlays = document.querySelectorAll('.popup__overlay');

popupOverlays.forEach(overlay => {
  overlay.addEventListener('click', function () {
    const popup = overlay.closest('.popup');
    if (popup) {
      const closeBtn = popup.querySelector('.popup__close');
      if (closeBtn) {
        closeBtn.href = '#Projects';
        closeBtn.click();
      }
    }
  });
});

//Popup Hide with Escape button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const closeButtons = document.querySelectorAll('.popup__close');
    closeButtons.forEach(btn => {
      btn.href = '#Projects';
      btn.click();
    });
  }
});

// ────────────────◈ Scroll Spy ◈────────────────

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav__link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    } else if (current === '' && link.getAttribute('href') === `#`) {
      link.classList.add('active');
    }
  });
});

// ────────────────◈ Mobile Nav ◈────────────────

const btnOpen = document.querySelector('.icons-menu');
const btnClose = document.querySelector('.icons-close');
const nav = document.querySelectorAll('.nav');
const icons = document.querySelector('.social-icons');

btnOpen.addEventListener('click', function () {
  nav.forEach(navEl => navEl.classList.add('visible'));
  icons.classList.add('visible');
  btnClose.classList.add('visible');
});

btnClose.addEventListener('click', () => {
  nav.forEach(navEl => navEl.classList.remove('visible'));
  btnClose.classList.remove('visible');
});
