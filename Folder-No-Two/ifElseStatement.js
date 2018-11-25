/*
var firstName = "Mike";
var status = "Single";

if(status == "Married"){
    console.log("Mike is Married");
}else{
    console.log("Mike is Single");
}
*/

var numberOfWatermelon = 20;

if(numberOfWatermelon>20){
    console.log("I have more than 20 watermelon");
}else{
    console.log("I do not have more than 20 watermelon");
}

//Task
/*
We are checking if we can have free shipping from amazon or not when we order

you have membership - > yes 
order amount > $40 - > yes 


var orderAmount,isAmazonMember;
orderAmount = 40;
isAmazonMember = false;

if( (isAmazonMember == true) || (orderAmount>40) ){
    console.log("Free Shipping");
}else{
    console.log("do you want to sign up for membership?");
}


var num1,num2;
num1=prompt("Enter your num1");
num2=prompt("Enter your num2");

num1=parseInt(num1);
num2=parseInt(num2);

if(num1>num2){
    console.log(num1 + " is greater than "+ num2);
}else{
    console.log(num1 + " is not greater than "+ num2)
}
*/
/*
Write a program to implement following logic using if-else statement
	1. if hour is less than 12 noon, greet with Good Morning
	2. if hour is greater than or equal 12 noon but less than 3 pm, greet with Good Afternoon
	3. if hour is greater than or equal to 3 pm, greet with Good Evening
*/
var hour = 23;

if( hour < 12 ){
    console.log("Good Morning");
}else{
    if( hour < 15){
        console.log("Good Afternoon");
    }else{
        console.log("Good Evening");
    }
}
















