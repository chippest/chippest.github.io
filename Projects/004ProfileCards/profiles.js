let startbutton  = document.querySelector(".startbutton");
let bup1 = document.querySelector("#bup1");
let bdown1 = document.querySelector("#bdown1");
let bup2 = document.querySelector("#bup2");
let bdown2 = document.querySelector("#bdown2");
let bup3 = document.querySelector("#bup3");
let bdown3 = document.querySelector("#bdown3");
let slide = document.querySelector(".slide");

startbutton.addEventListener("click", () => {
    slide.classList.add("slidep1")
})
bdown1.addEventListener("click", () => {
    slide.classList.add("slidep2")
})
bdown2.addEventListener("click", () => {
    slide.classList.add("slidep3")
})
bdown3.addEventListener("click", () => {
    slide.classList.remove("slidep3","slidep2","slidep1")
})

bup1.addEventListener("click", () => {
    slide.classList.remove("slidep1")
})
bup2.addEventListener("click", () => {
    slide.classList.remove("slidep2")
})
bup3.addEventListener("click", () => {
    slide.classList.remove("slidep3")
})
