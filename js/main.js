new Swiper('.products__img', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
      loop: true,
});


new Swiper('.works__item-img', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


const closeBtn = document.querySelector('.closeFormone');

const formOne = document.querySelector('.form__one');

const btnOpen = document.querySelector('.btn_zayavka');

const formAnket = document.querySelector('.form__anket');

const btnAnket = document.querySelector('.anketa_btn')

const close = document.querySelector('.close');

closeBtn.addEventListener('click', () =>{
  formOne.classList.add('hidden')
})


btnOpen.addEventListener('click', () =>{
  formOne.classList.remove('hidden')
})

btnAnket.addEventListener('click', () =>{
  formAnket.classList.remove('hidden');
})

close.addEventListener('click', () =>{
  formAnket.classList.add('hidden');
})

