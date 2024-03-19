document.getElementById("BtnLogin").onclick = function () {

    const username = [];
    const password = [];
    username[0] = "ibtisam";
    username[1] = "lulu";


    password[0] = "123";
    password[1] = "456";

    for(i = 0; i <username.length; i++) {
    for (j = 0; j < password.length; j++) {
        if (document.getElementById("username").value == username[i] && document.getElementById("password").value == password[j]) {
            window.location.href = "../html_files/index.html";
            console.log("Hello world")
        }
        else {
            alert("Error: inncorrect username or password");
        }
    }
}
};