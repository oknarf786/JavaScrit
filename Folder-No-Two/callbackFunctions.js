
//Callback functions


//Functions are First Class Objects. Functions have the ability to:
//    Be assigned to variables
//    Have other functions in them 
//    Return other functions to be called later 
//    
//A callback function is a function passed into another function as an argument.

 


//let x  = function(){
//    console.log("I am called from inside a function");
//}
//
//let y = function(callback){
//    console.log("do smthg");
//    callback();
//}
//
//y(x);



let calc =function(num1,num2,calcType){
    if(calcType=="add"){
        return num1+num2;
    }else if(calcType=="multiply"){
        return num1*num2;
    }
}

console.log(calc(2,3,"add"));


//if this function calc is a part of some library, user supposed to use this library and pass the number and calculation type and should get the result. In order for all the possible calculation type, this library has to implement of all of it . 

//let add = function(a,b){
//    return a+b;
//}
//
//let multiply = function(a,b){
//    return a*b;
//}
//
//let calc = function(num1,num2,callback){
//    return callback(num1,num2);
//}
//
//console.log(calc(2,3,add));
//console.log(calc(2,3,multiply));
//
////As a user I can create any function and pass into this library 



So far, I wrote the function and passed as argument
I can write function directly as an argument

console.log(calc(2,3,function(a,b){   //anonymous function
    return a-b;
}));

when you have to use somethg only once, you do not want to define it and pass it. you can just
directly write into function argument 

modify
let calc = function(num1,num2,callback){
    if(typeof callback == "function"){
        return callback(num1,num2);
    }
} 


//Task
let students = [
    {name:"Mary",score:90,school:"East"},
    {name:"James",score:100,school:"east"},
    {name:"Steve",score:40,school:"East"},
    {name:"Gabe",score:90,school:"West"},
    {name:"Racheal",score:85,school:"East"},
    {name:"Mike",score:95,school:"West"},
    {name:"Smith",score:75,school:"East"},
];

let processStudents = function(data,callback){
    for(let i=0;i<data.length;i++){
        if(data[i].school.toLowerCase()=="east"){
            if(typeof callback == "function"){
                callback(data[i]);
            }
        }
    }
}

processStudents(students,function(x){
    if(x.score>60){
        console.log(x.name + " passed.");
    }
});


//write a function that computes the total of all the scores together for East and also account so how many students
//are in our in East

let determineTotal = function(){
    let total = 0;
    let count = 0;
    
    processStudents(students,function(x){
        total = total + x.score;
        count++;
    });
    
    console.log("Total score: " + total + " - Total Count: " + count);
}

determineTotal();

























