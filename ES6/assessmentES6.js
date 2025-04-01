// 31st March - 2025 : ES6, eventloop and core JS questions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left
// 7th requires proper elaboration and example

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
   //using object.assign to create a copy and filter
// 

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

 // a. Get heroes who are not evils
   let notEvil = heroes.filter(heroDeed=>heroDeed.isEvil ==false);
   console.log(notEvil);
 // b. Print Unique family names
   let uniqueNames = new Set();
   heroes.forEach(uName=>uniqueNames.add(uName.family));
   console.log(uniqueNames);
 // c. Print Hero Names from given objects, and append sir in each of them before printing
   let hNames = heroes.filter(pHeros=> console.log("Sir "+pHeros.name))
 //d. Do we have any hero in Marvel Family who is not evil
   let marvelNotEvil = heroes.filter(mN => mN.family == "Marvel").filter(ev =>ev.isEvil!=false)
   console.log(marvelNotEvil)
//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
  //using apply keyword we need to implement this one
       let arr= [6,5,1]
      let MultipNums = function (...arr){
       multip = arr.reduce((preVal, currentVal)=>{
                if(preVal ==0)
                   preVal =1;
               return preVal*currentVal;   
               
          }, 0)
         console.log("final result "+multip)
      }
       MultipNums.apply(null,arr);


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
    let personalInfo = {Name:"Hass",
                         LastName:"behu"}

    let newInfo = {Name,LastName, phNumber = 9119119110} = personalInfo;   
    console.log(newInfo); 
    console.log(phNumber)
//4. Give me an example of const data manipulation
   const arr2 = [2,4];
    arr2[0]=3
    console.log(arr2) // arr2 can not be assigned to another object but the value can be modified

//5. What is the difference between for-of and for-in show with examples
//for in mainly used for arrays and elements can be used with out indexing while for of loop works more on objects to access properties of the object

//6. Give me an example of bind and write its usage, comparison with arrow function
   // bind is used to reserve context and scope 

        setTimeout(function () {
            console.log(this); //
        }.bind(this), 3000)// will keep scope on delayed execution 

        //arrow functions are used as simpler function expression 
        let func = (a1,a2)=> a1*a2;

//7. Create an example showing usage of event loop in concurrent execution cycle

//8. create an example showing usage of short hand and default param.
   // default param - 
   let func = function (a=0,b=0){
                 a+b};
   let obj = {sky:blue, flower=red}
      let colors = {sky,flower}
  
//9. Create two objects with some properties and merge them using Object method and ES6 way
   const arr1= (1,3,4)
   const arr2= (2,5,6)
   let obj3 = {...arr1,...arr2} //first way 
   let obj4 = object.assign({},arr1,arr2) //-second way
//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
 let assesMap = new Map();
 assesMap.set('String key', " object") // key to value pair 
 assesMap.set(1," value number")

 let assesSet = new Set();
  assesSet.add("Tom")
  assesSet.add("Tom") // set holds unique values 
  assesSet.add("Halland") 
  assesSet.add("12")
//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
 let assesProm = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve({
            status :"Good Assesment"
        })
    }, 2000); 

    setTimeout(() => {
        reject({
           status :"awful Assesment"
        })
    }, 3000); 

})

 

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

//13. Use the question #11 to build promises using async and await - with multithread
       async function assesAsync() {

          console.log("started Asynch")

          await console.log("waiting")
          console.log("after await")
      }

      assesAsync();
 
//14. Create an example of generator function of your choice
          function *assesmentGen(a1, a2) {
          
           yield a1+a2

           yield a1*a2
       }
         let genResult = assesmentGen(3,2)
         console.log( genResult.next())
         console.log( genResult.next())
         console.log( genResult.next())

//15. Explain your knowledge on function and object protoype what is the purpose of the same - example
    //functions have prototypes for its instance and helps achieve inheritance whereas objects have an prototypes _proto_ for such purposes