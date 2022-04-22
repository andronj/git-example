let numberOne = document.querySelector('.number-one')
let numberTwo = document.querySelector('.number-two')

let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let divideButton = document.querySelector('.divide')
let multiplyButton = document.querySelector('.multiply')
let clearButton = document.querySelector('.clear')
let myheader = document.querySelector('.header')




plusButton.addEventListener('click', function(){
    
    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    let sum = numOne + numTwog
    myheader.innerText = sum


})


minusButton.addEventListener('click', function(){
    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    let minus = numOne - numTwo
    myheader.innerText = minus
})

divideButton.addEventListener('click', function(){
    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    let divide = numOne / numTwo
    myheader.innerText = divide
})

multiplyButton.addEventListener('click', function(){
    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    let multiply = numOne * numTwo
    myheader.innerText = multiply
})


clearButton.addEventListener('clear', function(){
    numberOne.value = ''
    numberTwo.value = ''
    myheader.innerText = ''
})