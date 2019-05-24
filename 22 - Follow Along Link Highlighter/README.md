# Day 22 Follow Along Link Highlighter :battery:   

## 目標 :bear:  

滑鼠移到連結上，產生強調的動畫效果。

## JavaScript :bee:  

```js
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
  }
  
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
```

1. 建立 `document.createElement()` `span` 加上強調動畫 `DOM.classList.add()` 加 `DOM.append()` 到 `body`。 

2. 當滑鼠移到 `mouseenter` 連結，產生動畫效果。  

3. 取得連結寬高及位置 `this.getBoundingClientRect()`。   

4. 連結位置會因目前頁面位置(滾動、放大、縮小)而改變，調整成 `linkCoords.left + window.scrollX` `linkCoords.top + window.scrollY`。

5. 設定動畫寬高及位置 `DOM.style.width` `DOM.style.transform`。

