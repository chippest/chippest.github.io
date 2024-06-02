// MAIN VARIABLES
let audioFile = document.getElementById('audioFile')
let songNumber = 0
let musicOn = false
let section = document.getElementById('sectionOne')
let playerOn = true
let sButton = document.getElementById('shufButton')
let shuffled = false
let prevButton = document.getElementById('prevButton')
let pButton = document.getElementById("playButton")
let nextButton = document.getElementById('nextButton')
let mButton = document.getElementById("mutebutton")
let volumeOn = true
let rCont = document.getElementById(`rcont`)
let root = document.querySelector(`:root`)
let plicon = document.getElementById('playingIcon')
let pltitle = document.getElementById('ptTitle')
let plsgr = document.getElementById('ptSinger')
let plbg = document.body
function refresh() {
    location.reload()
}


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
let accent = [`#978E75`, `#c264a6`, '#272571', '#715755', '#564E4B', '#846699', '#AD825D', '#72556B']

let jpglink = `https://lets.linkpc.net/icons/`
let avatar = []
for (let i = 0; i < songID.length; i++) {
    avatar.push(`${jpglink}${songID[i]}.jpg`)
}
let mp3link = "https://lets.linkpc.net/songs/"
let audio = []
for (let i = 0; i < songID.length; i++) {
    audio.push(`${mp3link}${songID[i]}.mp3`)
}
let songItem = []
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
    textUpdate2()
    textUpdate()
}
function prev(){
        if(!shuffled){
            songNumber--
        if (songNumber < 0){
            songNumber = songID.length - 1
        }
        changePlayerInfo(songList[songNumber])
        }
        else if(shuffled){
            shuffle()
            changePlayerInfo(songList[songNumber])
        }
        textUpdate2()
        textUpdate()
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
}









// MUSIC CONTROLLERS
sButton.onclick = function(){
    if(shuffled){
        shuffled = false
        sButton.style.color = 'white'
    } else if(!shuffled){
        shuffled = true
        sButton.style.color = 'var(--iconAccent)'
    }
}
prevButton.onclick = function(){
    prev()
}
pButton.onclick = function(){
    if(!musicOn){
        playSong()
    } else if(musicOn){
        pauseSong()
    }
}
nextButton.onclick = function(){
    next()
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






// MUSIC UPDATE
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
}
document.getElementById(`song1`).classList.add('songNow')
document.getElementById('ptTitle').innerText = songList[0].name
function changePlayerInfo(x){
    root.style.setProperty('--iconAccent', x.accent)
    plbg.style.backdropFilter = `blur(3rem) brightness(0%) saturate(20%)`
    plicon.style.filter = `brightness(0%)`
    plicon.style.scale = '0.9'
        setTimeout(() => {
            plbg.style.backgroundImage = `url(${x.avatar}`
            plicon.src = x.avatar
            plbg.style.backdropFilter = `blur(3rem) brightness(50%) saturate(20%)`
            plicon.style.filter = `brightness(100%)`
            plicon.style.scale = '1'
        }, 250);
    audioFile.src = x.audio
    playSong()
    songNumber = x.id - 1
    for (let i = 0; i < songID.length; i++) {
        document.getElementById(`song${songID[i]}`).classList.remove('songNow')
    }
    document.getElementById(`song${x.id}`).classList.add('songNow')
}





// ANDROID SECTIONS
let trasongs = document.querySelectorAll('.songItem')
section.onclick = function(){
    if (playerOn){
        rcont.style.transform = 'translateX(-50%)'
        plicon.style.transform = 'translateX(-100%) rotateZ(30deg)'
        pltitle.style.transform = 'translateX(-300%)'
        pltitle.style.letterSpacing = '1rem'
        plsgr.style.transform = 'translateX(-200%)'
        plsgr.style.letterSpacing = '1rem'
        plsgr.style.opacity = '0%'
        playerOn = false
        const move = async () => {
            for (let i = 0; i < trasongs.length; i++) {
                await sleep(30)
                trasongs[i].style.transform = 'translateX(0%)'
            }
        }
        move()
    }else{
        rcont.style.transform = 'translateX(0%)'
        plicon.style.transform = ''
        pltitle.style.transform = ''
        pltitle.style.letterSpacing = ''
        plsgr.style.transform = ''
        plsgr.style.letterSpacing = ''
        plsgr.style.opacity = '100%'
        playerOn = true
        const move = async () => {
            for (let i = 0; i < trasongs.length; i++) {
                await sleep(30)
                trasongs[i].style.transform = 'translateX(50%)'
            }
        }
        move()
    }
}
if (window.innerWidth <= 720) {
    document.body.appendChild(document.getElementById('audioDiv'))
}



// TEXT TRANSITIONS
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
function textUpdate(){
let hold1 = document.getElementById('ptTitle')
let hold2 = songList[songNumber].name
let charr1 = hold1.innerText.split('')
let charr2 = hold2.split('')
if (charr1.length>charr2.length) {
    for (let i = charr2.length; i < charr1.length; i++) {
        charr2.push('')
    }
}
if (charr2.length>charr1.length) {
    for (let i = charr1.length; i < charr2.length; i++) {
        charr1.push('')
    }
}
hold1.innerHTML = ''
for (let i = 0; i < charr1.length; i++) {
    hold1.innerHTML+= `<strong class="textSelect1">${charr1[i]}</strong>`
}
let hold3 = document.querySelectorAll('.textSelect1')

    const textExchange1 = async () => {
        for (let i = 0; i < hold3.length; i++) {
                hold3[i].classList.add('fade1')
                await sleep(50)
                hold3[i].innerHTML = charr2[i]
            }
        }
    textExchange1()
}
function textUpdate2(){
let singh1 = document.getElementById('ptSinger')
let singh2 = songList[songNumber].singer
let charr3 = singh2.split('')
let charr4 = singh1.innerText.split('')
if (charr3.length>charr4.length) {
    for (let i = charr4.length; i < charr3.length; i++) {
        charr4.push('')
        console.log('hi')
    }
}
if (charr4.length>charr3.length) {
    for (let i = charr3.length; i < charr4.length; i++) {
        charr3.push('')
    }
}
    singh1.innerHTML = ''
for (let i = 0; i < charr3.length; i++) {
        singh1.innerHTML+= `<span class="textSelect2">${charr4[i]}</span>`
    }
    let hold4 = document.querySelectorAll('.textSelect2')
    const textExchange2 = async () => {
        for (let i = 0; i < hold4.length; i++) {
                hold4[i].classList.add('fade2')
                await sleep(50)
                hold4[i].innerHTML = charr3[i]
            }
        }
        textExchange2()
}