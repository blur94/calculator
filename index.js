// // let btn = document.getElementById('submit')
// // btn.onclick = function(){

// // }


// // function bind(){
// //   let user = {}
// //   this.user.name = "John"
// // }
// // $('#a').click(function(){

// //   this
// // })
// // btn.onclick = bind

// let username = "Anestin"
// let user = {
//   firstname:"John",
//   lastname:"Maxwell",
//   age:55,
//   fullname:function(){
//     return this.firstname +" "+this.lastname
//   },
//   details:()=>{
//     return this.alert("okay")
//   }
// }

// console.log(addition(5,6))

// let sum = (a,b) => {
//   return a+b
// }

// let addition = function(a,b){
//   return a + b
// }

// function add(a,b){
//   return a+b
// }

// // function detail(a,b){

// // }
// // let detail = function(a,b){

// // }
// // //function = =>
// // let detail = (a,b) =>{

// // }
// // console.log(window)
// // console.log(user.details())

let num1 = ""
let num2 = ""
let operator = ""

//This sets all our variable
let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btnAdd = document.getElementById('btnAdd')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')
let btnSub = document.getElementById('btnSub')
let btnoutput = document.getElementById('btnoutput')
let txtoutput = document.getElementById('txtouput')

function sum(a, b) {
  let _a = parseInt(a)
  let _b = parseInt(b)
  return _a + _b
}

function multiply(a, b) {
  let _a = parseInt(a)
  let _b = parseInt(b)
  return _a * _b
}

function substract(a, b) {
  let _a = parseInt(a)
  let _b = parseInt(b)
  return _a - _b
}

function divide(a, b) {
  let _a = parseInt(a)
  let _b = parseInt(b)
  return _a / _b
}

function selectNumber(value) {
  if (!num1) {
    num1 = value
  } else {
    num2 = value
  }
}

// This are the event methods
function bindBtnEvent(e) {
  let value = e.target.innerHTML
  selectNumber(value)
  e.target.classList.add("selected")
}

// This is for setting the clicked operator
function bindOperatorEvent(e) {
  operator = e.target.innerHTML
}

// This is for displaying the result to the output textor
function ouputEvent() {
  let result = ""
  if (num1 && num2 && operator) {
    switch (operator) {
      case "+":
        result = sum(num1, num2)
        break
      case "*":
        result = multiply(num1, num2)
        break
    }
  }
  txtoutput.value = result;
}

// This binds all the numbers
btn1.onclick = bindBtnEvent
btn2.onclick = bindBtnEvent
let numList = document.querySelectorAll("div.nums > button");
for (let i = 0; i < numList.length; i++) {
  numList[i].style.backgroundColor = "magenta";
  numList[i] 
}

// Binding Operator Event
btnAdd.onclick = bindOperatorEvent
btnMul.onclick = bindOperatorEvent

// This display the result
btnoutput.onclick = ouputEvent

