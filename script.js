function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      var taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      taskItem.appendChild(checkbox);
  
      var taskText = document.createTextNode(taskInput.value);
      var taskTextSpan = document.createElement('span');
      taskTextSpan.className = 'task-text';
      taskTextSpan.appendChild(taskText);
      taskItem.appendChild(taskTextSpan);
  
      var deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
      };
      taskItem.appendChild(deleteBtn);
  
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  }