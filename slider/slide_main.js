let list = document.querySelector(".slider__list");
let items = document.querySelectorAll(".slider__item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let active = 0;
let lengthItem = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItem) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
};
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItem;
    } else {
        active -= 1;
    }
    reloadSlider();
};
let refreshSlider = setInterval(() => {
    next.click();
}, 4000);
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 4000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        reloadSlider();
    });
});
