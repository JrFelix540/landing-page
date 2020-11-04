//accordions
const accordionBtns = document.querySelectorAll(".accordion__button");
const toggleActiveAccordion = (e) => {
    e = e || window.event;
    const btnClicked = e.target || e.srcElement;
    const accordion = btnClicked.parentNode;
    const panel = accordion.querySelector(".panel");

    accordion.classList.toggle("active");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};

for (const accordionBtn of accordionBtns) {
    accordionBtn.addEventListener("click", toggleActiveAccordion);
}

// faq mobile menu

const faqDropdown = document.querySelector(".faq__mobile-dropdown");
const faqMobileMenu = document.querySelector("#faqMobileContainer");
const faqDropdownMenu = document.querySelector("#faqDropdownMenu");
faqDropdown.addEventListener("click", (e) => {
    faqMobileMenu.classList.toggle("active");
    if (faqDropdownMenu.style.maxHeight) {
        faqDropdownMenu.style.maxHeight = null;
    } else {
        faqDropdownMenu.style.maxHeight = "500px";
    }
});
