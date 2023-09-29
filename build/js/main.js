const tWidth = 1200;
const dWidth = 1920;
//Реализация нажатия кнопки открытия меню
var header = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
//Реализация нажатия кнопки открытия меню

//Реализация нажатия кнопки открытия подменю 1200-1920 разрешение


//Реализация нажатия кнопки открытия меню
navToggle.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
  } else {
    header.classList.add('header--closed');
  }
});
//Реализация нажатия кнопки открытия меню
