const statusToDo = "To Do";
const statusInProgress = "In Progress";
const statusDone = "Done";
const priorityLow = "Low";
const priorityHigh = "High";

let list = [];

let changeStatus = (task, status) => {
  let taskItem = list.find((item) => item.name == task);
  taskItem.status = status;
};

let changePriority = (task, priority) => {
  let taskItem = list.find((item) => item.name == task);
  taskItem.priority = priority;
};

let addTask = (task) => {
  if (list.length === 0) {
    lastItemId = 0;
  } else {
    let lastItemIndex = list.length - 1;
    lastItemId = list[lastItemIndex].id;
  }

  list.push({
    id: lastItemId + 1,
    name: task,
    status: statusToDo,
    priority: priorityLow,
  });
};

let deleteTask = (task) => {
  let taskItem = list.find((item) => item.name == task);
  let taskItemIndex = taskItem.id - 1;
  list.splice(taskItemIndex, 1);
};

let showTasksWithStatus = (status) => {
  if (!isAnyTaskWithStatus(status)) {
    console.log(status + ":");
    console.log("-");
  } else {
    let taskItems = list.filter((item) => item.status == status);
    console.log(`${status}:`);
    taskItems.forEach((item) => {
      console.log(item.name);
    });
  }
};

let showListByStatus = () => {
  showTasksWithStatus(statusToDo);
  showTasksWithStatus(statusInProgress);
  showTasksWithStatus(statusDone);
};

let showTasksWithPriority = (priority) => {
  if (!isAnyTaskWithPriority(priority)) {
    console.log(priority + ":");
    console.log("-");
  } else {
    let taskItems = list.filter((item) => item.priority == priority);
    console.log(`${priority}:`);
    taskItems.forEach((item) => {
      console.log(item.name);
    });
  }
};

let showListByPriority = () => {
  showTasksWithPriority(priorityLow);
  showTasksWithPriority(priorityHigh);
};

let isAnyTaskWithStatus = (status) => {
  let taskItem = list.find((item) => item.status == status);
  if (taskItem !== undefined) {
    return true;
  } else {
    return false;
  }
};

let isAnyTaskWithPriority = (priority) => {
  let taskItem = list.find((item) => item.priority == priority);
  if (taskItem !== undefined) {
    return true;
  } else {
    return false;
  }
};

let isStatusCorrect = (status) => {
  const correctStatus = statusToDo || statusInProgress || statusDone;
  if (taskItem === undefined) {
    console.log("There is no such task in the list");
  } else if (status !== correctStatus) {
    console.log(
      `Choose the right status. ${statusToDo},${statusInProgress} or ${statusDone}.`
    );
  } else {
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
changeStatus("eat", statusDone);
changeStatus("make bed", statusDone);
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
