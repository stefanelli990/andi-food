const header = document.querySelector('#header')
const logo = document.querySelector('.logo')
const navLinks = document.querySelectorAll('.nav-link')
const toggleBtn = document.querySelector('.toggle-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const menu = document.querySelector('.nav-links')

// toggle menu
toggleBtn.addEventListener('click', () => {
  if(toggleBtn.classList.contains('active')) {
    header.classList.remove('active')
    toggleBtn.classList.remove('active')
    menu.classList.remove('active')
    logo.setAttribute('src', 'assets/logo-white.svg')
    if(window.scrollY > 1) {
      header.classList.add('active')
      logo.setAttribute('src', 'assets/logo-green.svg')
    }
  } else {
    header.classList.add('active')
    menu.classList.add('active')
    toggleBtn.classList.add('active')
    logo.setAttribute('src', 'assets/logo-green.svg')
  }
})

// close menu by click on link 
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    header.classList.remove('active')
    toggleBtn.classList.remove('active')
    menu.classList.remove('active')
    logo.setAttribute('src', 'assets/logo-white.svg')
    if(window.scrollY > 1) {
      header.classList.add('active')
      logo.setAttribute('src', 'assets/logo-green.svg')
    }
  })
})

// navbar animation on scroll
window.addEventListener('scroll', () => {

  if (window.scrollY > 1 ) {
    header.classList.add('active')
    logo.setAttribute('src', 'assets/logo-green.svg')
  } else if(window.scrollY < 1 && menu.classList.contains('active')) {
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


  