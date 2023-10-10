$(document).ready(function () {
  $(".heroWrapar").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev"><img src="./img/ArrowLeft.svg"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="./img/ArrowRight.svg"></button>`
  })
});


$(document).ready(function () {
  $(".allBrand").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  })
});