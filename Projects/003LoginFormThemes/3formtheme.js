let gradient1 = document.querySelector(".gradient1");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider1 = document.querySelector(".slider1");
let form1 = document.querySelector(".form1");
let emailinput1 = document.querySelector(".emailinput1");
let passinput1 = document.querySelector(".passinput1");
let submit1 = document.querySelector(".submit1");
let fp1 = document.querySelector(".fp1");
let userinput1 = document.querySelector(".userinput1");
let emailinput2 = document.querySelector(".emailinput2");
let passinput2 = document.querySelector(".passinput2");
let passinput3 = document.querySelector(".passinput3");
let submit2 = document.querySelector(".submit2");
let container = document.querySelector(".container");

signup.addEventListener("click", () => {
    gradient1.classList.add("gradient1js");
    slider1.classList.add("slider1js");
    form1.classList.add("form1js");
    emailinput1.classList.add("emailinput1js");
    passinput1.classList.add("passinput1js");
    submit1.classList.add("submit1js");
    fp1.classList.add("fp1js");
    userinput1.classList.add("userinput1js");
    emailinput2.classList.add("emailinput2js");
    passinput2.classList.add("passinput2js");
    passinput3.classList.add("passinput3js");
    submit2.classList.add("submit2js");
    container.classList.add("container1");
});

login.addEventListener("click", () => {
    gradient1.classList.remove("gradient1js");
    slider1.classList.remove("slider1js");
    form1.classList.remove("form1js");
    emailinput1.classList.remove("emailinput1js");
    passinput1.classList.remove("passinput1js");
    submit1.classList.remove("submit1js");
    fp1.classList.remove("fp1js");
    userinput1.classList.remove("userinput1js");
    emailinput2.classList.remove("emailinput2js");
    passinput2.classList.remove("passinput2js");
    passinput3.classList.remove("passinput3js");
    submit2.classList.remove("submit2js");
    container.classList.remove("container1");
})