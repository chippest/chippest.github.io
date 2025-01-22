let numberAni = document.getElementById("number-1")
let imageAni = document.getElementById("image-1")
let nameAni = document.getElementById("name-1")
let startAni = document.getElementById("start-1")
let endAni = document.getElementById("end-1")
let episodeAni = document.getElementById("episodes-no-1")
let releaseAni = document.getElementById("release-1")
let descriptionAni = document.getElementById("description-1")
let genreAni = document.getElementById("genre-1")
let varRoot = document.querySelector(`:root`)
let symbolAni = document.getElementById("pluss")
let symbolBottom = document.getElementById("plusses")

function animeOne(){
    varRoot.style.setProperty('--bg', '#162b25');
    varRoot.style.setProperty('--text', '#255124');
    numberAni.innerText = "01"
    imageAni.src = "https://cdn.myanimelist.net/images/anime/1032/135088l.jpg"
    nameAni.innerText = "CODE GEASS"
    startAni.innerText = "29-11-2023"
    endAni.innerText = "08-01-2024"
    episodeAni.innerText = "50"
    releaseAni.innerText = "06-10-2006"
    descriptionAni.innerText = `In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.

    Lelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the "Power of Kings." Realizing the vast potential of his newfound "power of absolute obedience," Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.`
    genreAni.innerText = "Action, Award Winning, Drama, Sci-Fi"
    symbolAni.innerText = "♖"
    symbolBottom.innerText = "⚆"
}
function animeTwo(){
    varRoot.style.setProperty('--bg', '#16262b');
    varRoot.style.setProperty('--text', '#E07502');
    numberAni.innerText = "02"
    imageAni.src = "https://cdn.myanimelist.net/images/anime/1786/120117l.jpg"
    nameAni.innerText = "OREGAIRU"
    startAni.innerText = "20-12-2023"
    endAni.innerText = "28-12-2023"
    episodeAni.innerText = "38"
    releaseAni.innerText = "05-04-2013"
    descriptionAni.innerText = `Hachiman Hikigaya is an apathetic high school student with narcissistic and semi-nihilistic tendencies. He firmly believes that joyful youth is nothing but a farce, and everyone who says otherwise is just lying to themselves.

    In a novel punishment for writing an essay mocking modern social relationships, Hachiman's teacher forces him to join the Volunteer Service Club, a club that aims to extend a helping hand to any student who seeks their support in achieving their goals. With the only other club member being the beautiful ice queen Yukino Yukinoshita, Hachiman finds himself on the front line of other people's problems—a place he never dreamed he would be. As Hachiman and Yukino use their wits to solve many students' problems, will Hachiman's rotten view of society prove to be a hindrance or a tool he can use to his advantage?`
    genreAni.innerText = "Comedy, Romance"
    symbolAni.innerText = "☆"
}
function animeThree(){
    varRoot.style.setProperty('--bg', '#2b161b');
    varRoot.style.setProperty('--text', '#C8345A');
    numberAni.innerText = "03"
    imageAni.src = "https://cdn.myanimelist.net/images/anime/1436/109969l.jpg"
    nameAni.innerText = "KAGUYA-SAMA: LOVE IS WAR"
    startAni.innerText = "12-01-2024"
    endAni.innerText = "17-02-2024"
    episodeAni.innerText = "37"
    releaseAni.innerText = "12-01-2019"
    descriptionAni.innerText = `At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president. Alongside him, the vice president Kaguya—eldest daughter of the wealthy Shinomiya family—excels in every field imaginable. They are the envy of the entire student body, regarded as the perfect couple.

    However, despite both having already developed feelings for the other, neither are willing to admit them. The first to confess loses, will be looked down upon, and will be considered the lesser. With their honor and pride at stake, Miyuki and Kaguya are both equally determined to be the one to emerge victorious on the battlefield of love!`
    genreAni.innerText = "Comedy"
    symbolAni.innerText = "❥"
    symbolAni.style.fontSize = "13em"
    symbolAni.style.top = "-0.23em"
}
function animeFour(){
    varRoot.style.setProperty('--bg', '#1c162b');
    varRoot.style.setProperty('--text', '#302368');
    numberAni.innerText = "04"
    imageAni.src = "https://cdn.myanimelist.net/images/anime/7/88019l.jpg"
    nameAni.innerText = ""
    startAni.innerText = "02-03-2024"
    endAni.innerText = "15-03-2024"
    episodeAni.innerText = "38"
    releaseAni.innerText = "07-07-2015"
    descriptionAni.innerText = `The final hour of the popular virtual reality game Yggdrasil has come. However, Momonga, a powerful wizard and master of the dark guild Ainz Ooal Gown, decides to spend his last few moments in the game as the servers begin to shut down. To his surprise, despite the clock having struck midnight, Momonga is still fully conscious as his character and, moreover, the non-player characters appear to have developed personalities of their own!

    Confronted with this abnormal situation, Momonga commands his loyal servants to help him investigate and take control of this new world, with the hopes of figuring out what has caused this development and if there may be others in the same predicament.`
    genreAni.innerText = "Action, Adventure, Fantasy"
    symbolAni.innerText = "♰"
}
// animeThree()