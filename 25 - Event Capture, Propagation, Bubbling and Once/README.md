# Day 25 Event Capture & Bubbling :bikini:   

## JavaScript :bird:  

```js  
const divs = document.querySelectorAll('div');

function logText(e) {
  // e.stopPropagation();
  console.log(this.classList.value);
  // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: false,
}));
```  

1. `event` 觸發時，top to buttom `capture` 在 `bubble up` 觸發。 

2. `e.stopPropagation()` 停止 `bubble up` 只觸發該目標。

3. `addEventListener` 第二個參數為 `capture`，預設為 `false`，`true` top to buttom 觸發事件。

4. `addEventListener` 第三個參數為 `once`，預設為 `false`，`true` 只觸發一次事件。

