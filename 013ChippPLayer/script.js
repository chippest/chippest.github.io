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
// SONG LIBRARY
let songID = ['1', '2', '3', '4', '5', '6', '7', '8']
let songFull = ['Thousand Miles', 'Talk To You', 'Hearts', 'Paper Planes', 'Atlantis', 'Sway To My Beat In Cosmos', 'Divine', 'Hope Is the Thing With Feathers']
let songName = []
for (let i = 0; i < songID.length; i++) {
    let first = songFull[i]
    let second
    if(songFull[i].length > 13){
    second = first.slice(0, 10) + `...`
    songName.push(second)
    } else{
        songName.push(first)
    }
}
let singerName = [`the Kid LAROI`, 'Zach B', 'Zach B', 'M.I.A.', 'Seafret', 'Chevy', 'Krishnahazar', 'Chevy']
let uploader = [`chipp`, 'chipp', 'chipp', 'Maxi', 'Monkey', 'Mahdi', 'Hell', 'Mahdi']
let accent = [`#978e75`, `#c264a6`, '#272571', '#715755', '#564E4B', '#846699', '#AD825D', '#72556B']

let jpglink = `https://lets.linkpc.net/icons/`
let avatar = []
for (let i = 0; i < songID.length; i++) {
    avatar.push(`${jpglink}${songID[i]}.jpg`)
}
let mp3link = `https://lets.linkpc.net/songs/`
let audio = []
for (let i = 0; i < songID.length; i++) {
    audio.push(`${mp3link}${songID[i]}.mp3`)
}
let songItem = []
function refresh() {
    location.reload()
}
let songList = []
for (let i = 0; i < songID.length; i++) {
    songList[i] = new Song(songID[i], songFull[i], songName[i], singerName[i], uploader[i], accent[i], avatar[i], audio[i])
}
let songCont = document.getElementById('songList')











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

let shuffled = false

let songNumber = 0
function next(){
    if(!shuffled){
    songNumber++
    if (songNumber >= songID.length){
        songNumber = 0
    }
    changePlayerInfo(songList[songNumber])}
    else if(shuffled){
        shuffle()
        changePlayerInfo(songList[songNumber])
    }
}
function prev(){
    if(!shuffled){
        songNumber--
    if (songNumber == 0){
        songNumber = songID.length
    }
    changePlayerInfo(songList[songNumber])}
    else if(shuffled){
        shuffle()
        changePlayerInfo(songList[songNumber])
    }
}

function shuffle(){
    let x
    let y
    x = Math.floor(Math.random() * songID.length) + 0
    y = x
    if (x == songNumber){
        y = Math.floor(Math.random() * songID.length) + 0
    }
    songNumber = y
    console.log(songNumber)
}





let sButton = document.getElementById('shufButton')

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
        mButton.style.color = 'var(--iconAccent)'
    } else if(!volumeOn){
        unmute()
        mButton.style.color = 'white'
    }
}
sButton.onclick = function(){
    if(shuffled){
        shuffled = false
        sButton.style.color = 'white'
    } else if(!shuffled){
        shuffled = true
        sButton.style.color = 'var(--iconAccent)'
    }
}



// OPTION CONTAINERS
function rightSlide(x){
    let root = getComputedStyle(document.querySelector(`:root`))
    let rightSize = root.getPropertyValue('--rightSize')
    if(window.innerWidth <= 720){
    const finalSize = Number(rightSize.slice(0, -2))

    let abc = x * finalSize
    let translation = 0-abc
    
    rCont.style.transform = `translateX(${translation}vw)`
    } else{
        const finalSize = Number(rightSize.slice(0, -3))
    
        let abc = x * finalSize
        let translation = 0-abc
        
        rCont.style.transform = `translateX(${translation}rem)`
    }
}
rightSlide(1)



