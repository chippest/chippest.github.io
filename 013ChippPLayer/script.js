let audioFile = document.getElementById("audioFile")
let pButton = document.getElementById("playButton")
let musicOn = false
let mButton = document.getElementById("mutebutton")
let volumeOn = true

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