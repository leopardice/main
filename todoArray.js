const STATUS_TO_DO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const PRIORITY_LOW = "Low";
const PRIORITY_HIGH = "High";

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
    id: list.length + 1,
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
  showTasksWithStatus(STATUS_TO_DO);
  showTasksWithStatus(STATUS_IN_PROGRESS);
  showTasksWithStatus(STATUS_DONE);
}

function showListByPriority() {
  showTasksWithPriority(PRIORITY_LOW);
  showTasksWithPriority(PRIORITY_HIGH);
}

function showTasksWithStatus(status) {
  if (!isAnyTaskWithGivenStatus(status)) {
    console.log(status + ":");
    console.log("-");
  } else {
    const taskItemsWithGivenStatus = list.filter(
      (item) => item.status == status
    );
    console.log(`${status}:`);
    taskItemsWithGivenStatus.forEach((item) => {
      console.log(item.name);
    });
  }
}

const showTasksWithPriority = (priority) => {
  if (!isAnyTaskWithGivenPriority(priority)) {
    console.log(priority + ":");
    console.log("-");
  } else {
    const taskItemsWithGivenPriority = list.filter(
      (item) => item.priority === priority
    );
    console.log(`${priority}:`);
    taskItemsWithGivenPriority.forEach((item) => {
      console.log(item.name);
    });
  }
};

const isAnyTaskWithGivenStatus = (status) => {
  const taskItemWithGivenStatus = list.find((item) => item.status === status);
  if (taskItemWithGivenStatus !== undefined) {
    return true;
  } else {
    return false;
  }
};

const isAnyTaskWithGivenPriority = (priority) => {
  const taskItemWithGivenPriority = list.find(
    (item) => item.priority === priority
  );
  if (taskItemWithGivenPriority !== undefined) {
    return true;
  } else {
    return false;
  }
};

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

console.log(`\nУдаляем задачу 3`);
deleteTask("study arrays");
console.log(list);

console.log(`\nМеняем приоритеты "finish ToDo list" и "watch a livestream"`);
changePriority("finish ToDo list", "High");
changePriority("watch a livestream", "High");
console.log(list);

console.log(`\nСортируем по статусам`);
showListByStatus();

console.log(`\nСортируем по приоритетам`);
showListByPriority();
