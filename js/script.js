window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.nav__ul--mobile');

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav__ul--mobile-active');
  });

  function modalShow(trigger, modal, close) {
    const trigg = document.querySelector(trigger),
          modal_ = document.querySelector(modal),
          close_ = document.querySelector(close);
    trigg.addEventListener('click', () => {
      modal_.classList.add('modal--visible');
    });
    modal_.addEventListener('click', e => {
      if (e.target.classList.contains('modal')) {
        modal_.classList.remove('modal--visible');
      }
    });
    close_.addEventListener('click', () => {
      modal_.classList.remove('modal--visible');
    });
  }

  modalShow('.special__button', '.modal--consult', '.modal__close--consult');

});