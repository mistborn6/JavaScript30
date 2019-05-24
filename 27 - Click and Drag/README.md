# Day 27 Click & Drag :black_large_square:   

## 目標 :black_nib:  

滑鼠按下可以滑動 `slider`。

## JavaScript :blossom:  

```js  
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; 
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return ;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
```  

1. 用 `isDown` 區別是否滑動。

2. 紀錄鼠標初始位置 `startX` 卷軸初始位置 `scrollLeft`，計算滑動距離 `walk` 加到卷軸距離。
