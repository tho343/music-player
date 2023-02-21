const music = document.querySelector("audio");
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

//check if the song is playing
let isPlaying = false;
//play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title','pause');
    music.play();
}

//pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title','play');
    music.pause();
}

playBtn.addEventListener("click", ()=> { isPlaying? pauseSong() : playSong()});