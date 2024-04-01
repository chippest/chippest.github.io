document.getElementById("BtnLogin").onclick = function () {

    const usernames = ["ibtisam", "lulu", "chipp"];
    const passwords = ["123", "456", "<3"];

    let match = false;

    for (let i = 0; i < usernames.length; i++) {
        if (document.getElementById("username").value === usernames[i] && document.getElementById("password").value === passwords[i]) {
            match = true;
            break;
        }
    }

    if (match) {
        window.location.href = "../html_files/index.html";
        console.log("Hello world");
    } else {
        alert("Error: incorrect username or password");
    }
};
