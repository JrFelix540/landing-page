// Smooth Scroll
const menuLinks = document.querySelectorAll(".menu__link");
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}

for (const link of menuLinks) {
    link.addEventListener("click", clickHandler);
}

// Fade in
const faders = document.querySelectorAll(".fade-in");
const slides = document.querySelectorAll(`.from`);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll,
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});

slides.forEach((slider) => {
    appearOnScroll.observe(slider);
});

// mobile menu

const menuIcon = document.querySelector(".mobile__menu-btn");
const menuBg = document.querySelector(".mobile__menu-bg");
const menuList = document.querySelector(".mobile__menu-list");
const mobileLinks = document.querySelectorAll(".mobile__menu-link");

const hideMenuFunction = () => {
    menuIcon.classList.remove("close");
    menuBg.classList.remove("show");
    menuList.classList.remove("show");
    showMenu = false;
};

const displayMenuFunction = () => {
    menuIcon.classList.add("close");
    menuBg.classList.add("show");
    menuList.classList.add("show");
    showMenu = true;
};

for (const link of mobileLinks) {
    link.addEventListener("click", hideMenuFunction);
}

const toggleMenu = () => {
    if (!showMenu) {
        displayMenuFunction();
    } else {
        hideMenuFunction();
    }
};

menuIcon ? menuIcon.addEventListener("click", toggleMenu) : null;

let showMenu = false;

// Cookie
const cookieContainer = document.querySelector(".section__cookie");
const acceptCookie = document.querySelector("#cookieAllow");
const denyCookie = document.querySelector("#cookieDeny");

const showTrue = localStorage.getItem("cookieAccept");
if (!showTrue) {
    cookieContainer ? cookieContainer.classList.add("show") : null;
}

acceptCookie
    ? acceptCookie.addEventListener("click", () => {
          localStorage.setItem("cookieAccept", "true");
          cookieContainer.classList.remove("show");
      })
    : null;

denyCookie
    ? denyCookie.addEventListener("click", () => {
          localStorage.setItem("cookieAccept", "false");
          cookieContainer.classList.remove("show");
      })
    : null;
