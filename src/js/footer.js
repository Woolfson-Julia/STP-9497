const backToTopLink = document.querySelector('[data-footer-back-to-top-link]');
const backToTop = document.querySelector('[data-footer-back-to-top]');

backToTopLink.addEventListener('mouseenter', () => {
  backToTop.classList.add('hovered');
});
backToTopLink.addEventListener('mouseleave', () => {
  backToTop.classList.remove('hovered');
});
