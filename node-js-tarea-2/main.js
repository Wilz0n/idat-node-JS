// VARIABLES

loadListeners();

// LISTENERS
function loadListeners() {
  readTasks();
  document.getElementById('FormElement').addEventListener('submit', createTask);
}

// FUNCTIONS

async function readTasks() {
  const { data } = await axios.get('http://localhost:3000/task');
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.innerHTML = '';

  data.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-element');
    taskElement.innerHTML = `
      <p> Correo Electronico:<br>${task.title} <br><br>  Contraseña:<br>${task.author}</p>
      <button class="delete-btn" data-id="${task.id}">Eliminar</button>
    `;
    tasksContainer.appendChild(taskElement);
  });

 
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const taskId = this.getAttribute('data-id');
      deleteTask(taskId);
    });
  });
}

async function createTask(event) {
  event.preventDefault();
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('contentInput').value;

  const taskToCreate = {
    title,
    author,
  };

  const { data } = await axios.post('http://localhost:3000/task', taskToCreate);
  readTasks(); 
}

async function deleteTask(idDelete) {
  await axios.delete(`http://localhost:3000/task/${idDelete}`);
  readTasks();
}