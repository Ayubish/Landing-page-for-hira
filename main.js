const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", ()=> {
    menu.classList.toggle("mobile-menu");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");

})