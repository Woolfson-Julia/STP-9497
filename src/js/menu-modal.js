const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navModalLink = document.querySelectorAll('[data-modal-link]');
const scrollLinks = document.querySelectorAll('[data-scroll]');


openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
  navModalLink.forEach(item => item.removeAttribute('data-active'));
});

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Закрываем меню
    burgerMenuEl.dataset.visible = 'close';

    // Убираем активное состояние у всех ссылок
    navModalLink.forEach(item => item.removeAttribute('data-active'));

    // Добавляем активное состояние к выбранной ссылке
    link.setAttribute('data-active', 'true');

    // Плавно скроллим к секции
    const sectionId = link.getAttribute('href');

    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});