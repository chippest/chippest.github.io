let audioFile = document.getElementById("audioFile")
let pButton = document.getElementById("playButton")
let musicOn = false
let mButton = document.getElementById("mutebutton")
let volumeOn = true
let rCont = document.getElementById(`rcont`)
let root = document.querySelector(`:root`)
let plbg = document.body
let plicon = document.getElementById('playingIcon')
let pltitle = document.getElementById('ptTitle')
let plsgr = document.getElementById('ptSinger')

function refresh() {
    location.reload()
}

// MUSIC FUNCTIONS
function playSong(){
    audioFile.play()
    pButton.innerHTML = "<i class='fa-solid fa-pause'></i>"
    musicOn = true
}
function pauseSong(){
    audioFile.pause()
    pButton.innerHTML = "<i class='fa-solid fa-play'></i>"
    musicOn = false
}
function mute(){
    audioFile.muted = true
    mButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
    volumeOn = false
}
function unmute(){
    audioFile.muted = false
    mButton.innerHTML = "<i class='fa-solid fa-volume-high'>"
    volumeOn = true
}

// MUSIC CONTROLLERS
pButton.onclick = function(){
    if(!musicOn){
        playSong()
    } else if(musicOn){
        pauseSong()
    }
}
mButton.onclick = function(){
    if(volumeOn){
        mute()
    } else if(!volumeOn){
        unmute()
    }
}


// OPTION CONTAINERS
function rightSlide(x){
    let root = getComputedStyle(document.querySelector(`:root`))
    let rightSize = root.getPropertyValue('--rightSize')
    const finalSize = Number(rightSize.slice(0, -3))

    let abc = x * finalSize
    let translation = 0-abc
    
    rCont.style.transform = `translateX(${translation}rem)`
}
    
    
    
// ANDROID SECTIONS
function sectionOne(){
    document.getElementById("rightContainer").style.width = "0rem"
    document.getElementById("buttons").style.width = "0rem"
    setTimeout(() => {
        document.getElementById("leftContainer").style.width = '18rem'
        document.getElementById("rightContainer").style.width = "0rem"
        document.getElementById("buttons").style.width = "0rem"
    }, 700);
}
function sectionTwo(){
    document.getElementById("leftContainer").style.width = "0rem"
    setTimeout(() => {
        document.getElementById("rightContainer").style.width = 'var(--rightSize)'
        document.getElementById("buttons").style.width = '4rem'
        document.getElementById("leftContainer").style.width = "0rem"
    }, 700);
}




let sidHTML = document.querySelectorAll('.songID')
let accentHTML = document.querySelectorAll('.accentSpan')
let spicHTML = document.querySelectorAll('.songAvatar')
let stitleHTML = document.querySelectorAll('.songTitle')
let ssingerHTML = document.querySelectorAll('.songSinger')
let suploaderHTML = document.querySelectorAll('.songUploader')


let accentColors = []
for (let i = 0; i < sidHTML.length; i++) {
    let x = accentHTML[i].innerHTML
    accentColors.push(x)
}
// console.log(accentColors)

let avatarURLs = []
for (let i = 0; i < sidHTML.length; i++) {
    let x = sidHTML[i].innerHTML
    avatarURLs.push(`icon${x}.jpg`)
}
// console.log(avatarURLs)

let songTItles = []
for (let i = 0; i < sidHTML.length; i++) {
    let x = stitleHTML[i].innerHTML
    songTItles.push(x)
}
// console.log(songTItles)

let singerNames = []
for (let i = 0; i < sidHTML.length; i++) {
    let x = ssingerHTML[i].innerHTML
    singerNames.push(x)
}
// console.log(singerNames)

let songURLs = []
for (let i = 0; i < sidHTML.length; i++) {
    let x = sidHTML[i].innerHTML
    songURLs.push(`song${x}.mp3`)
}
// console.log(songURLs)

let songItem = document.querySelectorAll('.songItem')
    
function changePlayerInfo(x){
    root.style.setProperty('--iconAccent', x.accent)
    plbg.style.backdropFilter = `blur(3rem) brightness(0%) saturate(20%)`
    plicon.style.filter = `brightness(0%)`
    setTimeout(() => {
        plbg.style.backgroundImage = `url(${x.avatar}`
        plicon.src = x.avatar
        plbg.style.backdropFilter = `blur(3rem) brightness(50%) saturate(20%)`
        plicon.style.filter = `brightness(100%)`
    }, 500);
    pltitle.innerText = x.title
    plsgr.innerText = x.singer
    audioFile.src = x.url
    playSong()
    if (window.innerWidth <= 520) {
        sectionOne()
    }
}

function Song(accent, id, avatar, title, singer, url) {
    this.accent = accent;
    this.id = id;
    this.avatar = avatar;
    this.title = title;
    this.singer = singer;
    this.url = url;
}

let songList = []

for (let i = 0; i < songItem.length; i++) {
    songList[i] = new Song(accentColors[i], sidHTML[i].innerHTML, avatarURLs[i], songTItles[i], singerNames[i], songURLs[i])
}




