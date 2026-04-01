const clearButton = document.querySelector('.clear_button')
const clearEntryButton = document.querySelector('.clear_entry_button')
let operator = ''
let firstNumber = ''
let secondNumber = ''
let isSecondNumber = false

const display = document.querySelector('.display .text')
clearButton.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  display.textContent = '0'
  isSecondNumber = false
})

clearEntryButton.addEventListener('click', () => {
  if (!isSecondNumber) {
    firstNumber = ''
    display.textContent = '0'
  } else {
    secondNumber = ''
    display.textContent = '0'
  }
})

const numberButtons = document.querySelectorAll('.number_button')
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!isSecondNumber) {
      if (firstNumber === '0') {
        firstNumber = ''
      }
      firstNumber += button.textContent
      display.textContent = firstNumber
    } else {
      if (secondNumber === '0') {
        secondNumber = ''
      }
      secondNumber += button.textContent
      display.textContent = secondNumber
    }
  })
})

const symbolButtons = document.querySelectorAll('.symbol_button')
symbolButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operator = button.textContent
    isSecondNumber = true
  })
})

const plusMinusButton = document.querySelector('.plus-minus-button')
plusMinusButton.addEventListener('click', () => {
  if (!isSecondNumber) {
    if (firstNumber.startsWith('-')) {
      firstNumber = firstNumber.slice(1)
    } else {
      firstNumber = '-' + firstNumber
    }
    display.textContent = firstNumber
  } else {
    if (secondNumber.startsWith('-')) {
      secondNumber = secondNumber.slice(1)
    } else {
      secondNumber = '-' + secondNumber
    }
    display.textContent = secondNumber
  }
})

const pointButton = document.querySelector('.point_button')
pointButton.addEventListener('click', () => {
  if (!isSecondNumber) {
    if (!firstNumber.includes('.')) {
      if (firstNumber == '') {
        firstNumber = '0'
      }
      firstNumber += '.'
      display.textContent = firstNumber
    }
  } else {
    if (!secondNumber.includes('.')) {
      if (secondNumber == '') {
        secondNumber = '0'
      }
      secondNumber += '.'
      display.textContent = secondNumber
    }
  }
})

const percentualButton = document.querySelector('.percentual_button')
percentualButton.addEventListener('click', () => {
  let result = ''
  if (!isSecondNumber) {
    result = (Number(firstNumber) / 100).toString()
    firstNumber = result
  } else {
    result = ((Number(firstNumber) * Number(secondNumber)) / 100).toString()
    secondNumber = result
  }
  display.textContent = result
})

const equalsButton = document.querySelector('.equals_button')
equalsButton.addEventListener('click', () => {
  if (firstNumber == '' || secondNumber == '') return

  let num1 = Number(firstNumber)
  let num2 = Number(secondNumber)
  let result = 0

  if (operator == '+') {
    result = num1 + num2
  } else if (operator == '-') {
    result = num1 - num2
  } else if (operator == '×') {
    result = num1 * num2
  } else if (operator == '÷') {
    if (secondNumber == 0) {
      display.textContent = 'ERROR'
      return
    }
    result = num1 / num2
  }

  display.textContent = result

  firstNumber = result.toString()
  secondNumber = ''
  operator = ''
  isSecondNumber = false
})
