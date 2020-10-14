// Smooth Scroll
const menuLinks = document.querySelectorAll('.menu__link')
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

for (const link of menuLinks){
    link.addEventListener('click', clickHandler)
}

// Fade in 
const faders = document.querySelectorAll('.fade-in')
const slides = document.querySelectorAll(`.from`)

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
}
const appearOnScroll = new IntersectionObserver(
  function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return
      } else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  },
  appearOptions
)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})

slides.forEach( slider => {
  appearOnScroll.observe(slider)
})

// mobile menu

const menuIcon = document.querySelector('.menu__btn')

const toggleMenu = () => {
  if(!showMenu){
    console.log(showMenu)
    menuIcon.classList.add('close')


    showMenu = true
        
  } else {
    menuIcon.classList.remove('close')
    showMenu = false
    console.log(showMenu)
  }

  
}

menuIcon.addEventListener('click', toggleMenu)

let showMenu = false







// Cookie
const cookieContainer = document.querySelector('.section__cookie')
const acceptCookie = document.querySelector('#cookieAllow')
const denyCookie = document.querySelector('#cookieDeny')





const showTrue = localStorage.getItem('cookieAccept')
if (!showTrue){
  cookieContainer.classList.add('show')
}

acceptCookie.addEventListener('click', () => {
  localStorage.setItem('cookieAccept', 'true')
  cookieContainer.classList.remove('show')
})


denyCookie.addEventListener('click', () => {
  localStorage.setItem('cookieAccept', 'false')
  cookieContainer.classList.remove('show')
})
