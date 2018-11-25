

var obj = {
    num:2
}

var addToThis = function(a){
    return this.num+a;
}

var x = addToThis.call(obj,3); //functionName.call(objectName,functionArguments)
console.log(x);


//If we more than 1 argument
var obj = {
    num:2
}

var addToThis = function(a,b,c){
    return this.num+a+b+c;
}

var x = addToThis.call(obj,1,2,3); //functionName.call(objectName,functionArguments)
console.log(x);

//
var obj = {
    num:2
}

var arr = [1,2,3];
var x = addToThis.apply(obj,arr);
console.log(x);

//bind

var obj1 = {
    num:2
}

var addToThis = function(a,b,c){
    return this.num+a+b+c;
}


var arr = [1,2,3];
console.log(addToThis.bind(obj,arr));  

var b = addToThis.bind(obj);
console.log(b(1,2,3));
console.log(b(...arr));











