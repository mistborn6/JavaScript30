# Day 4 Array Cardio :100:  

## JavaScript :+1:

1. `Array​.prototype​.filter()`  
用法: 若 `callback` 結果為 `true` 回傳該 `array` 的元素  
語法: `const newArray = arr.filter(callback(element, index, array), thisArg)`  
特性:  
- 不會更改原 `array` 會產生新的 `array`

2. `Array​.prototype​.map()`
用法: 將所有 `array` 的元素依序傳入至 `callback` 並回傳至新的 `array`  
語法: `const newArray = arr.map(callback(element, index, array), thisArg)`  
特性:  
- 不會更改原 `array` 會產生新的 `array`

3. `Array​.prototype​.sort()`  
用法: 對 `array` 所有元素進行排列  
語法: `arr.sort(compareFunction(a, b))`  
特性:  
- 回傳排序後的原 `array`
- 排列規則以 `Unicode` 編碼排序
    - 比較字串
      a > b 回傳 1，a < b 回傳 -1，a = b 回傳 0，可以想成負的放左邊，正的放右邊
    - 比較數字
      a - b 升冪排序，反之亦然
- 補充
```js
const arr = [1, 10, 100, 50, 25, 12];
const newArr = arr.sort((a, b) => {
    console.log(a, b);
    return a > b ? 1 : -1;
});
console.log(newArr);
```
結果:
```text
10 1
100 10
50 100
50 10
50 100
25 50
25 10
12 25
12 10
(6) [1, 10, 12, 25, 50, 100]
```
`sort` 在 `array` 長度小於 10 時，用 Insertion Sort，大於 10 用 Quick Sort，並結合 Binary Search  
有了以上概念可以理解 a b 跑出來的結果  
相關資源:  
[淺談 JS sort() 到背後排序方法](https://ubin.io/U5GszB)  
[淺談二分搜尋法](https://ubin.io/37hb6K)  

4. `Array​.prototype​.reduce()`  
用法: 將 `accumulator` 及 `array` 每項元素傳入 `callback`，將 `array` 化為單一值。  
語法: `arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`  
特性:  
- 回傳簡化後的結果值
- 有提供 `initialValue`，`accumulator = initialValue`，反之 `accumulator = array[0]`
- 沒有 `initialValue`，從 `array[1]` 開始執行 `callback`

5. `Array​.prototype​.includes()`  
用法: 判斷 `array` 是否包含特定的元素，回傳 `true` 或 `false`  
語法:`arr.includes(searchElement, fromIndex)`  

6. `String​.prototype​.split()`  
用法: 用指定 `string` 将目標 `string` 分割成数组 `string`  
語法:`str.split(separator, limit)`  
特性:  
- 如果以空的 `string` `''` 當作分割點，目標會以每個字母做分割
- 回傳以分隔符號區分的 `string` 組成的 `array` 
