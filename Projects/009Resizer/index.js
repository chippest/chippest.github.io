let div1hi = 1
let div1wi = 1
let div1bg = `#8e8996`
let div1de = 0

let div2hi = 1
let div2wi = 1
let div2bg = `#8e8996`
let div2de = 0

let div3hi = 1
let div3wi = 1
let div3bg = `#8e8996`
let div3de = 0

let edit = function(){

document.getElementById("div1").style.padding = `${div1hi}rem ${div1wi}rem`
document.getElementById("div1").style.background = div1bg
document.getElementById("div1").style.rotate = `${div1de}deg`
document.getElementById("div2").style.padding = `${div2hi}rem ${div2wi}rem`
document.getElementById("div2").style.background = div2bg
document.getElementById("div2").style.rotate = `${div2de}deg`
document.getElementById("div3").style.padding = `${div3hi}rem ${div3wi}rem`
document.getElementById("div3").style.background = div3bg
document.getElementById("div3").style.rotate = `${div3de}deg`
    
}

document.getElementById("submit").onclick = function(){

div1hi = Number(document.getElementById("div1hi").value)
div1wi = Number(document.getElementById("div1wi").value)
div1bg = document.getElementById("div1bg").value
div1de = div1de + Number(document.getElementById("div1de").value)
div2hi = Number(document.getElementById("div2hi").value)
div2wi = Number(document.getElementById("div2wi").value)
div2bg = document.getElementById("div2bg").value
div2de = div2de + Number(document.getElementById("div2de").value)
div3hi = Number(document.getElementById("div3hi").value)
div3wi = Number(document.getElementById("div3wi").value)
div3bg = document.getElementById("div3bg").value
div3de =  div3de + Number(document.getElementById("div3de").value)

edit()

}

document.getElementById("reset").onclick = function(){
    
div1hi = 1
div1wi = 1
div1bg = `#8e8996`
div1de = 0
div2hi = 1
div2wi = 1
div2bg = `#8e8996`
div2de = 0
div3hi = 1
div3wi = 1
div3bg = `#8e8996`
div3de = 0

edit()

}

function callerthingie(){
    document.getElementById("rowsinthing").classList.toggle("getuplol")
}