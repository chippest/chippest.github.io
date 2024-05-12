let audioFile = document.getElementById("audioFile")
let pButton = document.getElementById("playButton")
let musicOn = false
let mButton = document.getElementById("mutebutton")
let volumeOn = true
let rCont = document.getElementById(`rcont`)


function refresh() {
    location.reload()
}

pButton.onclick = function(){
    if(!musicOn){
        audioFile.play()
        pButton.innerHTML = "<i class='fa-solid fa-pause'></i>"
        musicOn = true
    } else if(musicOn){
        audioFile.pause()
        pButton.innerHTML = "<i class='fa-solid fa-play'></i>"
        musicOn = false
    }
}
mButton.onclick = function(){
    if(volumeOn){
        audioFile.muted = true
        mButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
        volumeOn = false
    } else if(!volumeOn){
        audioFile.muted = false
        mButton.innerHTML = "<i class='fa-solid fa-volume-high'>"
        volumeOn = true
    }
}

function rightSlide(x){
    let style = getComputedStyle(document.querySelector(`:root`))
    let rightSize = style.getPropertyValue('--rightSize')
    const finalSize = Number(rightSize.slice(0, -3))

    let abc = x * finalSize
    let translation = 0-abc
    
    rCont.style.transform = `translateX(${translation}rem)`
}
rightSlide(2)




function Person(avatar, name, singer, time, accent) {
  this.avatar = avatar;
  this.name = name;
  this.singer = singer;
  this.time = time;
  this.accent = accent;
}