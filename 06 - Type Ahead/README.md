# Day 6 Type Ahead :alarm_clock:  

## JavaScript :ambulance:

### 1. `Array​.prototype​.filter()`  
用法: 若 `callback` 結果為 `true` 回傳該 `array` 的元素  
語法: `const newArray = arr.filter(callback(element, index, array), thisArg)`  
特性:  
- 不會更改原 `array` 會產生新的 `array`  

### 2. `Array​.prototype​.map()`  
用法: 將所有 `array` 的元素依序傳入至 `callback` 並回傳至新的 `array`  
語法: `const newArray = arr.map(callback(element, index, array), thisArg)`  
特性:  
- 不會更改原 `array` 會產生新的 `array`  

### 3. `Array​.prototype​.join()`  
用法: 將 `array` 每項元素連接成 `string` 並回傳  
語法: `arr.join(separator)`  
特性:  
- 預設 `separator` 為 `,`  
- `undefined` or `null` 將回傳空 `string`  

### 4. `Array​.prototype​.includes()`  
用法: 判斷 `array` 是否包含特定的元素，回傳 `true` 或 `false`  
語法:`arr.includes(searchElement, fromIndex)`  

### 5. `String​.prototype​.replace()`  
用法: 符合 `regexp` 的 `string` 用 `replacement` 取代並回傳新的 `string`  
語法:`str.replace(regexp|substr, newSubstr|function)`  

### 6. `String​.prototype​.match()`  
用法: 檢查 `string` 是否符合 `regexp`  
語法: `str.match(regexp)`  
特性:  
- 回傳符合的 `array`，反之回傳 `null`  
- 使用 `g` 回傳所有符合的 `string`，反之只回傳第一個符合的 `string`  

> 相關資源:  
> [[ JS 进阶 ] test, exec, match, replace](https://segmentfault.com/a/1190000003497780)  

### 7. `Window​OrWorker​Global​Scope​.fetch()`  
用法: 取得 `url` 的資源，回傳 `promise`
語法: `fetchResponsePromise = fetch(resource, init)`  
特性:  
- 除了網路錯誤，`promise` 會回傳所有 `response` 包括 `HTTP errors`  


> 相關資源:  
> [了解 Fetch API](https://aotu.io/notes/2017/04/10/fetch-API/index.html)  


