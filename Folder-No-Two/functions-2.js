//Task
//Create a function that accepts 3 parameters:
//   1- number
//   2- number
//   3- operator(-,+,*,/) 
//
//Sample output:
//calculator(6,3, “+”)   -- > 9
//calculator(6,3, “-”)   -- >  3
//calculator(6,3, “*”)   -- > 18
//calculator(6,3, “/”)   -- > 2



//Task
//Write a function that accepts birthyear and displays the age in the console.
//
//Sample output:
//calculateAge(2000) -- > 18




//var birthYear=1980;
//
//function calculateAge(currentYear,birthYear){
//    var age = currentYear - birthYear;
//    console.log(age);
//}
//
//calculateAge(2019,1980);
//calculateAge(2050,2000);

//Task
//Write a function that accepts 3 numbers and displays the greatest one in the console. 
//
//Sample Output:
//calculateGreatest(5,2,3)  -- >5



//function findGreatest(num1,num2,num3){
//    if( num1>num2 && num1>num3){
//        console.log(num1 + " greatest");
//    }else if( num2>num1 && num2>num3){
//        console.log(num2 + " greatest");
//    }else if( num3>num1 && num3>num2){
//        console.log(num3 + " greatest");
//    }
//}
//
//findGreatest(5,10,30);
//findGreatest(500,10,30);
//findGreatest(-5,10,30);

//function fahrenheitToCelcius(fahrenheit) {
//    var cel = (fahrenheit-32)*5/9;
//    console.log(cel);
//}
//
//fahrenheitToCelcius(50);
//fahrenheitToCelcius(150);



//function calculateGrade(grade1,grade2,grade3){
//    var average=(grade1+grade2+grade3)/3;
//    if(average>=90 && average<=100){
//        console.log("You got A");
//    }else if(average>=80 && average<90){
//        console.log("You got B");
//    }else if(average>=70 && average<80){
//        console.log("You got C");
//    }else if(average>=60 && average<70){
//        console.log("You got D");
//    }else if(average>0 && average<60){
//        console.log("You got F");
//    }
//}
//calculateGrade(100,82,75);
/*
Write a function that accepts 2 parameters which are array and element. If element is included in the array, print it “found it” . If not included in the array, add the element into array and print the final array in the console.

Sample output
findElement(myArray,element);
*/

var yourArray = [2,5,6,"apple"];
//var element = "orange";


function findElement(myArray,element){
for(var i = 0;i<myArray.length;i++){
    if(myArray[i]==element){
        console.log("Found it");
        break;
    }else if(i==myArray.length-1){
        myArray.push(element);
        break;
        
    }
}
console.log(myArray);

}

findElement(yourArray,300);















