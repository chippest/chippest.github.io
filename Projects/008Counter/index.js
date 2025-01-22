let count = Number(document.getElementById("counter").textContent)
    console.log(count)

let uinc = 1

document.getElementById("usub").onclick = function(){
    uinc = Number(document.getElementById("uinc").value)
}

let dinc = 1

document.getElementById("dsub").onclick = function(){
    dinc = Number(document.getElementById("dinc").value)
}

document.getElementById("up").onclick = function(){
    count = count + Math.abs(uinc)
    document.getElementById("counter").textContent = `${count}`
}
document.getElementById("down").onclick = function(){
    count = count - Math.abs(dinc)
    document.getElementById("counter").textContent = `${count}`
}
document.getElementById("reset").onclick = function(){
    count = 0
    document.getElementById("counter").textContent = `${count}`
}