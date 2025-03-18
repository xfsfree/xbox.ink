$('.owl-carousel').owlCarousel({
  margin: 10,
  loop: false,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: true
    },
    600: {
      items: 4,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
})