//global variables
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//selecting DOM
const numbers = document.querySelectorAll('#number');
const tempResult = document.querySelector(".temp-result");
const operators = document.querySelectorAll('#operator')
const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const clearAll = document.querySelector('#clear')
const equal = document.querySelector('.equal');
const del = document.querySelector('#delete')



    
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (e.target.textContent === "." && !haveDot) {
        haveDot = true;
      } else if (e.target.textContent === "." && haveDot) {
        return;
      }
      dis2Num += e.target.textContent;
      display2.textContent = dis2Num;
      // console.log();
    });
  });
  
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      if (!dis2Num) return;
      haveDot = false;
      const operationName = e.target.textContent;
      if (dis1Num && dis2Num && lastOperation) {
        operate();
      } else {
        result = parseFloat(dis2Num);
      }
      clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
    });
  });
  
  function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1.textContent = dis1Num;
    display2.textContent = "";
    dis2Num = "";
    display2.textContent = result;
    
    // tempResult.textContent = result;
  }
  
  function operate() {
    if (lastOperation === "x") {
      result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
      result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
      result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
      result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
      result = parseFloat(result) % parseFloat(dis2Num);
    }
  }
 
  
  equal.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    operate();
    clearVar();
    // tempResult.textContent = "";
    
    
    dis2Num = result;
    dis1Num = "";
  });
  
  clearAll.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1.textContent = "";
    display2.textContent = "";
    result = "";
    tempResult.textContent = "";
  });
  
  del.addEventListener("click", () => {
    display2.textContent = display2.textContent.slice(0, display2.textContent.length - 1);
    dis2Num = "";
  });
  
//event for keyboard

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButton(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
      // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });
  function clickButton(key) {
    numbers.forEach((button) => {
      if (button.textContent === key) {
        button.click();
      }
    });
  }
  function clickOperation(key) {
    operators.forEach((operator) => {
      if (operator.textContent === key) {
        operator.click();
      }
    });
  }
  function clickEqual() {
    equal.click();
  }
  