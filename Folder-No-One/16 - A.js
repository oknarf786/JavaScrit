/*
Task-1 LEVEL:SWEET

Write a function that accepts an array and prints true if the sum of all 2's in the array is exactly 8

Sample Output:
sum28([2, 3, 2, 2, 4, 2]); - >true
sum28([2, 3, 2, 2, 4, 2, 2]); - >false
sum28([1, 2, 3, 4]); - >false


function sum28(array){
    var sum=0;
    for(var i=0;i<array.length;i++){
        if(array[i]==2){
            sum=sum+2;
        }
    }
    if(sum==8){
        console.log("true");
    }else{
        console.log("false");
    }
}

sum28([2, 3, 2, 2, 4, 2]);
sum28([2, 3, 2, 2, 4, 2, 2]);
sum28([1, 2, 3, 4]);

*/

/*
Task-2 LEVEL:SWEET

Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's

Sample Output:
more14([1, 4, 1]); ->true
more14([1, 4, 1, 4]); ->false
more14([1, 1]); ->true


function more14(array){
    var count1=0;
    var count4=0;
    for(var i=0;i<array.length;i++){
        if(array[i]==1){
            count1++;
        }else if(array[i]==4){
            count4++;
        }
    }
    if(count1>count4){
        console.log("true");
    }else{
        console.log("false");
    }
}

more14([1, 4, 1]);
more14([1, 4, 1, 4]);
more14([1, 1]);

*/


/*
Task-3 LEVEL:SWEET

Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.

Sample Output:
fizzArray(4) → [0, 1, 2, 3]
fizzArray(1) → [0]
fizzArray(10) →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


function fizzArray(number){
    var myArray=Array(number);
    for(var i=0;i<myArray.length;i++){
        myArray[i]=i;
    }
    console.log(myArray);
}

fizzArray(4);
fizzArray(1);
fizzArray(10);

*/


/*
Task-4 LEVEL:SPICY

A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.

Sample Output:
isEveryWhere([1, 2, 1, 3], 1); - >true
isEveryWhere([1, 2, 1, 3], 2); - >false
isEveryWhere([1, 2, 1, 3, 4], 1); - >true
isEveryWhere([1, 2, 4, 3, 1], 1); - >false

function isEveryWhere(array,number){
    for(var i=0;i<array.length;i++){
        if(array[i]==number && (array[i+1]==number || array[i+2]==number)){
            console.log("true");
            break;
        }else if(i==array.length-1){
            console.log("false");
            break;
        }
    }
}

isEveryWhere([1, 2, 1, 3], 1);
isEveryWhere([1, 2, 1, 3], 2);
isEveryWhere([1, 2, 1, 3, 4], 1);
isEveryWhere([1, 2, 4, 3, 1], 1);

*/

/*
Task-5 LEVEL:LIGHT SPICY

Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.

Sample Output:
matchUp([1, 2, 3], [2, 3, 10]); ->2
matchUp([1, 2, 3], [2, 3, 5]); ->3
matchUp([1, 2, 3], [2, 3, 3]); ->2

function matchUp(array1,array2){
    var count=0;
    for(var i=0;i<array1.length;i++){
        if(array2[i]-array1[i]<=2 && array2[i]-array1[i]!=0){
            count++;
        }
    }
    console.log(count);
}

matchUp([1, 2, 3], [2, 3, 10]);
matchUp([1, 2, 3], [2, 3, 5]);
matchUp([1, 2, 3], [2, 3, 3]);

*/

/*
Task-6 LEVEL:SPICY

Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.

Sample Output:
modThree([2, 1, 3, 5]); ->true
modThree([2, 1, 2, 5]); ->false
modThree([2, 4, 2, 5]); ->true


function modThree(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2==array[i+1]%2 && array[i]%2==array[i+2]%2){
            console.log("true");
            break;
        }else if(i==array.length-1){
            console.log("false");
            break;
        }
    }
    
}

modThree([2, 1, 3, 5]);
modThree([2, 1, 2, 5]);
modThree([2, 4, 2, 5]);

*/

/*
Task-7 LEVEL:SPICY

Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.

Sample Output:
tripleUp([1, 4, 5, 6, 2]); ->true
tripleUp([1, 2, 3]); ->true
tripleUp([1, 2, 4]); ->false
tripleUp([1, 2, 4, 5, 8, 9]); ->false

function tripleUp(array){
    for(var i=0;i<array.length;i++){
        if(array[i]==array[i+1]-1 && array[i]==array[i+2]-2){
            console.log("true");
            break;
        }else if(i==array.length-1){
            console.log("false");
            break;
        }
    }
}

tripleUp([1, 4, 5, 6, 2]);
tripleUp([1, 2, 3]);
tripleUp([1, 2, 4]);
tripleUp([1, 2, 4, 5, 8, 9]);
*/

/*
Task-8 LEVEL:SWEET

Write a function that accepts start and end numbers. 
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9].

Sample Output:
fizzArray3(5, 10) → [5, 6, 7, 8, 9]
fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
fizzArray3(1, 3) → [1, 2]

function fizzArray(start,end){
    var myArray=[];
    for(var i=start;i<end;i++){
        myArray.push(i);
    }
    console.log(myArray);
}

fizzArray(5, 10);
fizzArray(11, 18);
fizzArray(1, 3);
*/


/*
Task-9 LEVEL:SPICY

Write a function that accepts and array. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10.

Sample Output:
tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]


function tenRun(array){
    var x=0;
    for(var i=0;i<array.length;i++){
        if(array[i]%10==0){
           for(var j=i+1; j<array.length && (array[j])%10! =0;j++){
               array[j]=array[i];
           }
        }
        
    }
    console.log(array);
}

tenRun([2, 10, 3, 4, 20, 5]);
tenRun([10, 1, 20, 2]);
tenRun([10, 1, 9, 20]);

*/

/*
Task-10  LEVEL:SPICY

It is said that an element in array is alone if there are values before and after it, and those values are different from it. Write a function that accepts an array and a number and prints the given array where every instance of the given value which is alone is replaced by whichever value to its left or rigth is larger.

Sample Output:
notAlone([1, 2, 3], 2) → [1, 3, 3]
notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
notAlone([3, 4], 3) → [3, 4]

function notAlone(array,number){
    for(var i=1;i<array.length-1;i++){
        if(array[i]==number){
            if(array[i-1]!=number && array[i+1]!=number){
                if(array[i-1]>array[i+1]){
                    array[i]=array[i-1];
                }else{
                    array[i]=array[i+1];
                }
            }
        }
    }
    console.log(array);
}

notAlone([1, 2, 3], 2);
notAlone([1, 2, 3, 2, 5, 2], 2);
notAlone([3, 4], 3);

*/