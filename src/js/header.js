const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-header-link]');

function onScrollSpy() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.setAttribute('data-active', 'true');
        } else {
          link.removeAttribute('data-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScrollSpy);
window.addEventListener('DOMContentLoaded', onScrollSpy);