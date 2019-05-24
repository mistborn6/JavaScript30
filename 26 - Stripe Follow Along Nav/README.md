# Day 26 Stripe Follow Along Nav :birthday:   

## 目標 :black_joker:  

當滑到導覽列時，顯示資訊浮出動畫效果。

## JavaScript :black_circle:  

```js  
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left, 
  }
  console.log(dropdownCoords);
  console.log(navCoords);

  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
```  

1. 因為 `trigger-enter-active` 在 150ms 後才加上，如果滑鼠快速移動會造成 `remove` 的時候還沒有加上 `trigger-enter-active`    
因此 `trigger-enter-active` 會被留下，所以要用 && 判斷若 150ms 後，`trigger-enter` 還在，表示滑鼠尚未移出  
此時再加上 `trigger-enter-active`  

2. 因為 `backgroung` 在 `nav` 裡面，所以當 `nav` 外增加內容時，`backgroung`的位置要減去 `navCoords.top` & `navCoords.left`，  
`nav` 內增加內容則無所謂。



