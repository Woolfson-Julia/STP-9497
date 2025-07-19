const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navItems = document.querySelectorAll('[data-nav]');
const scrollLinks = document.querySelectorAll('[data-scroll]');


openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
  navItems.forEach(item => item.classList.remove('is-active'));
});

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Закрываем меню
    burgerMenuEl.dataset.visible = 'close';

    // Снимаем подсветку со всех пунктов
    navItems.forEach(item => item.classList.remove('is-active'));

    // Подсвечиваем родительский пункт выбранной ссылки
    const parentNavItem = link.closest('[data-nav]');
    if (parentNavItem) {
      parentNavItem.classList.add('is-active');
    }

    // Плавно скроллим к секции
    const sectionId = link.getAttribute('href');

    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});