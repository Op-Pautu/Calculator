//global variables
let dis1Num = '';
let dis2Num = '';
let result= null;
let lastOperation = '';
let haveDot = false;

//selecting DOM
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('#number');

const operators = document.querySelectorAll('#operator')
const lastScreen = document.querySelector('.screen-last')
const currentScreen = document.querySelector('.screen-current')

const equal = document.querySelector('.equal');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         display.textContent += button.className;  
//         let num1 = display.textContent;
        
//     })
// })
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.textContent === '.' && !haveDot) {
            haveDot = true;
            
        }
        else if (e.target.textContent === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.textContent;
        currentScreen.textContent = dis2Num;

        
    })
});

    
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
      if (!dis2Num) return;  
      haveDot = false;
      const chooseOperation = e.target.textContent;
      if (dis1Num && dis2Num && lastOperation){
        operate();
      } else {
        result = parseFloat(dis2Num)
      }

        
    })
}) 


    

// compute()
// let chooseOperation = prompt('Choose an operator: ')
// (operate(chooseOperation, num1, num2));




//DOM
const del = document.getElementById('delete');
del.addEventListener('click', () => {
   display.textContent = display.textContent.slice(0, display.textContent.length - 1)

})

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    display.textContent = "";
    

})


const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


function operate(operator, a, b) {
    
    let result = ""
    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '÷':
            if (b === 0) result = null;
     
            result = divide(a, b);
            break;
        default: 
            alert("invalid operator")
    }
    return result;
}