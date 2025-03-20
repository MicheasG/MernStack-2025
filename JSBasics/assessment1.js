//October - MERNStack Session - Assessment Number 1 - 14th March 2025

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var tp = 'Robert '
console.log(tp)
tp = 0.0266
console.log(tp)
tp = false
console.log(tp)
tp = { myname: 'Test Me' }
console.log(tp)
tp = 25166665
console.log(tp)
tp = undefined
console.log(tp)
tp = null
console.log(tp)
tp = {}
console.log(tp)
tp = -32767
console.log(tp)

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserInfo(firstname, lastname, age) {
  console.log(firstname, lastname, age)
}
showUserInfo('Dan', 'Dinklage', 47)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
function doaddition(num1, num2, num3) {
  return num1 + num2 + num3
}
doaddition(12, 13, 14)
//Q5. Give me an example of your choice for each of the below concepts
// a. closure,
function hide() {
  // hiding data members
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

// b. hoisting,
Mul(5, 6) // function definition hoited
function Mul(n1, n2) {
  return n1 * n2
}

// c. constructor function
function Map(distance, weather) {
  this.distance = distance // class properties
  this.weather = weather
  this.weather = function () {
    return this.weather
  }

  this.distance = function () {
    return this.distance
  }
}
//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
/*Call -  is used to pass a scope in the first parameter and the rest as a function parameters 

   Apply - is used to pass a scope in the first parameter and the second as an array as a parameter
   */

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var student = { name: 'bb', sId: '3424234' }

function returnData() {
  setTimeout(
    function () {
      console.log(this.name, this.sId)
    }.bind(this),
    3000
  )
}
//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
function showUserInfo(firstname, lastname, age) {
  console.log(firstname, lastname, age)
}
showUserInfo.prototype.firstname = 'jan' // function prototype enables inheritance

//Q9. How do we merge different objects properties using Object class function
// using Object.assign
//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
// i am not super clear on this one
