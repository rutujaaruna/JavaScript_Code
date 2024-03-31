console.log("check", typeof(NaN)); // Output: number

//Global scope - accessbile anywhere
let globalVariable="global";

// Call the greet function before its definition
greet();  // It is the function hoisting 

// Define the greet function using a function expression
function greet() {
    // Function scope - accessible only inside that function
    let functionVariable = "Function";

    if (true) {
        // Block scope - accessible only inside that block
        let blockVariable = 'Block';

        console.log("globalVariable", globalVariable);
        console.log("functionVariable", functionVariable);
        console.log("blockVariable", blockVariable);
    }

    console.log("globalVariable", globalVariable);
    console.log("functionVariable", functionVariable);
}

console.log("globalVariable", globalVariable);


// age = 22;
// console.log("My age is", age);

let myAge = (x) => {
    if(x>10){
        age = 22;    // Var is the implicittype of variable when a variable is declared without using var,let or const keywords.
    }else{
        age = 9;
    }
};

myAge(1);
console.log("My age is : ", age);

// In JavaScript, you don't explicitly specify data types when declaring variables as you would in statically typed languages like Java or C++. 
// Instead, JavaScript uses dynamic typing, meaning that variables can hold values of any type, 
// and their types can change during runtime.


// What is hoisting in javascript?
// Hoisting ia a javascript behavior where functions and variable
// declarations are moved to the top of their respective scopes during the compilation phase.

// variable hoisting

x = 10;
console.log("Value of x",x);
var x;

//Convert array to object
const arr = ['a', 'b', 'c'];

let obj = arr.reduce((a,it) => ({...a,[it]:it}),{});
console.log("obje",obj)


