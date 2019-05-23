# Day 18 Add Up Times with Reduce :baseball:   

## 目標 :basketball:  

加總 `video` 的時間 (時、分、秒)。  

## JavaScript :bath:  

```js
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(time => {
    const [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const secs = secondsLeft;

console.log(hours, mins, secs);
```

1. 擷取 `video` 的時間 `Array.map(node => node.dataset.time)`。   

2. 將時間拆分 `String.split()` 轉換成數字 `Array.map(parseFloat)` 並加總成秒數 `Array.reduce()`。  

3. 將總秒數拆成時、分、秒。   


