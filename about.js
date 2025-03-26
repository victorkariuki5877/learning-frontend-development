// Declare a variable with the name numberOne
let numberOne = 10;
let numberTwo = 20;

function sum(a, b) {
    return a + b;
}

const division = (x, y) => {
    return x / y;
}

function minus(q, t) {
    return q - t;
} 

// const multiplication = (w, z) => {
//     document.getElementsByTagName('div')[3].innerHTML = `Multiplication: ${w * z}`;
// }


// multiplication(10, 10);

(function callMySelf() {
    document.getElementsByTagName('div')[3].innerHTML = `Multiplication: ${2 * 3}`;
}());

// DOM(Document Object Manipulation)
document.getElementsByTagName('div')[0].innerHTML = "Addition: " + sum(45, 15);
document.getElementsByTagName('div')[1].innerHTML = `Division: ${division(45, 15)}`;
document.getElementsByTagName('div')[2].innerHTML = "Substraction: " + minus(35, 10);

// In depth reading about variables, understand the let, var and const

// Read about Data Types
// Integer
let myAge = 23;

// Float
let myFloat = 23.44;

// String
let myName = "Victor";
let my_name = "Victor";

// Object
let myObject = {
    first_name: "Victor",
    last_name: "Kariuki",
};

console.log(myObject.first_name);

// Array
let myInformation = [23, 23.44, "Victor", { first_name: "Victor", last_name: "Kariuki"}];

console.log(myInformation[3].last_name);
