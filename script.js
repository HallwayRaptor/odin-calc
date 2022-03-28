let screenValue = 0;


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
console.log(`use divide function on 6 and 2 to get ${operate(divide,6,2)})`)

const clearScreen = () => {
  calcScreen.textContent = 0;
}
const addToScreen = () => {
  calcScreen.textContent == 0 ? calcScreen.textContent = screenValue : calcScreen.textContent += screenValue
}
const addItem = (item) => screenValue = item;

const calcScreen = document.getElementById('calc-screen')

const buttons = Array.from(document.querySelectorAll('button'))
console.log(buttons);

const btnClear = buttons[0]

btnClear.addEventListener('click', clearScreen)

const btnClick = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      switch (btn.value) {
        case 'clear': clearScreen;
        break;
        case '*': ;
        case '/': ;
        case '-': ;
        case '+': ;
        case '=': ;
        default:
          addItem(btn.value)
          addToScreen();
      }
    })
  });
}

addToScreen();
btnClick();