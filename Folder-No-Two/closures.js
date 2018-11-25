

//Closures

//Key to understanding closures is understanding how FUNCTIONS WITHIN FUNCTIONS work


//Function Returning a Value

//function calculateRectangleArea(length,width){
//    return length * width;
//}
//
//var roomArea = calculateRectangleArea(10,10);
//console.log(roomArea);  //100

//Function Returning a Function

function youSayGoodBye(){
    console.log("Good Bye");
    
    function andISayHello(){
        console.log("Hello");
    }
    
    return andISayHello;
}

var something = youSayGoodBye();
console.log(something);
something();

//Closures get involved when the returned inner function is not SELF-CONTAINED.


function stopWatch(){
    var startTime = Date.now();
    
    function getDelay(){
        var elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
    
    return getDelay;
}

var timer = stopWatch();

    function getDelay(){
        var elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }

JavaScript runtime keeps track of all of your variables, memory usage, references, and so on. 
When it detects that an inner function relies on variables stored by an outer function, it ensures those variables are available even if the outer function goes away. 


//var addTo=function(passed){
//    
//    var add=function(inner){
//        return passed+inner;
//    }
//    
//    return add;
//}
//
//var x=addTo(3)(2);
//console.log(x);


//
function retirement(retirementAge){
    
    var a =" years left until retirement.";
    
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS=retirement(66);
retirementUS(1983);

retirement(66)(1983);




















