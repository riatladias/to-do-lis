const txt = document.querySelector('#notion');
const btn = document.querySelector('#btn-adc');
const display = document.querySelector('div#res');
const btnRemove = document.getElementById('remover');

let toDo = [];

function setBanco(toDo) {
    localStorage.setItem('todoList', JSON.stringify(toDo));
}

function getBanco() {
    return JSON.parse(localStorage.getItem('todoList'));
}
// const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? []

const att = document.addEventListener('DOMContentLoaded', () => {
    toDo = getBanco();
    handleDisplay();
})

btn.addEventListener("click", () => {
    if (txt.value == 0 ) {
        alert('Necessário adicionar tarefa ou tarefa já existente.');
    } else {
        let task = txt.value;
        addTask(task);
    }
})


function displayReset() {
    display.innerHTML = '';
    txt.focus();
    txt.value = '';
}

function addTask(txt) {
    toDo = getBanco();
    toDo.push({ 'tarefa': txt, 'status': '' });
    displayReset();
    handleDisplay();
    setBanco(toDo);
}

function handleDisplay() {
    toDo.forEach((task) => {
        display.innerHTML += `<h1>${task.tarefa}</h1>`;
    })
}

btnRemove.addEventListener('click', () => {
    toDo = getBanco();
    toDo.splice(-1);
    displayReset();
    handleDisplay();
    setBanco(toDo);
})


