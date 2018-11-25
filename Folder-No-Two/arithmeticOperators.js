//Operator: x+y

//Number + Number = Addition 
console.log(2  +  2);
console.log(20 + 200);

//Boolean + Number = Addition 
console.log(false + 1);
console.log(true + 1);

//Number + String = Concatenation
console.log(5 + "hello");

//String + Boolean = Concatenation
console.log("hello" + false);

//String + String = Concatenation
console.log("hello" + "world");


//Operator : x-y
console.log(5-3);
console.log(10-20);
console.log(-10-10);

//Operator : x*y
console.log(10*10);
console.log(20*-10);

//Operator:x/y
console.log(10/10);
console.log(20/10);
console.log(10*10);
console.log(20/0);
console.log(0/20);

//Operartor : x%y
console.log(5%3);
console.log(6%2);

/*
//Operator : x++ or ++x
var x = 3;
y=x++;
//y=++x;
console.log(y);
console.log(x);
*/


/*
//Operator : x-- or --x
var x=3;
//y=x--;
y=--x;
console.log(y);
console.log(x);
*/

/*
var num1,num2,sum;

num1=prompt("enter your num1");
num2=prompt("enter your num2");


num1 = parseInt(num1);
num2 = parseInt(num2);

sum=num1+num2;

console.log(num1 + " + " + num2 + " = " + sum);

console.log(sum);
*/

/*
var fah,cel;
fah = prompt("enter your F degree");
fah = parseInt(fah);

cel = (fah-32)*5/9;

console.log(fah + "F is equal to " + cel + "C");
*/

/*
var mile, km;
mile=prompt("Enter your miles and I will convert it for you!");
mile=parseInt(mile);
km=1.609344*mile;
console.log('Your ' + mile + ' miles equals to ' + km + 'km.');


console.log(3+5*4-6);
console.log(3+(5*4)-6);
*/


/*
var a= 50;
var sum;

sum= --a + a++ + a-- + a++;
console.log(sum);
console.log(a);
*/

var a=1;
var sum;

sum= -a-- + a++ / -a-- * --a;
console.log(sum);
console.log(a);

//a  :   1 -> 0 -> 1 -> 0 -> -1

//sum : -1 + 0 / (-1 * -1)  
//       -1 + (0 / 1)
//       -1 + 0 = -1




















































