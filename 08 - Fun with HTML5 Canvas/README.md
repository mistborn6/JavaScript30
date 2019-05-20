# Day 8 Canvas :anger:   

## JavaScript :angry:  

### Canvas 基礎設定 :anguished:  

```js
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';
```

- `<canvas></canvas>` 是 `HTML5` 的元素，結合 `js` 可以繪圖、合成圖片或做動畫  
語法: `var ctx = canvas.getContext(contextType, contextAttributes)`   
    - `contextType` 的值有 `2d / webgl / webgl2 / bitmaprenderer`  
    - `contextAttributes` 不同的 `contextType` 有不同的屬性可以使用  

- `ctx.strokeStyle` 勾勒圖形時用的顏色，預設為黑色  

- `ctx.lineJoin` 設定線條和線條間接合處的樣式   
    - `round` 圓弧連接  
    - `bevel` 菱角連接  
    - `miter` 預設值，三角連接  

- `ctx.lineCap` 設定線條結尾的樣式   
    - `butt` 預設值，方形結尾  
    - `round` 圓形結尾  
    - `square` 增加寬同線條寬度、高線條寬度一半的的方塊於線條端點 

- `ctx.lineWidth` 設定線條寬度  

### Canvas 動畫效果 :ant: 

```js
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return ;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    // start
    ctx.moveTo(lastX, lastY); 
    // go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown',   (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

1. 滑鼠按下 `mousedown` 開始畫 `isDrawing = true`，設定畫筆一開始位置為鼠標位置 `[lastX, lastY] = [e.offsetX, e.offsetY]`。  

2. 滑鼠移動觸發 `draw`，設定顏色 `ctx.strokeStyle`，開始新路徑 `ctx.beginPath()`，設定起始點 `ctx.moveTo(lastX, lastY)`，設定終點 `ctx.lineTo(e.offsetX, e.offsetY)`，開始繪製 `ctx.stroke()`，設定 `[lastX, lastY] = [e.offsetX, e.offsetY]` 讓每一次移動終點當起始點繼續繪製，產生畫筆的效果。  

3. 滑鼠離開 `mouseup` 或 `mouseout` 結束動畫。  

