/*

Program to display days
1-Monday
2-Tuesday
3-Wednesday
4-Thurday
5-Friday
6-Saturday
7-Sunday



var day = prompt("Enter you number");
day=parseInt(day);

if(day == 1){
    console.log("mo");
}else if( day == 2){
    console.log("tu");
}else if ( day == 3){
    console.log("wed");
}else if(day==4){
    console.log("th");
}else if(day==5){
    console.log("fr");
}else if(day==6){
    console.log("sat");
}else if(day==7){
    console.log("su");
}else{
    console.log("not a valid day");
}

*/

var num1 = prompt("enter num1");
num1 = parseInt(num1);

var num2 = prompt("enter num2");
num2 = parseInt(num2);

var num3 = prompt("enter num3");
num3 = parseInt(num3);

if( (num1>num2) && (num1>num3) ){
    console.log("num1 is greatest one");
}else if( (num2>num1) && (num2>num3) ){
    console.log("num2 is greatest one");
}else if( (num3>num1) && (num3>num2) ){
    console.log("num3 is greatest one");
}else{
    console.log("numbers are equal");
}












