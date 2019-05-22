# Day 12 Key Sequence Detection :athletic_shoe:   

## 目標 :articulated_lorry:  

當用戶按下特定密碼，觸發特定事件。

## JavaScript :astonished:  

```js
const arr = [];
const secretCode = 'god';

function handleSecretCode(e) {
    console.log(e.key);
    arr.push(e.key);
    arr.splice(-secretCode.length -1, arr.length - secretCode.length);
    if (arr.join('').includes(secretCode)) {
        console.log('success');
        cornify_add();
    }
    console.log(arr);
}

window.addEventListener('keyup', handleSecretCode);
```

1. 監聽事件 `keyup `，組合 `e.key` 變成 `array`。

2. 為了持續更新 `array`，設定長度為 `keycode` 長度 `arr.length - secretCode.length` 超過長度從最前面剔除 `-secretCode.length -1`。  

3. 組合 `array` 變 `string` 如果包含 `keycode` 觸發事件。


