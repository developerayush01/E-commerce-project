const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  autoplay: {
      delay: 2000, // 2 seconds between slides
      disableOnInteraction: false, // keeps autoplay running even when user interacts
    },
    speed: 800, // smooth transition
    grabCursor: true,
});