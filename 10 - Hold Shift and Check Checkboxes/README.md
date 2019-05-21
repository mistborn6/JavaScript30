# Day 10 Hold Shift and Check Checkbox :arrow_backward:   

## 目標 :arrow_double_up:

點擊完成一個項目，按著 `shift` 點擊完成另一個項目，兩個項目中間的項目也會被顯示完成

解決流程:
1. 監聽點擊事件
2. 當 `shift` 按著且點擊完成，觸發中間項目也顯示完成

## JavaScript :arrow_double_down:  

```js
const checkboxes = Array.from(document.querySelectorAll('.inbox input'));

let lastChecked;
function handleChecked(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }

        if (inBetween) {
            checkbox.checked = true;
        }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleChecked));
```

1. 監聽當 `input` 被 `click`，如果 `shift` 被按著而且事件為 `checked` 顯示完成觸發以下事件。

2. 設定 `flag` `inBetween`，`loop` 所有 `checkbox`，如果是 這次點擊 或者 上次點擊 變換標籤。

3. 如果 `inBetween` 為真，所有 `checkbox` 顯示完成。

> 相關資源:  
> [10 JS 实现 Checkbox 中按住 Shift 的多选功能](https://github.com/soyaine/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes)  

