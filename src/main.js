import Menu from "../Menu/menu";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
import Slider4 from "../Slider/Slider4";
import Slider5 from "../Slider/Slider5";

function slider(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

function slider2(){
var swiper = new Swiper(".custom-slider", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
  nextEl: ".custom-button-next",
  prevEl: ".custom-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
  1024: { slidesPerView: 6 },
  768: { slidesPerView: 5 }
  }
  });
}

function slider3(){
const swiper = new Swiper('.product-slider', {
  wrapperClass: 'product-wrapper',
  slideClass: 'product-slide',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  navigation: {
    nextEl: '.product-next',
    prevEl: '.products-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 3 }
  }
});
}

function slider4(){
const swiper = new Swiper('.products-slider', {
  wrapperClass: 'products-wrapper',
  slideClass: 'products-slide',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  navigation: {
    nextEl: '.products-button-next',
    prevEl: '.products-button-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 3 }
  }
});
}

function slider5(){
const swiper = new Swiper('.brandSwiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  navigation: {
    nextEl: '.brand-next',
    prevEl: '.brand-prev',
  },
});
}

async function add_all(){
    await Menu();
    await Slider();
    slider();
    await Cards();
    await Slider2();
    slider2();
    await Slider3();
    slider3();
    await Slider4();
    slider4();
    await Slider5();
    slider5();
}
add_all()