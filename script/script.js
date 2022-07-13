const txt = document.querySelector('#notion');
const btnAdc = document.querySelector('#btn-adc');
const display = document.querySelector('#res');

let toDo = [];

function setBanco(toDo) {
    localStorage.setItem('todoList', JSON.stringify(toDo));
}

function getBanco() {
    return JSON.parse(localStorage.getItem('todoList')) ?? [];
}
// exibe as tarefas armazenas
const updateDisplay = document.addEventListener('DOMContentLoaded', () => {
    toDo = getBanco();
    handleDisplay();
})
// faz a verificacao de tarefas repetidas
function inlista(task) {
    return temTarefa = toDo.some(item => item.tarefa.toUpperCase() == task.toUpperCase());
}
// adiciona novas tarefas
// trata as verificacoes antes de adc a tarefa
btnAdc.addEventListener("click", () => {
    if (txt.value == 0) {
        alert('Necessário adicionar tarefa!');
    } else if (inlista(txt.value)) {
        alert('Tarefa já existente, adicione uma nova tarefa!');
    } else {
        let task = txt.value;
        addTask(task);
    }
})
// cria uma nova tarefa
function addTask(txt) {
    toDo = getBanco();
    toDo.push({ 'tarefa': txt, 'status': '' });
    displayReset();
    handleDisplay();
    setBanco(toDo);
}
// removeTask a tarefa especifica
function removeTask(index) {
    toDo = getBanco();
    toDo.splice(index, 1);
    displayReset();
    handleDisplay();
    setBanco(toDo);
}
// Exibe as tarefas na tela
function handleDisplay() {
    toDo.forEach((task, index) => {
        display.innerHTML += `<li><input type="button" value="Done" onclick="removeTask(${index})"> - ${task.tarefa}</li>`;
    })
}
// limpa os inputs para receber novos txt
function displayReset() {
    display.innerHTML = '';
    txt.focus();
    txt.value = '';
}



