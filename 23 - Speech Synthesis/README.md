# Day 23 Speech Synthesis :bear:   

## 目標 :beetle:  

讓網頁發出聲音，可以調整語言、語速、聲調、文字、開始、結束。

## JavaScript :beginner:  

```js
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value='${voice.name}'>${voice.name}(${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name == this.value);
  toggle();
}

function toggle(startover = true) {
  speechSynthesis.cancel();
  (startover) && speechSynthesis.speak(msg);
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
```

1. 載入語言包 `speechSynthesis.addEventListener('voiceschanged', populateVoices)`，取得語言包 `this.getVoices()`。 

2. 製作語言列表 `DOM.innerHTML`、`Array.map()`、`Array.join()`。  

3. 選取語言 `change` 播放聲音 `setVoice()` 點選別的語言立即切換 `toggle()`。   

4. 當變換 `change` 聲調、語速、文字，聲音會跟著改變 `setOption()`。

5. 設定開始、停止按鈕。

