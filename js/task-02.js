const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createItem(ingredient) {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('ingredient');
  navItemEl.textContent = `${ingredient}`
  return navItemEl
};

const navEl = document.querySelector('#ingredients');

navEl.append(...ingredients.map(createItem));

// console.log(navEl);