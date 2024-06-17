//This is my first javascript code!
console.log('Hello World');

// 1.Way to print in javascript
console.log('Hello World');
alert('This is an alert message');
document.write('This document write');

// 2. Javascript Console API
console.log('This is used to print in console');
console.warn('This is a warning');
console.error('This is an error');

// 3. Variables
//* Variables are containers to store data values.

// Block Scope //
// x can NOT be used here. 
{
    let x = 6.0855 
}
// x CAN be used here. 

// Local Scope //
// code can NOT use varName
function myFunction(){
    let person = "Loretta Tyler"; 
    // code CAN use varName
}
// code can NOT use varName

//Global Scope
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}