var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--opened')) {
    navMain.classList.remove('main-navigation--opened');
    navMain.classList.add('main-navigation--closed');
  } else {
    navMain.classList.add('main-navigation--opened');
    navMain.classList.remove('main-navigation--closed');
  }
});
