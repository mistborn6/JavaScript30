# Day 13 Slide in on Scroll :atm:   

## 目標 :b:  

監聽網頁滑動，滑到特定位置照片滑入滑出。

## JavaScript :baby:  

```js
const imgs = document.querySelectorAll('.slide-in');

function handleSlideIn(e) {
    imgs.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        const imgButton = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrollPast = window.scrollY < imgButton;

        if (isHalfShown && isNotScrollPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        };
    });
}

window.addEventListener('scroll', debounce(handleSlideIn));
```

1. 當畫面滑到圖片中間點，圖片滑入 `(window.scrollY + window.innerHeight) - img.height / 2` > `img.offsetTop`。

2. 當畫面滑到看不到圖片，圖片滑出 `window.scrollY` < `img.offsetTop + img.height`。

3. 判斷當畫面滑到圖片一半且沒有滑超過圖片，圖片滑入。


