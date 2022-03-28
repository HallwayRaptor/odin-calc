class Calculator {
  constructor(prevScreen, currentScreen) {
    this.prevScreen = prevScreen
    this.currentScreen = currentScreen
    this.clear()
  }
  clear(){
    this.currentOp = '';
    this.prevOp = '';
    this.operation = undefined;
  }
  backspace(){
    this.currentOp = this.currentOp.toString().slice(0, -1)
  }
  appendNum(num){
    if (num === '.' && this.currentOp.includes('.')) return
    this.currentOp = this.currentOp.toString() + num.toString()
  }
  selectOp(operation){
    if(this.currentOp === '') return
    if(this.prevOp !== '') {
      this.calc()
    }
    this.operation = operation
    this.prevOp = this.currentOp
    this.currentOp = ''
  }
  calc(){
    let compute
    const prev = parseFloat(this.prevOp)
    const current = parseFloat(this.currentOp)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        compute = prev + current
        break
      case '-':
        compute = prev - current
        break
      case '*':
        compute = prev * current
        break
      case '/':
        compute = prev / current
        break
      default: 
        return
    }
    this.currentOp = compute
    this.operation = undefined
    this.prevOp = ''
  }
  updateScreen(){
    this.currentScreen.innerText = this.currentOp
    if (this.operation != null) {
      this.prevScreen.innerText = `${this.prevOp} ${this.operation}`
    } else {
      this.prevOp.innerText = ''
    }



  }
}




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

const currentScreen = document.querySelector('[data-current')
const prevScreen = document.querySelector('[data-prev')
const btnNumbers = document.querySelectorAll('[data-number]')
const btnOperator = document.querySelectorAll('[data-operator]')
const btnEquals = document.querySelector('[data-equals]')
const btnClear = document.querySelector('[data-clear]')
const btnBackspace = document.querySelector('[data-backspace]')

const calculator = new Calculator(prevScreen, currentScreen)

btnNumbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.updateScreen()
  })
})

btnOperator.forEach(button => {
  button.addEventListener('click', () => {
    calculator.selectOp(button.innerText)
    calculator.updateScreen()
  })
})

btnEquals.addEventListener('click', button => {
  calculator.calc()
  calculator.updateScreen()
})

btnClear.addEventListener('click', button => {
  calculator.clear()
  calculator.updateScreen()
})

btnBackspace.addEventListener('click', button => {
  calculator.backspace()
  calculator.updateScreen()
})