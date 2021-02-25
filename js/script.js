window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.nav__ul--mobile');

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav__ul--mobile-active');
  });
});