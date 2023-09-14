var header = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');


navToggle.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
  } else {
    header.classList.add('header--closed');
  }
});