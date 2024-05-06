let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let light = document.querySelector(".light");

sun.onclick = function () {
    light.classList.add("light");
    light.classList.remove("dark");
};

moon.onclick = function () {
    light.classList.add("dark");
    light.classList.remove("light");
}



let menu = document.querySelector('.n-center')
let scroll1 = document.querySelector('.light')
function openMenu() {
    menu.classList.toggle('menu')
    scroll1.classList.toggle('hidden')
}
