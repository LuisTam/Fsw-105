var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number.");
var secondNum = readlineSync.questionInt("Please enter your second number.");
var userOperation = readlineSync.question("Please enter the operation to perform: (add/sub/mul/div): ");

function add(a,b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a ,b){
    return a / b;
}
function myCalculator(num1, num2, operation){
   var i = operation;
   switch(i){
       case "add":
           console.log("The sum of " +num1 + " and "+ num2 + " is " + add(num1,num2));
           break;
        case "sub":
            console.log("The subtaction of " + num1 + " and " + num2 + " is " + sub(num1, num2));
            break;
        case "mul":
            console.log("The multiplication of " + num1 + " and " + num2 + " is " + mul(num1, num2));
            break;
        case "div":
            console.log("The division of " + num1 + " and " + num2 + " is " + div(num1, num2));
            break;
            default: "Invalid operation! Please try again."

   }
}
myCalculator(firstNum, secondNum, userOperation); 