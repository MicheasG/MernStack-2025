var student1 = { Name: 'Mike', Id: '89098098', major: 'CS' }
var strudent2 = { Name: 'Dan', Id: '23523526', major: 'Business' }

var printStudent = function (class1, class2, class3) {
  return console.log(
    `
     ${this.Name}
     ${this.Id} 
     ${this.major}
     ${class1} 
     ${class2} 
     ${class3}  `
  )
}
var classList1 = ['Ds', 'LinearA', 'Database']
var classList2 = ['Java', 'Assembly', 'Spring']

//call
printStudent.call(student1, 'DS,Mern', 'AWS')
//apply
printStudent.apply(student1, classList1)
//apply
printStudent.call(strudent2, classList2)
