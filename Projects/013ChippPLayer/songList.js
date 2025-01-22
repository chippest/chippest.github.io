let songFull = ['Thousand Miles', 'Talk To You', 'Hearts', 'Paper Planes', 'Atlantis', 'Sway To My Beat In Cosmos', 'Divine', 'Hope Is the Thing With Feathers', 'LOVE or HATE?', 'Pompeii', 'Invasion - Metal Version', 'Divide My Heart', 'The Lazy Song', 'Final Battle', 'SequÊncia MalÉfica 1.0', 'Bolinha De Queijo', 'Automotivo InsÔnia 1.0 - Slowed + Reverb', 'Me Papa Que É Pop', 'Daddy ! Daddy ! Do !', 'Sentimental Crisis', '風に吹かれて']
let singerName = [`the Kid LAROI`, 'Zach B', 'Zach B', 'M.I.A.', 'Seafret', 'Chevy', 'Krishnahazar', 'Chevy', '前島麻由', 'Bastille', 'Rocco Minichiello', 'Naoki', 'Bruno Mars', 'RJ Pasin', ' RXPOSO99', 'Mc Gw', 'Phonk Killer', 'Dj Brunin XM', ' Masayuki Suzuki', 'halca', '福原 遥']
let uploader = [`chipp`, 'chipp', 'chipp', 'Maxi', 'Monkey', 'Mahdi', 'Hell', 'Mahdi', 'Lunaria', 'Mahdi', 'Mahdi', 'Mahdi', 'Mahdi', 'Wazi', 'Wazi', 'Wazi', 'Wazi', 'Wazi', 'Lunaria', 'Lunaria', 'Lunaria']
let accent = [`#978E75`, `#c264a6`, '#272571', '#715755', '#564E4B', '#846699', '#AD825D', '#72556B', '#6F4C4C', '#5C402B', '#48141B', '#84796A', '#F7D980', '#0B0B0B', '#764C7B', '#1C1C1B', '#232323', '#66747F', '#5E3577', '#C8DAE3', '#BAD1E2']
let songList = []
for (let i = 0; i < songFull.length; i++) {
    songList[i] = new Song(songFull[i], singerName[i], uploader[i], accent[i])
}
function Song(fullname, singer, uploader, accent) {
    this.fullname = fullname
    this.singer = singer;
    this.uploader = uploader;
    this.accent = accent;
}
console.log(songList)