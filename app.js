// * ===== Slider
(function slider() {
  const sliderEl = document.querySelector('.reviews__slider');
  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
    },
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

//* Close menu after click on Links
const menuLinks = document.querySelectorAll('.mobile-menu-link');

function linkAction() {
  document.querySelector('.mobile-menu').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
  document.querySelector('body').classList.remove('no-scroll');
}
menuLinks.forEach((link) => link.addEventListener('click', linkAction));

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

//* Change Background Header
function scrollHeader() {
  const nav = document.querySelector('header');

  if (this.scrollY >= 100) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// ! Change
const header = document.querySelector('header');
if (window.pageYOffset >= 100) {
  console.log(1);
  header.classList.add('scroll-header');
}

//* ==== Scroll Section Active Link *//
function scrollActiveSection() {
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.menu a[href*=' + sectionId + ']')
          .classList.add('active');
      } else {
        document
          .querySelector('.menu a[href*=' + sectionId + ']')
          .classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
}
scrollActiveSection();

function scrollActiveMobileSection() {
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.mobile-menu a[href*=' + sectionId + ']')
          .classList.add('active');
      } else {
        document
          .querySelector('.mobile-menu a[href*=' + sectionId + ']')
          .classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
}
scrollActiveMobileSection();

//* Show scroll top
function scrollTop() {
  const scrollTopEl = document.querySelector('.btn-scroll-top');
  if (this.scrollY >= 560) {
    scrollTopEl.classList.add('show-scroll');
  } else {
    scrollTopEl.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollTop);

function goToUp() {
  const scrollTopEl = document.querySelector('.btn-scroll-top');
  scrollTopEl.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  });
}
goToUp();
