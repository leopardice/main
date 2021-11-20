// Первый случай
function f() {
  let value = Math.random();

  return function () {
    console.log(value);
  };
}

let arr = [f(), f(), f()];
// Второй случай
function f() {
  let value = Math.random();
  function g() {
    console.log(value);
  }
  return g();
}

let arr = [f(), f(), f()];
