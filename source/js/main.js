const tWidth = 1200;
const dWidth = 1920;
//Реализация нажатия кнопки открытия меню
var header = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
//Реализация нажатия кнопки открытия меню

//Реализация нажатия кнопки открытия подменю 1200-1920 разрешение
const liElements = document.querySelectorAll('.main-nav__item1--submenu');
var wrapperMenu = document.querySelector('.main-nav__wrapper-list');
const widthWrapperMenu = wrapperMenu.offsetWidth;



//Реализация нажатия кнопки открытия меню
navToggle.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
  } else {
    header.classList.add('header--closed');
  }
});
//Реализация нажатия кнопки открытия меню


//Реализация нажатия кнопки открытия подменю 1200-1920 разрешение
liElements.forEach(function(e) {
  e.addEventListener('mouseenter', function() {
    wrapperMenu.style.width = widthWrapperMenu + e.querySelector('.main-nav__submenu-list').offsetWidth + "px";
  });
  e.addEventListener('mouseleave', function() {
    wrapperMenu.style.width = widthWrapperMenu + 1 +"px";
  });
});