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

// Multi-step form
let currentTab = 0;
const tabs = document.querySelectorAll(".tab");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const showTab = (n) => {
    tabs[n].style.display = "block";

    if (n === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "flex";
    }

    if (n === tabs.length - 1) {
        nextBtn.innerHTML = "Create Account";
    } else {
        nextBtn.innerHTML = "Next";
    }
};

const prevNext = (n) => {
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= tabs.length) {
        return;
    }
    showTab(currentTab);
};

nextBtn &&
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        prevNext(1);
    });

prevBtn &&
    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        prevNext(-1);
    });

showTab(currentTab);

// Strong/Weak Password checks
const passwordInput = document.querySelector("#password");
const passwordStrengthText = document.querySelector(
    ".text__password-strength",
);

// Contains atleast 8 characters
const weak = new RegExp("(?=.{8,})");
// Contains atleast one upper case letter, one lower case letter and (one number or one special char)
const medium = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})",
);
// Contains atleast at least one upper case letter, one lower case letter ,one number AND one special char)
const strong = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
);

const testPassword = (value) => {
    let passwordStrength = {
        title: "",
        color: "",
    };

    if (strong.test(value)) {
        passwordStrength.title = `strong`;
        passwordStrength.color = `green`;
    } else if (medium.test(value)) {
        passwordStrength.title = `medium`;
        passwordStrength.color = `blue`;
    } else if (!weak.test(value)) {
        passwordStrength.title = `weak`;
        passwordStrength.color = `red`;
    } else {
        passwordStrength.title = `weak`;
        passwordStrength.color = `red`;
    }

    return passwordStrength;
};

passwordInput &&
    passwordInput.addEventListener("keyup", (e) => {
        e.preventDefault();
        const strength = testPassword(passwordInput.value);

        passwordStrengthText.innerHTML = strength.title;
        passwordStrengthText.style.color = strength.color;
    });

// Terms of service modal
const openTermsBtn = document.querySelector(`#openTermsBtn`);
const closeTermsBtn = document.querySelector(`#closeTermsBtn`);

const termsContainer = document.querySelector(`#termsModal`);

openTermsBtn &&
    openTermsBtn.addEventListener("click", () => {
        termsContainer.style.display = "block";
    });

closeTermsBtn &&
    closeTermsBtn.addEventListener("click", () => {
        termsContainer.style.display = "none";
    });
