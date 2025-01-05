const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');


input.addEventListener('keyup', () => {
    duplicateField.textContent = input.value;
});

button.addEventListener('click', () => {
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
});