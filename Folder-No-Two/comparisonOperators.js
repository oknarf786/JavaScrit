//Equality
console.log(1==1);
console.log("1"==1);
console.log(0==false);

//Inequality
console.log(1!=2);
console.log(1!="1");
console.log(1!=false);

//Strict Equality
console.log(3===3);
console.log(3==="3");

//Non-Strict Equality
console.log(3!=="3");
console.log(4!==4);

//Greater than
console.log(4>3);
console.log(3>4);

//Greater than or equal
console.log(4>=3);
console.log(4>=4);
console.log(4>=5);

//Less than 
console.log(3<4);

//Less than or equal
console.log(3<=4);
console.log(4<=4);


var num1,num2;
num1=prompt("enter your first num");
num1=parseInt(num1);

num2=prompt("enter your second num");
num2=parseInt(num2);

var bool = num1>num2; 

console.log("First Number " + num1 + " is greater than second number " + num2 + " - " + bool );













