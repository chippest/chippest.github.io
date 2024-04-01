let x = document.querySelector("body").innerHTML

let y = `        
<header class="headmaster">
<ul class="navbar">
    <a id="navhome" class="main-item" href="../../">Home</a>
    <a id="navabout" class="main-item" href="../../pages/about/about.html">About</a>
    <a id="navcontact" class="main-item" href="../../pages/contact/contact.html">Contact</a>
    <a id="navhelp" class="main-item" href="../../pages/help/help.html">Help</a>
    <li id="dotButton" class="main-pic">
        <img id="navavatar" src="../../pages/header/useravatar.jpg" width="40px" style="border-radius: 50%;">
        <div id="hiddenMenuItems" class="hidden">
            <button id="Logbtn" class="hidden-item">Login</button>
            <button id="Signupbtn" class="hidden-item">Signup</button>
            <button id="Settingsbtn" class="hidden-item">Settings</button>
        </div>
    </li>
</ul>
</header>`

document.querySelector("body").innerHTML = y + x

let currentPageColor = "#ffffff55"

document.getElementById("dotButton").addEventListener('click', function() {
    document.getElementById("hiddenMenuItems").classList.toggle('shown');
});

document.getElementById("Logbtn").onclick = function() {
    window.location.href = "../../pages/login/login.html";
};
document.getElementById("Signupbtn").onclick = function() {
    window.location.href = "../../pages/signup/signup.html";
};
document.getElementById("Settingsbtn").onclick = function() {
    window.location.href = "../../pages/settings/settings.html";
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
    document.getElementById("navavatar").style.borderColor = currentPageColor
}
if (document.body.id == "settingspage"){
    document.getElementById("Settingsbtn").style.backgroundColor = currentPageColor
    document.getElementById("navavatar").style.borderColor = currentPageColor
}
if (document.body.id == "signuppage"){
    document.getElementById("Signupbtn").style.backgroundColor = currentPageColor
    document.getElementById("navavatar").style.borderColor = currentPageColor
}