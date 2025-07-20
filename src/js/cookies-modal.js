const popup = document.querySelector('[data-cookies-popup]');
const acceptBtn = document.querySelector('[data-accept-cookies]');
const declineBtn = document.querySelector('[data-decline-cookies]');

if (localStorage.getItem('isCookiesAllowed') !== null) {
  popup.style.display = 'none';
} else {
  popup.style.display = 'flex';
}

acceptBtn.addEventListener('click', function () {
  localStorage.setItem('isCookiesAllowed', 'true');
  popup.style.display = 'none';
});

declineBtn.addEventListener('click', function () {
  localStorage.setItem('isCookiesAllowed', 'false');
  popup.style.display = 'none';
});
