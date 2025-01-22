let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider1 = document.querySelector(".slider1");
let form1 = document.querySelector(".form1");

signup.addEventListener("click", () => {
    slider1.classList.add("slider1js");
    form1.classList.add("form1js");
});

login.addEventListener("click", () => {
    slider1.classList.remove("slider1js");
    form1.classList.remove("form1js");
})