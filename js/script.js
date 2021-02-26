window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.nav__ul--mobile');

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav__ul--mobile-active');
  });

  $('.slider-course').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings:{
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings:{
          slidesToShow: 1
        }
      }
    ]
  });
});
