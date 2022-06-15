const swiper1 = document.querySelector('.slider-container');
const swiper2 = document.querySelector('.swiper-container')
const burger = document.querySelector('.burger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const playButtonFirst = document.querySelectorAll('.main-slider__play');
const body = document.body;

/*burger menu*/
burger.addEventListener('click', () => {
    menu.classList.add('menu__visiable');
    body.classList.toggle("noscroll");
});

close.addEventListener('click', () => {
    menu.classList.remove('menu__visiable');
});

function closeOnClick() {
    menu.classList.remove("menu__visiable");
    burger.classList.remove("menu__visiable");
    body.classList.remove("noscroll");
};
/*burger menu*/

/*swiper*/
let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
      },
});

swiperSlider2.on('slideChange', function (index) {
    console.log(index);
    console.log('slide changed');
  });

swiperSlider2.on('transitionEnd', function() {
    let videos = document.querySelectorAll('.first__slider video');
    videos.forEach((el) => {
        el.pause();
        el.currentTime = 0;
    });
    playButtonFirst.forEach((el) => {
        el.style.display = 'block';
    });
});

playButtonFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main__slider-media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(() => {
            video.volume = 0.5;
        }, 1000);
    });
});


const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
/*swiper*/



