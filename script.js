const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

document.addEventListener('click', function () {
    arrow.classList.toggle("on");
    nav.classList.toggle("on");
})