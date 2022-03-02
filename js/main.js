const swiper = new Swiper('.swiper', {
    // параметрлер
    direction: 'horizontal',
    loop: true,

    // Слайд нөмірлері (пагинация)
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Слайд ауыстыру
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Скролл бар керек болса
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });