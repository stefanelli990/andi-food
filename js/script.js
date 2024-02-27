const header = document.querySelector('#header')
const logo = document.querySelector('.logo')
const navLinks = document.querySelectorAll('.nav-link')
const openMenuBtn = document.querySelector('.open-menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerOverlay = document.querySelector('.hamburger-overlay')
const body = document.querySelector('body')
const scrollSpy = document.querySelector('.scroll-spy')
const sections = document.querySelectorAll('.sections')

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


// scrollspy animation
window.addEventListener('scroll', () => {

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled to the bottom of the page
  if (scrollPosition + windowHeight >= fullHeight) {
    console.log('Reached the bottom of the page!');
    scrollSpy.style.translate = '221px'
  }
  
  // slide scrollspy navlinks
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const height = section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      console.log('In view:', section.id);
      if (section.id === 'about') {
        scrollSpy.style.translate = '94px';
      } else if (section.id === 'services') {
        scrollSpy.style.translate = '158px';
      } else if (section.id === 'contact') {
        scrollSpy.style.translate = '221px';
      } else if (section.id === 'hero') {
        scrollSpy.style.translate = '22px';
      }
    }
  })
  

  
  // navbar animation
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


  