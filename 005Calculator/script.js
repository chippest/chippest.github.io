let text = document.getElementById("text").value
function screen(){
    document.getElementById("text").value = text
}
function Scroll(){
    document.body.classList.toggle("scroll")
}
function input(x){
    text += x
    screen()
}
function clearfunc(){
    text = ''
    screen()
}
function removefunc(){
    text = text.substring(0, text.length - 1)
    screen()
}
function finalcalc(){
    text = eval(text).toString()
    if (text = 'infinity') {
        text = ''
    }
    screen()
}