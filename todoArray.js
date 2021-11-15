const STATUS_TO_DO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const PRIORITY_LOW = "Low";
const PRIORITY_HIGH = "High";
let idCounter = 0;

let list = [];

const itemOfTask = (task) => {
  return list.find((item) => item.name === task);
};

function changeStatus(task, status) {
  itemOfTask(task).status = status;
}

function changePriority(task, priority) {
  itemOfTask(task).priority = priority;
}

function addTask(task) {
  list.push({
    id: ++idCounter,
    name: task,
    status: STATUS_TO_DO,
    priority: PRIORITY_LOW,
  });
}

function deleteTask(task) {
  const taskItemIndex = list.findIndex(function (item) {
    return item.name === task;
  });
  list.splice(taskItemIndex, 1);
}

function showListByStatus() {
  showTasksWithGivenStatus(STATUS_TO_DO);
  showTasksWithGivenStatus(STATUS_IN_PROGRESS);
  showTasksWithGivenStatus(STATUS_DONE);
}

function showListByPriority() {
  showTasksWithGivenPriority(PRIORITY_LOW);
  showTasksWithGivenPriority(PRIORITY_HIGH);
}

function showTasksWithGivenStatus(status) {
  console.log(`${status}:`);

  if (noTaskWithGivenStatus(status)) {
    console.log("-");
    return;
  }

  for (let item of list) {
    if (item.status === status) {
      console.log(item.name);
    }
  }

  /* else {
    const taskItemsWithGivenStatus = list.filter(
      (item) => item.status == status
    );
    console.log(`${status}:`);
    taskItemsWithGivenStatus.forEach((item) => {
      console.log(item.name);
    });
  } */
}

function showTasksWithGivenPriority(priority) {
  console.log(`${priority}:`);

  if (noTaskWithGivenPriority(priority)) {
    console.log("-");
    return;
  }

  for (let item of list) {
    if (item.priority === priority) {
      console.log(item.name);
    }
  }
}

function noTaskWithGivenStatus(status) {
  for (item of list) {
    if (item.status === status) {
      return false;
    }
  }
  return true;

  /* const taskItemWithGivenStatus = list.find((item) => item.status === status);
  if (taskItemWithGivenStatus !== undefined) {
    return true;
  } else {
    return false;
  } */
}

function noTaskWithGivenPriority(priority) {
  for (item of list) {
    if (item.priority === priority) {
      return false;
    }
  }
  return true;
}

addTask("make bed");
addTask("eat");
addTask("study arrays");
addTask("finish ToDo list");
addTask("watch a livestream");
addTask("buy groceries");
console.log(list);

console.log(`\nМеняем статусы "eat" и "make bed"`);
changeStatus("eat", STATUS_DONE);
changeStatus("make bed", STATUS_DONE);
console.log(list);

console.log(`\nУдаляем задачу 3 и добавляем обратно`);
deleteTask("study arrays");
addTask("study arrays");
console.log(list);

console.log(`\nМеняем приоритеты "finish ToDo list" и "watch a livestream"`);
changePriority("finish ToDo list", "High");
changePriority("watch a livestream", "High");
console.log(list);

console.log(`\nСортируем по статусам`);
showListByStatus();

console.log(`\nСортируем по приоритетам`);
showListByPriority();
