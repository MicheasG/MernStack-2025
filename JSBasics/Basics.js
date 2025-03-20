//js basics
//1. dynamic typing
var a = 'one'
console.log(a) // prints a string
a = 2 //assigned to a number value
console.log(a)

// type of tels us datatypes
// hoisting functions as hoisted with they will definition where as variables
// are hoisted with a value of undefined

// we use callback to use a function to call another fucntion
function Mul(p1, p2, callback) {
  var sum = p1 + p2
  callback('result is ', sum)
}
Mul(5, 6, resultOf)

function resultOf(res, val) {
  console.log(res + val)
}
// closure

function hide() {
  var name = 'Me'
  var role = 'CEO'
  var rate = 50
  var employee = true

  var getHide = function () {
    return { name, role }
  }
  return getHide
}
var getH = hide()
console.log(getH())
