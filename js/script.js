

let btn = document.querySelector(".spinBtn");
let wheel = document.querySelector(".wheel");
let value = Math.ceil(Math.random() * 3600);

btn.addEventListener("click", () => {
    wheel.style.transform = "rotate(" + value + "deg)";
    value = Math.ceil(Math.random() * 3600);
});