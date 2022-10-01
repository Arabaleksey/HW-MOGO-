// let search = document.querySelector(".intro__icon_search")
// let menuSearch = document.querySelector(".intro__search-txt")

// search.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     search.classList.toggle("active");
//     menuSearch.classList.toggle("active");
// }

let arrow = document.querySelector(".service__drop")
let drop = document.querySelector(".service__box-text")

arrow.addEventListener("click", dropDown);

function dropDown() {
    arrow.classList.toggle("active");
    drop.classList.toggle("active");
}
