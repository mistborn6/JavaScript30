# Day 5 Flex Panel Gallery :abcd:  

## 目標 :accept:

點擊圖片出現動畫效果

解決流程:
1. 利用 `flexbox` 做排版
2. 點擊圖片放大並出現文字

## CSS :aerial_tramway:

1. `display: flex` 用在 parent 上，對所有的 children 進行調整

- `flex-direction` 調整 main-axis & cross-axis
```text
row / column / row-reverse / column-reverse
```

- `justify-content` (main-axis) 進行內容左右排版
```text
flex-start / flex-end / center / space-between / space-around / space-evenly
```

- `align-items` (cross-axis) 進行內容上下排版 
```text
stretch / flex-start / flex-end / center / baseline
```

- `flex` 用在 children 上
```text
flex-grow: 0 (no share)
flex-shrink: 1 (auto shrink)
flex-basis(順序大於 width): auto (px, %, rem)
```

2. `transform` 可以旋轉、歪斜、放大、縮小、移動元素
```text
ratate(deg) / skew(θx,θy) / scale(mx,my) / translate(ox,oy) / matrix(a,b,c,d,e,f)
``` 
> 相關資源:  
> [深入理解css3中的flex-grow、flex-shrink、flex-basis](http://zhoon.github.io/css3/2014/08/23/flex.html)  
> [FLEXBOX FROGGY](https://flexboxfroggy.com/)  

## JavaScript :airplane:

```js
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
    }
}
```

1. `e.propertyName` 偵測 `transitionend` 的觸發對象，觸發的 `transitionend` 的 `CSS` 有兩個  
分別為 `font-size` 與 `flex`，主要為動畫效果為 `flex` 因此判斷進來的是不是 `flex`

2. 因為 `transition: flex` 的 `propertyName` 在 sarafi 顯示 `flex`，而其他瀏覽器為 `flex-grow`  
因此用 `el.includes()` 來檢查


