//12
/*
do {
    var num=parseInt(prompt("Enter a positive number"));
} while (num<0);

for (var i=1;i<=10;i++) {
    console.log(i+" X "+num+" = "+(num*i));
}

*/
/*
var num=parseInt(prompt("give me a number"));

for (var i=1; i<=1; i++){
    for(var p=1; p<=10; p++){
        console.log(num +"*"+p+"="+p*num);
    }
}

*/
/*
var i = 0;
while(i<15) {
console.log(i);
i++;
}

*/
/*
for(var i=1;i<=100;i++) {
    if(i%5==0 || i%7==0) {
       console.log(i);
    }
}
*/
/*
var number, counter;
counter=0;


for(var i=0; i<5; i++) { //2nd line of code to be written
     number = parseInt(prompt("Enter a number")); //1st line of code to be written
      if(number>=10 && number<=20) {    //3rd line of code to be written
           counter++;
         
      }
}

console.log("You entered " + counter + " numbers between 10 and 20");//4th line of code to be written
*/
/*
var counter=0;

for(var i=1;i<=50;i++)
{
    if (i%3==0 && i%5==0)
    {
        counter++;
    }
}
console.log(counter);



*/

var number,total;
total = 0;

do {
    number= parseInt(prompt("Enter a number"));
    
    if(number%2==0){
        total+=number;
    }else{
        total-=number;
    }
}
while(number!=0)
    
console.log(total);


        




