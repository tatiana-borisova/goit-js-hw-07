// Counting the number of categories

const listEl = document.querySelector('#categories');
const childrenOfList = listEl.children;
const categoriesCount = childrenOfList.length;

const SING_NOM = 'singNom'
const MULT_GEN = 'multGen'
const MULT_NOM = 'multNom'

const getConjugation = (count) => {
    if (count % 10 === 1 && count !== 11) {
        return SING_NOM;
    }
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count)) {
        return MULT_NOM;
    }
    return MULT_GEN;
}

const categoriesConjugation = {
    singNom: 'ия',
    multGen: 'ий',
    multNom: 'ии',
}

console.log(`В списке ${categoriesCount} категор${categoriesConjugation[getConjugation(categoriesCount)]}.`);

// Working with categories

for (let child of childrenOfList) {
    console.log('Категория:', child.firstElementChild.textContent);
    console.log('Количество элементов:', child.querySelector('ul').children.length);
}

// console.log(listEl);
