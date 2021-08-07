const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const el = event.currentTarget;

    if (el.value.length === Number(el.dataset.length)) {
        el.classList.add('valid')
        el.classList.remove('invalid')
    } else if (el.value.length === 0) {
        el.classList.remove('valid', 'invalid')
    } else {
        el.classList.remove('valid')
        el.classList.add('invalid')
    }
    // console.log(el);
}

