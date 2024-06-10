// MAIN VARIABLES
let audioFile = document.getElementById('audioFile')
let songNumber = 0
let musicOn = false
let section = document.getElementById('sectionOne')
let playerOn = true
let seekVisible = true
let audioC = document.querySelectorAll('.audioC')
let upButton = document.getElementById('upButton')
let extOn = false
let sButton = document.getElementById('shufButton')
let shuffled = false
let rButton = document.getElementById('repButton')
let onRepeat = false
let volSlider = document.getElementById('volSlider')
let volOn = false
let prevButton = document.getElementById('prevButton')
let pButton = document.getElementById("playButton")
let nextButton = document.getElementById('nextButton')
let volSectionButton = document.getElementById("volSectionButton")
let muteButton = document.getElementById('mutebutton')
let volumeOn = true
let rCont = document.getElementById(`rcont`)
let root = document.querySelector(`:root`)
let plicon = document.getElementById('playingIcon')
let pltitle = document.getElementById('ptTitle')
let plsgr = document.getElementById('ptSinger')
let plbg = document.body
let currentTime = document.getElementById('currentTime')
let audioSlider = document.getElementById('audioSlider')
let maxTime = document.getElementById('totalTime')
let volume = document.getElementById('volSlider');
function refresh() {
    location.reload()
}

// SONG LIBRARY
let songFull = ['Thousand Miles', 'Talk To You', 'Hearts', 'Paper Planes', 'Atlantis', 'Sway To My Beat In Cosmos', 'Divine', 'Hope Is the Thing With Feathers', 'LOVE or HATE?', 'Pompeii', 'Invasion - Metal Version', 'Divide My Heart', 'The Lazy Song', 'Final Battle', 'SequÊncia MalÉfica 1.0', 'Bolinha De Queijo', 'Automotivo InsÔnia 1.0 - Slowed + Reverb', 'Me Papa Que É Pop', 'Daddy ! Daddy ! Do !', 'Sentimental Crisis', '風に吹かれて']
let songID = []
for (let i = 1; i < songFull.length + 1; i++) {
    songID.push(i)
}
let songName = []
for (let i = 0; i < songFull.length; i++) {
    let first = songFull[i]
    let second
    if(songFull[i].length > 13){
    second = first.slice(0, 10) + `...`
    songName.push(second)
    } else{
        songName.push(first)
    }
}
let singerName = [`the Kid LAROI`, 'Zach B', 'Zach B', 'M.I.A.', 'Seafret', 'Chevy', 'Krishnahazar', 'Chevy', '前島麻由', 'Bastille', 'Rocco Minichiello', 'Naoki', 'Bruno Mars', 'RJ Pasin', ' RXPOSO99', 'Mc Gw', 'Phonk Killer', 'Dj Brunin XM', ' Masayuki Suzuki', 'halca', '福原 遥']
let uploader = [`chipp`, 'chipp', 'chipp', 'Maxi', 'Monkey', 'Mahdi', 'Hell', 'Mahdi', 'Lunaria', 'Mahdi', 'Mahdi', 'Mahdi', 'Mahdi', 'Wazi', 'Wazi', 'Wazi', 'Wazi', 'Wazi', 'Lunaria', 'Lunaria', 'Lunaria']
let accent = [`#978E75`, `#c264a6`, '#272571', '#715755', '#564E4B', '#846699', '#AD825D', '#72556B', '#6F4C4C', '#5C402B', '#48141B', '#84796A', '#F7D980', '#0B0B0B', '#764C7B', '#1C1C1B', '#232323', '#66747F', '#5E3577', '#C8DAE3', '#BAD1E2']

let jpglink = `https://lets.linkpc.net/icons/`
let avatar = []
for (let i = 0; i < songFull.length; i++) {
    avatar.push(`${jpglink}${songID[i]}.jpg`)
}
let mp3link = "https://lets.linkpc.net/songs/"
let audio = []
for (let i = 0; i < songFull.length; i++) {
    audio.push(`${mp3link}${songID[i]}.mp3`)
}
let songItem = []
let songList = []
for (let i = 0; i < songFull.length; i++) {
    songList[i] = new Song(songID[i], songFull[i], songName[i], singerName[i], uploader[i], accent[i], avatar[i], audio[i])
}
let songCont = document.getElementById('songList')

