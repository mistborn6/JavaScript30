# Day 15 Local Storage :baby_symbol:   

## 目標 :balloon:  

新增代辦事項，可以對代辦事項做紀錄，網頁刷新會記錄最後更新的資料。  

## JavaScript :back:  

#### 新增代辦事項到清單 :baggage_claim:  

```js
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[type=text]').value;
    const item = {
        text,
        done: false,
    }
    items.push(item);
    console.table(items);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type='checkbox' data-index=${i} id='item${i}' ${plate.done ? 'checked' : ''}>
        <label for='item${i}'>${plate.text}</label>
        </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);

populateList(items, itemsList);
```

1. 監聽 `submit`，發生時停止網頁傳資料 `e.preventDefault()`，將資料 `this.value` 放入 `array` `Array.push()`。   

2. 將 `array` 資料放入 `Array.map()` 代辦清單 `DOM.innerHTML`，結尾要加 `Array.join()` 避免空白。  

3. 將 `populateList` 放到 `addItem` 再新增的時候清單可以及時做調整。(這是整個 `ul` 一起更新，而不是插入新的 `li`)  

4. 防止網頁刷新資料會不見 `localStorage.setItem()`儲存資料，因為只能存 `string` 用 `JSON.stringify` 將 `array` 做轉換。  

5. 結尾加 `this.reset()` `submit` 完重整 `input`。  

6. 設定 `items` `JSON.parse(localStorage.getItem('items')) || []`，若 `localStorage` 有資料就拿，沒資料為空白。 

7. 結尾加上 `populateList` 網頁刷新，可以顯示之前新增資料。  


#### 紀錄資料更新 :ballot_box_with_check:  

```js
function toggleDone(e) {
    // console.log(e.target);
    if (!e.target.matches('input')) return ;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

itemsList.addEventListener('click', toggleDone);
```

1. 點擊清單觸發多個 `DOM` 用 `e.target.matches('input')` 只選擇 `checkbox` 。  

2. 設定事項是否完成 `items[index].done = !items[index].done`，插入事項到清單時，有用 `done` 判斷確認是否完成 `${plate.done ? 'checked' : ''`。  

3. 更新資料 `localStorage.setItem` 重新插入一次 `populateList` 結束。  

