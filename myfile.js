set - 1 
//1. What would be answer to this
    console.log("Before: ", a);
    var a = 10;
    console.log("After: ", a);
    
    
//2. Global Scope
    // a doesn't exist in global scope

    function hoistExample() {
      var a;
      a = 10;
    }

    hoistExample();
    console.log(a); // ReferenceError: a is not defined
    
//3. Function expression not hoisted

    testFunc();
    var testFunc = function funcHoist() {
      console.log("I am being hoisted.");
    }    

//4. SetTimeouts

    setTimeout(function(){
        console.log("first timeout");
        setTimeout(function(){
            console.log("inner timeout");            
        },0);    
        
        setTimeout(function(){
            console.log("second timeout");
        },100);
        
        setTimeout(function(){
            console.log("third timeout");
        },100);
    },100);
    
//5. Function Hoisting
    console.log(funcs);
    var funcs;
    function funcs(){
        funcs = 3;
    }
    funcs();
    console.log(funcs);

