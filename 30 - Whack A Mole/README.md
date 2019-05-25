# Day 29 Whack A Mole :bow_and_arrow:   

## 目標 :bowing_man:  

製作打地鼠遊戲。

## JavaScript :bowling:  

```js  
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max -min)+ min); 
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole == lastHole) {
        return randomHole(holes);
    }
    // console.log(hole);

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time)
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep()
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if(!e.isTrustde) return ;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('ckick', bonk));
```  

1. 設定地鼠出現時間 `randomTime`。

2. 設定地鼠出現的洞 `randomHole`。

3. 結合 `randomTime` & `randomHole` 讓地鼠出現 `peep`。

4. 按開始紐啟動遊戲 `startGame`。

5. 計算得分 `bonk`。

