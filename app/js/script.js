$('.single-item').slick({
  dots: true,
  dotsClass: 'sl-dots',
  draggable: true,
  mobileFirst: true,
  arrows: false,
  
  autoplay: true,
  autoplaySpeed: 10000,

});


$('.multi-item').slick({
  dots: true,
  dotsClass: 'sl-dots',
  draggable: true,
  mobileFirst: true,
  arrows: false,
  
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    
  ],

});

$('.tabs-slider').slick({
  arrows: false,
  draggable: true,
});





const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu-list')
const overlay = document.querySelector('.header__overlay')
const body = document.querySelector('body')

burger.addEventListener('click', function () {
  menu.classList.toggle('show')
  burger.classList.toggle('show')
  overlay.classList.toggle('show')
  body.classList.toggle('stop-scroll')
})



overlay.addEventListener('click', function () {
  menu.classList.remove('show')
  burger.classList.remove('show')
  overlay.classList.remove('show')
  body.classList.remove('stop-scroll')
})


const tabsBtns = document.querySelectorAll('.tabs__btn')
const tabsContents = document.querySelectorAll('.tabs__text')


tabsBtns.forEach(function (button, index) {
  button.addEventListener('click', function () {
    tabsBtns.forEach(function (buttonColor) {
      buttonColor.classList.remove('show')
    })
    tabsContents.forEach(function (text) {
      text.classList.remove('show')
    })
    button.classList.add('show')
    tabsContents[index].classList.add('show')
  })
})


