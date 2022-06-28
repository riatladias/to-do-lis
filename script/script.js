const txt = document.querySelector('#notion');
const btnAdc = document.querySelector('#btn-adc');
const display = document.querySelector('div#res');
const btnRemove = document.getElementById('remover');

let toDo = []

function setBanco(toDo) {
    localStorage.setItem('todoList', JSON.stringify(toDo))
}

function getBanco() {
    return JSON.parse(localStorage.getItem('todoList')) ?? []
}

const attTela = document.addEventListener('DOMContentLoaded', () => {
    toDo = getBanco()
    handleDisplay()
})

function inlista(task){
    return temTarefa = toDo.some(item => item.tarefa.toUpperCase() == task.toUpperCase())
}

btnAdc.addEventListener("click", () => {
    if (txt.value == 0) {
        alert('Necessário adicionar tarefa!');
    } else if (inlista(txt.value)) {
        alert('Tarefa já existente, adicione uma nova tarefa!')
    } else {
        let task = txt.value;
        addTask(task)
    }
})

btnRemove.addEventListener('click', () => {
    toDo = getBanco()
    toDo.splice(-1)
    displayReset()
    handleDisplay()
    setBanco(toDo)
})

function handleDisplay() {
    toDo.forEach(task => {
        display.innerHTML += `<label>${task.tarefa}</label>`
    })
}

function displayReset() {
    display.innerHTML = ''
    txt.focus()
    txt.value = ''
}

function addTask(txt) {
    toDo = getBanco()
    toDo.push({ 'tarefa': txt, 'status': '' });
    displayReset()
    handleDisplay()
    setBanco(toDo)
}