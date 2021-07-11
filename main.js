//instigate our audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

//load some sound
const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);

const playButton = document.querySelector('.tape-controls-play');

//play pause audio
async function playPause() {
    //check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
    }

    if (this.DataTransferItem.playing === 'false') {
        audioElement.play();
        this.DataTransferItem.playing = 'true';
        //if track is playing pause it
    } else if (this.DataTransferItem.playing === 'true') {
        audioElement.pause();
        this.DataTransferItem.playing = 'false';
    }

    let state = this.getAttribute('aria-checked') === 'true' ? true : false;
    this.setAttribute('aria-checked', state ? 'false' : 'true');
}
playButton.addEventListener('click', playPause, false);
playPause();
// if track ends
audioElement.addEventListener(
    'ended',
    () => {
        playButton.dataset.playing = 'false';
        playButton.setAttribute('aria-checked', 'false');
    },
    false
);

//songs array
const songs = [
    new Audio('music/hey.mp3'),
    new Audio('music/summer.mp3'),
    new Audio('music/ukulele.mp3'),
];

const images = [
    'url(img/hey.jpg)',
    'url(img/summer.jpg)',
    'url(img/ukulele.jpg)',
];

if (images[0]) {
    songs[0].play();
} else if (images[1]) {
    songs[1].play();
} else if (images[2]) {
    songs[2].play();
}

console.log(audioCtx);
