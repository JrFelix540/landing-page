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