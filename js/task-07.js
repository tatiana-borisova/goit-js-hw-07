const refs = {
    fontSizeControlEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

refs.fontSizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
} 