const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');

const songs = [
  'Kaavaalaa.mp3', // Replace with actual song URLs
  'Alappara Theme.mp3',
  'Jailer Theme (Instrumental).mp3'
];

let currentSongIndex = 0;

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
}

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
}

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
}

playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', playNext);
previousBtn.addEventListener('click', playPrevious);

