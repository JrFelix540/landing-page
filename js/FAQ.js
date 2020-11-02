//accordions
const accordionBtns = document.querySelectorAll(".accordion__button");
let closed = true;
const toggleActiveAccordion = (e) => {
    e = e || window.event;
    const btnClicked = e.target || e.srcElement;
    const accordion = btnClicked.parentNode;
    const panel = accordion.querySelector(".panel");

    if (closed) {
        accordion.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
        // plus.innerHTML = "&minus;";
        closed = false;
    } else {
        accordion.classList.remove("active");
        panel.style.maxHeight = null;
        // const plus = accordion.querySelector(".accordion__add");
        // plus.innerHTML = "&plus;";
        closed = true;
    }
};

for (const accordionBtn of accordionBtns) {
    accordionBtn.addEventListener("click", toggleActiveAccordion);
}
