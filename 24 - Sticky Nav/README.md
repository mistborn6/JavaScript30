# Day 24 Sticky Nav :bell:   

## 目標 :bento:  

當滑到導覽列時，把導覽列固定在網頁上方，並加上一些動畫效果。

## JavaScript :bicyclist:  

```css  
.fixed-nav nav {
  position: fixed;
  box-shadow: 0 5px rgba(0, 0, 0, .5);
}
.fixed-nav li.logo {
  max-width: 500px;
}
.fixed-nav .site-wrap {
  transform: scale(1);
}
```  

```js  
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(topOfNav, window.scrollY);
  
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
```  

1. 滑到導覽列時 `window.scrollY >= nav.offsetTop`，在 `body` 增加 `class` `fixed-nav`。 

2. 增加動畫效果在該 `DOM` `CSS` 另外增加 `fixed-nav`。

3. 因為 `display: fixed` 會將物件抽離，因此 `body` 在加上 `paddingTop` 為導覽列高度。
