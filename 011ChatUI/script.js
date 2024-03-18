let input
let prevConvo
let ConvoI
let ConvoII

document.getElementById("send1").onclick = function(){
    input = document.getElementById("inputmessage").value
    console.log(input)

    prevConvo = document.getElementById("messages").innerHTML
    console.log(prevConvo)

    ConvoI = `<div class="left"><span class="lefttext">${input}</span></div>`
    console.log(ConvoI)

    if(document.getElementById("inputmessage").value != ''){
    document.getElementById("messages").innerHTML = prevConvo + ConvoI
    }
    
    document.getElementById("inputmessage").value = ''
}
document.getElementById("send2").onclick = function(){
    input = document.getElementById("inputmessage").value
    console.log(input)

    prevConvo = document.getElementById("messages").innerHTML
    console.log(prevConvo)

    ConvoI = `<div class="right"><span class="righttext">${input}</span></div>`
    console.log(ConvoI)
    
    if(document.getElementById("inputmessage").value != ''){
    document.getElementById("messages").innerHTML = prevConvo + ConvoI
    }
    
    document.getElementById("inputmessage").value = ''
}