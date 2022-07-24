const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


const operate = function(operator, a, b) {
    let result = ""
    
    switch(operator) {
        case add:
            result = add(a, b);
            console.log(result);
            break;
        case subtract:
            result = subtract(a, b);
            console.log(result);
            break;
        case multiply:
            result = multiply(a, b);
            console.log(result);
            break;
        case divide:
            result = divide(a, b);
            console.log(result);
            break;
        
    }
}

operate(multiply, 10, 10)