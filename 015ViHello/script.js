let blurText = document.getElementById("blur")
let summoner = document.getElementById('summoner')
let visibilities = document.querySelectorAll('.close')
let error = document.getElementById('error')
let nextext = document.getElementById('nexttext')
let body = document.body
let bgr = document.getElementById('bgr')
let done = false
let nao = document.getElementById('nao')

summoner.onclick = function(){
    for (let i = 0; i < visibilities.length; i++) {
        visibilities[i].classList.toggle('open')
    }
}
function close(){
    for (let i = 0; i < visibilities.length; i++) {
        visibilities[i].classList.toggle('open')
    }
}
visibilities[0].onclick = function() {
    blurText.style.filter = 'blur(0.7rem)'
    // blurText.style.backgroundColor = '#000000e7'
    close()
    setTimeout(() => {
        visibilities[1].classList.remove('locked')
    }, 250);
}
visibilities[1].onclick = function() {
    blurText.style.filter = 'blur(0.5rem)'
    // blurText.style.backgroundColor = '#000000da'
    close()
    setTimeout(() => {
        visibilities[2].classList.remove('locked')
    }, 250);
}
visibilities[2].onclick = function() {
    blurText.style.filter = 'blur(0.3rem)'
    close()
    setTimeout(() => {
        visibilities[3].classList.remove('locked')
    }, 250);
}
let clicks = 1
visibilities[3].onclick = function() {
    if (clicks < 128) {
        blurText.style.filter = 'blur(0rem)'
        for (let i = 0; i < visibilities.length -1; i++) {
            visibilities[i].classList.add('locked')
        }
        error.style.display = 'block'
        clicks = clicks * 2
        // visibilities[3].id = "errorPlacer"
        error.style.scale = clicks
        if (clicks == 2) {
            blurText.style.display = 'none'
        }
        if (clicks == 4) {
            summoner.style.display = 'none'
        }
        if (clicks == 16) {
            visibilities[1].style.display = 'none'
            visibilities[2].style.display = 'none'
            visibilities[3].style.zIndex = '4'
            body.appendChild(visibilities[3])
        }
        if (clicks == 32) {
            visibilities[0].style.display = 'none'
        }
        if (clicks == 128) {
            visibilities[3].style.display = 'none'
        }
    }
}
// document.getElementById('errorPlacer').onclick = function(){
// }
error.onclick = function(){
    if (clicks >= 128 & clicks < 512) {
        clicks = clicks * 2
        error.style.scale = clicks
    }
    if (clicks >= 512 & !done) {
        error.innerHTML = '<i class="fa-solid fa-heart" style="color: #8b0000;"></i>'
        // error.innerHTML = '<i class="fa-solid fa-star" style="color: #8b0000;"></i>'
        error.style.fontSize = '4rem'
        nextext.style.display = 'block'
        nao.style.display = 'block'
        body.style.backgroundColor = 'black'
        bgr.style.display = 'block'
        done = true
        error.style.transition = '3s transform'
        error.style.transform = 'rotateZ(10800deg)'
        setTimeout(() => {
            error.style.backgroundColor = 'transparent'
            error.style.transition = '1s all, 3s transform'
            error.style.scale = 1
            error.style.color = 'black'
        }, 1000);
    }
}
