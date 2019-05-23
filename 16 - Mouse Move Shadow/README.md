# Day 16 Mouse Move Shadow :bamboo:   

## 目標 :banana:  

鼠標移動，文字陰影跟著移動。 

## JavaScript :bangbang:  

```js
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    // console.log(x, y);

    if (e.target != this) {
        x = e.target.offsetLeft + x;
        y = e.target.offsetTop + y;
    }
    // console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener('mousemove', shadow);
```

1. 取得網頁長寬 `DOM.offsetWidth`，取得鼠標位置 `e.offsetX`。   

2. 因為觸發 `event` 有兩個，當滑到 `h1` 鼠標位置歸零，因此要加上原來的位置 `e.target.offsetLeft + x`。  

3. 設定陰影移動範圍 `walk`，設定上下左右 `(x / width * walk) - (walk / 2)`。  

4. 陰影位置改變 `text.style.textShadow`。  






