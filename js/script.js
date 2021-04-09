const chanel = new Swiper('.chanel-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.chanel-button-next',
      prevEl: '.chanel-button-prev',
    },
    breakpoints: {
      640:  { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1366: { slidesPerView: 4 },
      1920: { slidesPerView: 6 },
    }
});


const recommended = new Swiper('.recommended-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1366: { slidesPerView: 3 },
    }
});

const chanelRecommended = new Swiper('.chanel-recommended-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.chanel-recommended-button-next',
      prevEl: '.chanel-recommended-button-prev',
    },
    breakpoints: {
      640:  { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1366: { slidesPerView: 4 },
      1920: { slidesPerView: 6 },
    }
});


const searchBtn = document.querySelector('.mobile-search');
const searchForm = document.querySelector('.input-group');

const burgerBtn = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

searchBtn.addEventListener( 'click', () => {
  searchForm.classList.toggle('is-open');
})

burgerBtn.addEventListener( 'click', () => {
  burgerBtn.classList.toggle('is-open');
  sidebar.classList.toggle('is-open');
})

//Показать еще 
const subMenu = document.querySelector('#sub-menu').getElementsByTagName('li');
const showMore = document.querySelector('.show-more');
const showMoreText = document.querySelector('.show-more span');
const showMoreIcon = document.querySelector('.show-more .icon-show-more');

let isMenuShow = false;

const hiddenMneu = () =>{
  for(let i in subMenu){
    if (i>3){ 
      subMenu[i].classList.add('d-none');
    }
  }
  showMoreText.textContent = 'Показать больше';
  showMoreIcon.style.transform = 'rotate(0deg)';
};

const showMenu = () =>{
  for(let i in subMenu){
    if (i>3){ 
      subMenu[i].classList.remove('d-none');
    }
  }
  showMoreText.textContent = 'Показать меньше'; 
  showMoreIcon.style.transform = 'rotate(180deg)';
};


showMore.addEventListener( 'click', () => {
  if (isMenuShow ) {
    hiddenMneu();
    isMenuShow  = false;
  } else {
    showMenu();
    isMenuShow  = true;
  }
});


hiddenMneu();

if (document.documentElement.scrollWidth <= 640){
  chanel.destroy();
  recommended.destroy();
  chanelRecommended.destroy();
}