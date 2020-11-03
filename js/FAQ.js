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
