const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

// Изменение статуса
function changeStatus(task, status) {
  list[task] = status;
}

// Добавление задачи
function addTask(task) {
  list[task] = "To Do";
}

// Удаление задачи
function deleteTask(task) {
  delete list[task];
}

// Проверка. Есть ли задачи с определенным статусом в списке.
function isAnyTaskInStatus(status) {
  let statusCheck = false;
  for (let key in list) {
    if (list[key] === status) {
      statusCheck = true;
    }
  }
  return statusCheck;
}

//Показывает задачи с выбранными статусом.
function showTaskByStatus(status) {
  if (!isAnyTaskInStatus(status)) {
    console.log(status + ":");
    console.log("-");
  } else {
    console.log(status + ":");
    for (let key in list) {
      if (list[key] === status) {
        console.log('"' + key + '"');
      }
    }
  }
}

// Показывает все задачи из списка.
function showList() {
  showTaskByStatus("To Do");
  showTaskByStatus("In Progress");
  showTaskByStatus("Done");
}

console.log("Тест 1. Показываем лист.");
showList();
console.log("2. Изменяем статус 'make a bed' на 'To Do'.");
changeStatus("make a bed", "To Do");
showList();
console.log("3. Добавляем задачу 'buy some food'");
addTask("buy some food");
showList();
console.log("4. Удаляем задачу 'write a post'");
deleteTask("write a post");
showList();
