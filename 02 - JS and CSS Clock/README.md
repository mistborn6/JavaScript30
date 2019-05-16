# Day 2 Clock :ghost:  

## 目標 :bee:

自動更新時鐘

解決流程:
1. 取得持續更新的時、分、秒
2. 讓時針、分針、秒針依資料跑動

## CSS :bell:

```css
.hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform: rotate(90deg);
    transform-origin: 100%;
    transition: all .5s;
    transition-timing-function: cubic-bezier(0, 0, 0.99, 4.07);
}

.hour-hand {
    width: 30%;
    transform: rotate(90deg) translateX(66.6666%);
    transform-origin: 166.6666%;
}

.min-hand {
    width: 40%;
    transform: rotate(90deg) translateX(25%);
    transform-origin: 125%;
}
```

1. `transform` 可以旋轉、歪斜、放大、縮小、移動元素
```text
ratate(deg) / skew(θx,θy) / scale(mx,my) / translate(ox,oy) / matrix(a,b,c,d,e,f)
``` 
2. `transform-origin` 設定 `transform` 的起始點
專案中秒針、分針跟時針的長短不一，較短的分針跟時針多設定 `translate` 移至中心點，
若要讓所有物件都在中心的位置旋轉，分針、時針的中心為本身長度加上`translate` 的距離。

3. `transition` 
- 在給定的時間內更改屬性值
- 常用於滑鼠或鍵盤事件
- 無法在生成網頁自動發生，觸發為一次性無重複，除非一直觸發(js)
- 只能定義開始及結束狀態，無法定義過程

4. `transition-timing-function`
```text
linear / steps(*, end) / cubic-bezier(0.1, 0.7, 1.0, 0.1) / frames(10) 
``` 

## JavaScript :bulb:

方法都大同小異，舉其中一個來解釋:
```js
const secHand = document.querySelector('.second-hand');
const now = new Date();
const seconds = now.getSeconds();
const secDeg = (seconds / 60 * 360) + 90;
if (secDeg === 90) {
secHand.style.transition = 'all 0s';
} else {
secHand.style.transition = 'all .5s cubic-bezier(0, 0, 0.99, 4.07)';
}
secHand.style.transform = `rotate(${secDeg}deg)`;
time();
setInterval(time, 1000);
```
1. 取得現在時間 `new Date()` 取得秒數 `getSeconds()`
2. 計算現在秒數相對時鐘的角度 `(seconds / 60 * 360) + 90` 起始點為90度
3. 將秒針轉到計算出的角度 `secHand.style.transform`

## 問題點 :imp:

因為轉完一圈度數會從 444 度跳回 90 度，為避免秒針回朔要加上 if 讓 `transition` 設為 0 秒
