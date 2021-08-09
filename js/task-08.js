const refs = {
    inputEl: document.querySelector('[type="number"]'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesEl: document.querySelector('#boxes'),
}
let divSize = 20;

refs.renderBtn.addEventListener('click', onRenderBtn);
refs.destroyBtn.addEventListener('click', ondestroyBtn);

function createBoxes(amount) {
    const arrayOfDivs = [];


    for (let i = 1; i <= amount; i += 1) {
        const divEl = document.createElement('div');
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        divEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        divSize += 10;
        divEl.style.width = `${divSize}px`;
        divEl.style.height = `${divSize}px`;
        arrayOfDivs.push(divEl);
    }

    refs.boxesEl.append(...arrayOfDivs);
};

function onRenderBtn() {
    createBoxes(refs.inputEl.value);
    refs.inputEl.value = '';
}
function removeBoxes() {
    refs.boxesEl.textContent = '';
    refs.inputEl.value = '';
    divSize = 20;
}
function ondestroyBtn() {
    removeBoxes()
}
