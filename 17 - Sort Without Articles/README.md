# Day 17 Sort Without Articles :bank:   

## 目標 :bar_chart:  

新增表單按照字母排序，並忽略 `a` `an` `the` 等字。  

## JavaScript :barber:  

```js
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortBandName = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
  sortBandName
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortBandName);
```

1. 用 `String.replace()` 忽略 `a` `an` `the`。   

2. 將 `array` 進行排序 `Array.sort()`。  

3. 把 `array` 新增 `Array.map()` `Array.join()` 至 `DOM` `DOM.innerHTML`。   


