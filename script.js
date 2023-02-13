const menuEl = document.querySelector("#icon");
const barEl = document.querySelector("ul");

menuEl.addEventListener("click", () => {
    barEl.classList.toggle("show");
});