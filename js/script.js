const header = document.querySelector('#header')
const logo = document.querySelector('.logo')
const navLinks = document.querySelectorAll('.nav-link')
const openMenuBtn = document.querySelector('.open-menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerOverlay = document.querySelector('.hamburger-overlay')
const body = document.querySelector('body')

openMenuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.add('active')
  hamburgerOverlay.classList.add('active')
  body.style.overflowY = 'hidden'
})

closeMenuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active')
  hamburgerOverlay.classList.remove('active')
  body.style.overflowY = 'auto'
})

hamburgerOverlay.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active')
  hamburgerOverlay.classList.remove('active')
  body.style.overflowY = 'auto'
})

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    hamburgerOverlay.classList.remove('active')
    body.style.overflowY = 'auto'
  })
})

// navbar animation
window.addEventListener('scroll', () => {

  if (window.scrollY > 1) {
    header.classList.add('active')
    logo.setAttribute('src', 'assets/logo-green.svg')

  } else {
    header.classList.remove('active');
    logo.setAttribute('src', 'assets/logo-white.svg')
  }
})


// copyright date 
const copyrightYear = document.getElementById('copyright-year')
const d = new Date()
let year = d.getFullYear()

copyrightYear.innerText = year


  