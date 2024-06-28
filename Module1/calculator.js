// question:
// Module 1 – Assessment
// Create a simple calculator in Javascript.

// · create mock data using let/const keywords

const num1 = 100
const num2 = 30
let operation = "*"

// · use conditional statements for input data validations

if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    console.log("Both inputs must be numbers");
} else if(['+', '-', '*', '/'].indexOf(operation) === -1){
    console.log("Inavlid Operation");
} else if(operation === '/' && num2 === 0){
    console.log("Cannot Divide by zero");
} else{

    let result;
    // · use switch case to select the type of arithmetic operation to be performed.
    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = null;
    }
    console.log("Result :"+result);
}