// CONST FUNCTIONS
const fmtTime = s => {
    const d = new Date(0);
    if (s > 0) {
        d.setSeconds(s % 60);
        d.setMinutes(s / 60);
    }
    return d.toISOString().slice(14, 19);
}
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

// VOLUME CONTROL SWITCHER
function upperSectionSlider(x){
    for (let i = 0; i < audioC.length; i++) {
        audioC[i].className = 'audioC'
        audioC[i].classList.add(`audioD${x}`)
    }
    let j = x - 1
    if (j < 0) {
        j = 1
    }
    audioC[j].classList.add('audioO')
}
function rotateButtons(){
    if (!volOn | !extOn) {
        upperSectionSlider(0)
    }
    if (volOn) {
        upperSectionSlider(3)
    }
    if (extOn) {
        upperSectionSlider(1)
    }
}

// MUSIC FUNCTIONS
function playSong(){
    audioFile.play()
    pButton.innerHTML = "<i class='fa-solid fa-pause'></i>"
    musicOn = true
    audioSlider.max = audioFile.duration
    setInterval(() => {
        audioSlider.value = audioFile.currentTime
        currentTime.innerText = fmtTime(audioFile.currentTime)
    }, 1000);
}
function pauseSong(){
    audioFile.pause()
    pButton.innerHTML = "<i class='fa-solid fa-play'></i>"
    musicOn = false
}
function mute(){
    audioFile.muted = true
    volSectionButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
    volumeOn = false
    volume.value = 0
}
function unmute(){
    audioFile.muted = false
    volSectionButton.innerHTML = "<i class='fa-solid fa-volume-high'>"
    volumeOn = true
    volume.value = 100
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

// MUSIC RANGE UPDATE
volume.addEventListener("change", function(e) {
        audioFile.volume = e.currentTarget.value / 100;
        audioFile.muted = false
        volumeOn = true
        volSectionButton.innerHTML = "<i class='fa-solid fa-volume-high'>"
        volSectionButton.style.color = ''
    }
)
audioSlider.onchange = function(){
    audioFile.currentTime = audioSlider.value
}
audioFile.onloadedmetadata = function(){
    audioSlider.max = audioFile.duration
    maxTime.innerText = fmtTime(audioFile.duration)
}

// MUSIC CONTROLLERS
sButton.onclick = function(){
    if(shuffled){
        shuffled = false
        sButton.style.color = ''
    } else if(!shuffled){
        shuffled = true
        sButton.style.color = 'var(--iconAccent)'
    }
    onRepeat = false
    rButton.style.color = ''
}
rButton.onclick = function(){
    if(!onRepeat){
        onRepeat = true
        audioFile.loop = true
        rButton.style.color = 'var(--iconAccent)'
    } else if(onRepeat){
        onRepeat = false
        audioFile.loop = false
        rButton.style.color = ''
    }
    shuffled = false
    sButton.style.color = ''
}
upButton.onclick = function(){
    volOn = false
    if (extOn) {
        extOn = false
    }else if(!extOn){
        extOn = true
    }
    rotateButtons()
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
volSectionButton.onclick = function(){
    extOn = false
    if (volOn) {
        volOn = false
    }else if(!volOn){
        volOn = true
    }
    rotateButtons()
}
muteButton.onclick = function(){
    if(volumeOn){
        mute()
        volSectionButton.style.color = 'var(--iconAccent)'
    } else if(!volumeOn){
        unmute()
        volSectionButton.style.color = ''
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
    textUpdate()
    textUpdate2()
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
if (window.innerWidth <= 1000) {
    document.body.appendChild(document.getElementById('audioDiv'))
}

// TEXT TRANSITIONS
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