const tasksList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Function to create a new task list item
function createTask(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task;

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    tasksList.removeChild(listItem);
  });

  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add click event listener to the add task button
addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = createTask(newTask);
    tasksList.appendChild(listItem);
    newTaskInput.value = '';
  }
});