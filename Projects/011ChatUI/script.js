let input
let prevConvo
let ConvoI
let ConvoII

document.getElementById("send1").onclick = function(){
    input = document.getElementById("inputmessage").value

    prevConvo = document.getElementById("messages").innerHTML

    ConvoI = `<div class="left"><span class="lefttext">${input}</span></div>`

    if(document.getElementById("inputmessage").value != ''){
    document.getElementById("messages").innerHTML = prevConvo + ConvoI
    }
    
    document.getElementById("inputmessage").value = ''

    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
}
document.getElementById("send2").onclick = function(){
    input = document.getElementById("inputmessage").value

    prevConvo = document.getElementById("messages").innerHTML

    ConvoI = `<div class="right"><span class="righttext">${input}</span></div>`
    
    if(document.getElementById("inputmessage").value != ''){
    document.getElementById("messages").innerHTML = prevConvo + ConvoI
    }
    
    document.getElementById("inputmessage").value = ''

    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
}
