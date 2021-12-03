const UI_ELEMENTS = {
  RESULT_STORAGE: document.getElementById("display"),
  BTN_NUMBERS: document.querySelectorAll(".btn-number"),
  BTN_OPERATORS: document.querySelectorAll(".btn-operator"),
  BTN_CLEAR: document.getElementById("clear"),
  BTN_DELETE: document.getElementById("delete"),
  BTN_EQUAL: document.getElementById("equal"),
};

let operand_1 = null;
let operand_2 = null;
let result = null;
let operator = null;

function resetResult() {
  UI_ELEMENTS.RESULT_STORAGE.textContent = "0";
  operand_1 = null;
  operand_2 = null;
  result = null;
  operator = null;
}

UI_ELEMENTS.BTN_CLEAR.addEventListener("click", resetResult);

function deleteLastNumber() {
  if (UI_ELEMENTS.RESULT_STORAGE.textContent.length === 1) {
    UI_ELEMENTS.RESULT_STORAGE.textContent = "0";
  } else {
    UI_ELEMENTS.RESULT_STORAGE.textContent =
      UI_ELEMENTS.RESULT_STORAGE.textContent.slice(
        0,
        UI_ELEMENTS.RESULT_STORAGE.textContent.length - 1
      );
  }
}

UI_ELEMENTS.BTN_DELETE.addEventListener("click", deleteLastNumber);

for (let item of UI_ELEMENTS.BTN_NUMBERS) {
  item.addEventListener("click", pushNumber);

  function pushNumber() {
    const isZeroOrOperandOnScreen =
      UI_ELEMENTS.RESULT_STORAGE.textContent === "0" ||
      UI_ELEMENTS.RESULT_STORAGE.textContent === "÷" ||
      UI_ELEMENTS.RESULT_STORAGE.textContent === "×" ||
      UI_ELEMENTS.RESULT_STORAGE.textContent === "-" ||
      UI_ELEMENTS.RESULT_STORAGE.textContent === "+";
    if (isZeroOrOperandOnScreen) {
      UI_ELEMENTS.RESULT_STORAGE.textContent = item.textContent;
    } else {
      UI_ELEMENTS.RESULT_STORAGE.textContent += item.textContent;
    }
  }
}

for (let item of UI_ELEMENTS.BTN_OPERATORS) {
  item.addEventListener("click", getOperand_1);
}

function getOperand_1() {
  operand_1 = UI_ELEMENTS.RESULT_STORAGE.textContent;
  operator = this.id;
  switch (operator) {
    case "div":
      UI_ELEMENTS.RESULT_STORAGE.textContent = "÷";
      break;
    case "sub":
      UI_ELEMENTS.RESULT_STORAGE.textContent = "-";
      break;
    case "sum":
      UI_ELEMENTS.RESULT_STORAGE.textContent = "+";
      break;
    case "mult":
      UI_ELEMENTS.RESULT_STORAGE.textContent = "×";
      break;
  }
}

function getResult() {
  operand_2 = UI_ELEMENTS.RESULT_STORAGE.textContent;
  switch (operator) {
    case "div":
      return (result = +operand_1 / +operand_2);
    case "mult":
      return (result = +operand_1 * +operand_2);
    case "sub":
      return (result = +operand_1 - +operand_2);
    case "sum":
      return (result = +operand_1 + +operand_2);
  }
}

function showResult() {
  UI_ELEMENTS.RESULT_STORAGE.textContent = getResult();
}

UI_ELEMENTS.BTN_EQUAL.addEventListener("click", showResult);