// ANDROID SECTIONS
// function sectionOne(){
//         document.getElementById("buttons").style.opacity = '0%'
//         document.getElementById("rightContainer").style.opacity = '0%'
//     setTimeout(() => {
//         document.getElementById("leftContainer").style.display = 'flex'
//         document.getElementById("rightContainer").style.display = 'none'
//         document.getElementById("buttons").style.display = 'none'
//     }, 200);
//     setTimeout(() => {
//         document.getElementById("leftContainer").style.opacity = '100%'
//     }, 400);
// }
// function sectionTwo(){
//         document.getElementById("leftContainer").style.opacity = '0%'
//     setTimeout(() => {
//         document.getElementById("leftContainer").style.display = 'none'
//         document.getElementById("rightContainer").style.display = 'flex'
//         document.getElementById("buttons").style.display = 'flex'
//     }, 200);
//     setTimeout(() => {
//         document.getElementById("rightContainer").style.opacity = '100%'
//         document.getElementById("buttons").style.opacity = '100%'
//     }, 400);
// }
// if (window.innerWidth <= 720) {
//     sectionOne()
// }

// ANDROID SECTIONS
function sectionOne(){
    document.getElementById("buttons").style.width = '0'
document.getElementById("rightContainer").style.width = '0'
    setTimeout(() => {
    document.getElementById("leftContainer").style.transform = 'translateX(0%)'
    document.getElementById('playingIcon').style.transform = ''
    document.getElementById('ptTitle').style.transform = ''
    document.getElementById('ptSinger').style.transform = ''
    }, 450);
}
function sectionTwo(){
    document.getElementById("leftContainer").style.transform = 'translateX(-100%)'
    document.getElementById('playingIcon').style.transform = 'translateX(-100%)'
    document.getElementById('ptTitle').style.transform = 'translateX(200%)'
    document.getElementById('ptSinger').style.transform = 'translateX(-200%)'
    setTimeout(() => {
    document.getElementById("rightContainer").style.width = ''
    document.getElementById("buttons").style.width = ''
    }, 450);
}
if (window.innerWidth <= 720) {
    sectionOne()
    document.body.appendChild(document.getElementById('playingControls'))
    document.body.appendChild(document.getElementById('rightContainer'))
    document.body.appendChild(document.getElementById('buttons'))
    document.body.appendChild(document.getElementById('leftContainer'))
    document.body.appendChild(document.getElementById('sectionSliders'))
    document.getElementById('playingText').appendChild(document.getElementById('playingIcon'))
    document.getElementById('playingText').appendChild(document.getElementById('ptSinger'))
    document.getElementById('playingText').appendChild(document.getElementById('ptTitle'))
}


// MUSIC
function Song(id, fullname, name, singer, uploader, accent, avatar, audio) {
    this.id = id;
    this.fullname = fullname
    this.name = name;
    this.singer = singer;
    this.uploader = uploader;
    this.accent = accent;
    this.avatar = avatar;
    this.audio = audio;
}
for (let i = 0; i < songID.length; i++) {
    songCont.innerHTML += `<div id="song${songID[i]}" class="row songItem" style="--iconAccent: ${accent[i]}50;" onclick="changePlayerInfo(songList[${i}])"></div>`
    songItem[i] = document.getElementById(`song${songID[i]}`)
    songItem[i].innerHTML = `
    <img src="${songList[i].avatar}" alt="" class="songAvatar">
    <div class="songText column">
        <div class="songUp row">
            <span class="songTitle">${songList[i].fullname}</span>
            <span class="songID">${songList[i].id}</span>
        </div>
        <div class="songUp row">
            <span class="songSinger">${songList[i].singer}</span>
            <span class="songUploader">${songList[i].uploader}</span>
        </div>
    </div>
    `
    console.log(songItem[i])
}
document.getElementById(`song1`).classList.add('songNow')
document.getElementById('ptTitle').innerText = songList[0].name
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
    pltitle.innerText = x.name
    plsgr.innerText = x.singer
    audioFile.src = x.audio
    playSong()
    if (window.innerWidth <= 720) {
        sectionOne()
    }
    songNumber = x.id - 1
    for (let i = 0; i < songID.length; i++) {
        document.getElementById(`song${songID[i]}`).classList.remove('songNow')
    }
    document.getElementById(`song${x.id}`).classList.add('songNow')
}