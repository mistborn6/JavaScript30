# Day 11 Custom Video Player :arrows_clockwise:   

## 目標 :arrows_counterclockwise:  

完成專屬的影片播放介面，有撥放、暫停、調整音量、速度、快轉、倒帶等功能   

## JavaScript :art:  

```js
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const button = player.querySelector('.toggle');

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

video.addEventListener('click', handlePlay);
button.addEventListener('click', handlePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
```

1. 影片暫停改撥放 `video.paused ? 'play' : 'pause'`，反之亦然。  

2. 監聽影片 `play` 或 `pause` 改變撥放按鈕的圖示。  

```js
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function handleSkip() {
    // console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

skipButtons.forEach(button => button.addEventListener('click', handleSkip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
```

1. 點擊倒帶或快轉改變影片時間 `video.currentTime += parseFloat(this.dataset.skip)`。  

2. 調整影片音量及速度 `video[this.name] = this.value`。  

```js
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

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

video.addEventListener('timeupdate', handleProgress);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
```

1. 自動調整時間條，計算現在時間點位置 `(video.currentTime / video.duration) * 100`，調整至相應位置 `flexBasis`。

2. 手動調整時間條，影片調整撥放 `(e.offsetX / progress.offsetWidth) * video.duration`。

3. 增加 `flag` `mousedown`，判斷是否有滑鼠點擊，再監聽滑鼠移動。
