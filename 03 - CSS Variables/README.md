# Day 3 CSS Variables :1234:  

## 目標 :8ball:

拖曳滑輪改變網頁的外觀

解決流程:
1. 設定 `CSS` 的變數
2. 監聽滑鼠滑動的值帶入 `CSS` 變數中

## HTML :a:

1. `<input type='range'>` 產生可移動的滑輪 `<input type='color'>` 產生選色盤

2. `data-*`創造自定義的屬性*  
使用規則:  
    - 不能包含大寫字母
    - 可以是任何形式的 `string`


## CSS :ab:  

```css
:root {
    --spacing: 10px;
    --blur: 0px;
    --base: #ffc600;
}

img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}
``` 

1. `:root` 為 `DOM` 元件的根元素，相當於`<html>`，常用於宣告變數

2. 宣告變數 `--*: value`，使用變數 `var(--*)` 

3. 濾淨效果 `filter`，共有 10 種特效  
`grayscale 灰階 / sepia 懷舊 / saturate 飽和 / invert 負片 / opacity 不透明 (0-100%)`  
`brightness 亮度 / contrast 對比 (100% base) hue-rotate 色相旋轉 (0-360 deg)`  
`blur 模糊 (px/em) drop-shadow下拉陰影 (x, y, blur, spread, color)`  

> 相關資源:  
> [CSS濾鏡效果](http://blog.shihshih.com/css-filter/)  

## JavaScript :abc:  

```js
function handleChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
```

1. 用 `el.dataset.*` 取得 `data-*` 的值

2. `document.documentElement` 代表 DOM 中的 `<html>` 

3. `style.setProperty(propertyName, value, priority)` 設定 `CSS` 的值，方便帶參數進去

```js
style.setProperty('margin', '15px');
// 等於
style.margin = '15px';
```

> 相關資源:  
> [[技術分享] 什麼是 HTML 5 中的資料屬性（data-* attribute）](https://pjchender.blogspot.com/2017/01/html-5-data-attribute.html)  

