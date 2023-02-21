const music = document.querySelector("audio");
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.querySelector('audio');
const image = document.querySelector('img');
const durationTime = document.getElementById('duration-time');
const current = document.getElementById('current-time');

const songs = [
    {
        name: "jacinto-1",
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: "jacinto-2",
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: "jacinto-3",
        displayName: 'Front Row',
        artist: 'Jacinto Design'
    }
]

//update Dom
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = `img/${song.name}.jpg`;
    audio.src = `music/${song.name}.mp3`;

}


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

let indexSong = 0;
//next
function nextSong(){
    indexSong++;
    
    if(indexSong > songs.length - 1){
        indexSong = 0;
    }
    
    loadSong(songs[indexSong]);
    playSong();
    

}
//previous
function prevSong(){
    indexSong--;
    if(indexSong < 0){
        indexSong = songs.length - 1;
    }
    loadSong(songs[indexSong]);
    playSong();

}
//update progress bar
function progressBar(e){
    if(isPlaying){
        
        const {duration, currentTime} = e.srcElement;
        const progressPercentage = (currentTime /duration) * 100;
        progress.style.width = `${progressPercentage}%`;
        //update duration time

        let durationTimeMinute = Math.floor(duration / 60);
        if(durationTimeMinute < 10){
            durationTimeMinute = `0${durationTimeMinute}`;
        }
       let durationTimeSecond = Math.floor(duration%60);
        if(durationTimeSecond < 10){
            durationTimeSecond = `0${durationTimeSecond}`;
        }

        let formatedDuration = `${durationTimeMinute}:${durationTimeSecond}`;
        if(durationTimeSecond){
            durationTime.textContent = formatedDuration;
        }
        //update current time
        let currentTimeMinute = Math.floor(currentTime / 60);
        if(currentTimeMinute < 10){
            currentTimeMinute = `0${currentTimeMinute}`;
        }
        
       let currentTimeSecond = Math.floor(currentTime%60);
        if(currentTimeSecond < 10){
            currentTimeSecond = `0${currentTimeSecond}`;
        }

        let formatedCurrent = `${currentTimeMinute}:${currentTimeSecond}`;
        
        if(currentTimeSecond){
            current.textContent = formatedCurrent;
        }
    }
}

audio.addEventListener('timeupdate',progressBar);
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);
playBtn.addEventListener("click", ()=> { isPlaying? pauseSong() : playSong()});