let x = document.querySelector("body").innerHTML

let y = `        
<header class="headmaster">
<nav>
    <ul class="navbar">
        <li id="navhome" class="main-item"><a class="nav-item" href="../html_files/index.html">Home</a></li>
        <li id="navabout" class="main-item"><a class="nav-item" href="../html_files/about.html">About</a></li>
        <li id="navcontact" class="main-item"><a class="nav-item" href="../html_files/contact.html">Contact</a></li>
        <li id="navhelp" class="main-item"><a class="nav-item" href="../html_files/help.html">Help</a></li>
        <div class="aligner">
            <li id="dotButton" class="main-item"><svg class="nav-item dots" xmlns="http://www.w3.org/2000/svg" height="25" width="7.5" viewBox="0 0 128 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
            </li>
            <div id="hiddenMenuItems" class="hidden">
                <button id="Logbtn" class="hidden-item">Login</button>
                <button id="Signupbtn" class="hidden-item">Signup</button>
                <button id="Settingsbtn" class="hidden-item">Settings</button>
            </div>
        </div>
    </ul>
</nav>
</header>`

document.querySelector("body").innerHTML = y + x

let currentPageColor = "#ffffff55"

document.getElementById("dotButton").addEventListener('click', function() {
    document.getElementById("hiddenMenuItems").classList.toggle('shown');
});

document.getElementById("Logbtn").onclick = function() {
    window.location.href = "../html_files/login.html";
};
document.getElementById("Signupbtn").onclick = function() {
    window.location.href = "../html_files/signup.html";
};
document.getElementById("Settingsbtn").onclick = function() {
    window.location.href = "../html_files/settings.html";
};

if (document.body.id == "aboutpage"){
    document.getElementById("navabout").style.backgroundColor = currentPageColor
}
if (document.body.id == "contactpage"){
    document.getElementById("navcontact").style.backgroundColor = currentPageColor
}
if (document.body.id == "helppage"){
    document.getElementById("navhelp").style.backgroundColor = currentPageColor
}
if (document.body.id == "homepage"){
    document.getElementById("navhome").style.backgroundColor = currentPageColor
}
if (document.body.id == "loginpage"){
    document.getElementById("Logbtn").style.backgroundColor = currentPageColor
    document.getElementById("dotButton").style.backgroundColor = currentPageColor
}
if (document.body.id == "settingspage"){
    document.getElementById("Settingsbtn").style.backgroundColor = currentPageColor
    document.getElementById("dotButton").style.backgroundColor = currentPageColor
}
if (document.body.id == "signuppage"){
    document.getElementById("Signupbtn").style.backgroundColor = currentPageColor
    document.getElementById("dotButton").style.backgroundColor = currentPageColor
}