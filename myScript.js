const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


const operate = function(operator, a, b) {
    
    
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '÷':
            divide(a, b);
            break;
        default: 
            alert("invalid operator")
    }
}

const buttons = document.querySelectorAll('button');
const space = document.querySelector('#space');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        space.textContent += button.className;
    })
})

const del = document.getElementById('delete');
del.addEventListener('click', () => {
   space.textContent = space.textContent.slice(0, space.textContent.length - 1)

})

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    space.textContent = "";
    

})



