const toggleBtn = document.querySelector('.toggle-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')

toggleBtn.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')
})


// copyright date 

const copyrightYear = document.getElementById('copyright-year')
const d = new Date()
let year = d.getFullYear()

copyrightYear.innerText = year

// swiper

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
  