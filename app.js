// * ===== Slider
(function slider() {
  const sliderEl = document.querySelector('.reviews__slider');
  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();

// * ===== Show Menu
(function showMenu() {
  const toggleBtn = document.querySelector('.toggle');
  const menu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('.mobile-menu__close');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  toggleBtn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', (e) => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  menuClose.addEventListener('click', (e) => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });
})();

// * ===== Dark Mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const themeBtn = document.querySelector('#theme');
themeBtn.addEventListener('click', (e) => {
  document.querySelector('html').classList.toggle('dark');

  if (document.querySelector('html').classList.contains('dark')) {
    localStorage.theme === 'dark';
  } else {
    localStorage.theme === 'light';
  }
});
