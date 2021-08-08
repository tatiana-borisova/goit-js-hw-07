const refs = {
    fontSizeControlEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

function changeFontSize(fontSizePx) {
    refs.textEl.style.fontSize = `${fontSizePx}px`;
}

changeFontSize(refs.fontSizeControlEl.value)

refs.fontSizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    changeFontSize(event.currentTarget.value)
} 