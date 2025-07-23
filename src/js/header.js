const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('[data-header]');

function onScrollSpy() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(item => {
        const link = item.querySelector('.header-nav-link');
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScrollSpy);
window.addEventListener('DOMContentLoaded', onScrollSpy);