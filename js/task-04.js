const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    countEl: document.querySelector('#value'),
};

let counterValue = Number(refs.countEl.textContent);

refs.incrementBtn.addEventListener('click', onIncrementBtn);
refs.decrementBtn.addEventListener('click', onDecrementBtn);

function onIncrementBtn() {
    refs.countEl.textContent = counterValue += 1;
}

function onDecrementBtn() {
    refs.countEl.textContent = counterValue -= 1;
}
