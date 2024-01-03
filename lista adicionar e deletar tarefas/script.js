// Elementos do DOM
const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const sendButton = document.querySelector(".send-button");
const taskList = document.querySelector(".task-list");

// Função para renderizar as tarefas na lista
function renderTasks() {
    const storedTasks = getStoredTasks();

    // Limpar a lista atual
    taskList.innerHTML = '';

    // Adicionar as tarefas à lista no HTML
    storedTasks.forEach((task, index) => {
        const listItem = createTaskItem(task, index);
        taskList.appendChild(listItem);
    });
}

// Função para obter as tarefas armazenadas no localStorage
function getStoredTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Função para criar um item de tarefa (li) no DOM
function createTaskItem(task, index) {
    const listItem = document.createElement('li');

    // Texto da tarefa
    listItem.textContent = task;

    // Botão de delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete")

    deleteButton.addEventListener('click', () => deleteTask(index));

    // Adicionar elementos à lista
    listItem.appendChild(deleteButton);

    return listItem;
}

// Função para adicionar uma nova tarefa
function addTask() {
    const inputText = inputNovaTarefa.value.trim();

    if (inputText !== '') {
        const storedTasks = getStoredTasks();
        storedTasks.push(inputText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        // Renderizar as tarefas atualizadas
        renderTasks();

        // Limpar o valor da caixa de entrada
        inputNovaTarefa.value = '';
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    const storedTasks = getStoredTasks();
    storedTasks.splice(index, 1);//remove o elemento
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    // Renderizar as tarefas atualizadas
    renderTasks();
}

// Event listener para o botão de envio
sendButton.addEventListener('click', addTask);

// Renderizar as tarefas quando a página carregar
renderTasks();
