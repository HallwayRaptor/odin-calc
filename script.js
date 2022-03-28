//add numbers
const add = (a,b) => a + b
console.log(`adding 5 to 8 = ${add(5, 8)}`)
//subtract numbers
const subtract = (a,b) => a - b
console.log(`subtracting 5 from 8 = ${subtract(8,5)}`)
//multiply numbers
const multiply = (a,b) => a * b
console.log(`multiply 5 and 8 = ${multiply(5,8)}`)
//divide numbers
const divide = (a,b) => a / b
console.log(`divide 40 by 8 = ${divide(40,8)}`)
//use operator on two numbers
const operate = (op, num1, num2) => op(num1, num2)
console.log(`use divide function on 6 and 2 to get ${operate(divide,6,2)}`)