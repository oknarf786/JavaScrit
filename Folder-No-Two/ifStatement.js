/*
var numberOfWaterMelon = 10;

if(numberOfWaterMelon>=20){
    console.log("I have 20 and more watermelon");
}

var firstName = prompt("enter your name");
var status =prompt("enter your status");

if(status == "Married"){
    console.log(firstName + " is married");
    
}
*/


//Ask user to enter temp of the room. Temp between 70 and 80 F is an ideal temp.
/*
var temp;
temp = prompt("Enter the temp");
temp = parseInt(temp);

if(temp>=70 && temp<=80){
    console.log("Ideal Temp");
}
*/


//Task
/*
var age;
age = prompt("How old are you?");
age=parseInt(age);

if(age>=18){
    console.log("Eligible to vote");
}
*/

//Task
/*
var num1=prompt("enter your first num");
var num2=prompt("enter your second num");
var num3=prompt("enter your third num");

num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);

if( (num1>num2) && (num1>num3) ){
    console.log("Num1:" + num1 + " is the greatest");
}

if( (num2>num1) && (num2>num3) ){
    console.log("Num2:" + num2 + " is the greatest");
}

if( (num3>num1) && (num3>num2) ){
    console.log("Num3:" + num3 + " is the greatest");
}

console.log("I dont know");


if(num1>num2){
    console.log("yes");
}
*/

//Task
/*
var num1,num2;

num1 = prompt("Enter num1");
num1 = parseInt(num1);

num2 = prompt("Enter num2");
num2 = parseInt(num2);

if(num1==num2){
    console.log("Numbers are equal");
}

if(num1!=num2){
    console.log("Numbers are not equal");
}
*/

//Task
/*
Revenue can be calculated as the selling price of the product times the quantity sold, i.e. revenue = price × quantity. Write a program that asks the user to enter product price and quantity and then calculate the revenue. If the revenue is more than 5000 a discount is 10% offered. Program should display the discount and net revenue.
*/


var price,quantity,revenue;
var discount = 0;

price = prompt("Enter your price");
price = parseInt(price);

quantity = prompt("Enter your quantity");
quantity = parseInt(quantity);

revenue = price * quantity;


if(revenue>5000){
    discount = revenue * 10/100;
    revenue = revenue - discount;
}


console.log(discount);
console.log(revenue);




















