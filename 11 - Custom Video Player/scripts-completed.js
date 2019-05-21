// DOM
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const button = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

// function
function handlePlay() {
    // console.log(this.paused);
    // 一定要用video 因為有button
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    button.textContent = icon;
}

function handleSkip() {
    // console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const persent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${persent}%`;
}

function scrub(e) {
    // console.log(e);
    // console.log(this.offsetWidth);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration ;
    video.currentTime = scrubTime;
}


// event
video.addEventListener('click', handlePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
button.addEventListener('click', handlePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', handleSkip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);

