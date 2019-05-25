# Day 28 Video Speed Controller :blowfish:   

## 目標 :blue_book:  

滑鼠滑動控制條可以改變影片撥放速度。

## JavaScript :blue_car:  

```js  
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const persent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(persent * 100) + '%';
  const playbackRate = persent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
  console.log(playbackRate);
}

speed.addEventListener('mousemove', handleMove);
```  

1. 計算滑鼠在控制條的位置 `y` 計算占控制條高度的百分比(數字) `persent`。

2. 換算占控制條高度的百分比(文字) `height` 換算高度成速度 `platbackRate`。

