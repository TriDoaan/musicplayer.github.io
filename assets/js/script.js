// 
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

//
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

//
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// 
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "I Need a Girl - Lee (Lo-fi)",
        source: "./assets/music/I Need a Girl.mp3",
        cover: "./assets/images/I Need a Girl.png"
    },
    {
        name: "LILY - GC (Lo-fi)",
        source: "./assets/music/LILY.mp3",
        cover: "./assets/images/LILY.png"
    },
    {
        name: "Marshmallow - LuKremBo (Lo-fi)",
        source: "./assets/music/Marshmallow.mp3",
        cover: "./assets/images/Marshmallow.png"
    },
    {
        name: "TO THE MOON - hooligan. (Chill-out)",
        source: "./assets/music/TO THE MOON.mp3",
        cover: "./assets/images/TO THE MOON.png"
    },
    {
        name: "tình ca tình ta - kis (Chill-out)",
        source: "./assets/music/tình ca tình ta.mp3",
        cover: "./assets/images/tình ca tình ta.png"
    },
    {
        name: "BERLIN - Khoi Vu (Chill-out)",
        source: "./assets/music/Berlin.mp3",
        cover: "./assets/images/Berlin.png",
    },

];

//
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}

//
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
//
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    isPlaying ? pauseSong() : playSong();
}


//
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()