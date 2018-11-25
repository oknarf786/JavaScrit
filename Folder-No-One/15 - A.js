/*
Task-1 LEVEL:LIGHT SPICY
Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array

Sample Output:
fix23([1,2,3]); - > [1,2,0]
fix23([2,0,5]); - > [2,0,5]
fix23([1,2,1]); - > [1,2,1]
fix23([11,2,13,3,2]); - >[11,2,13,3,2]


function fix23(array){
    for(var i=0;i<array.length;i++){
        if(array[i]==2 && array[i+1]==3){
            array[i+1]=0;
        }
    }
    console.log(array);
}

fix23([1,2,3]);
fix23([2,0,5]);
fix23([1,2,1]);
fix23([11,2,13,3,2]);

*/
/*

Task-2 LEVEL:SWEET
Write a function that accepts two arrays and prints how many of the arrays have 1 as their first Element

Sample Output:
start1([1,2,3],[1,3]); - >2
start1([7,2,3],[1]); - >1
start1([1,2],[]); - >1
start1([3,2,4],[4,3,4]); - >0

function start1(array1,array2){
    var counter=0;
    if(array1[0]==1){
       counter++;
    }
    if(array2[0]==1){
        counter++;
    }
    
    console.log(counter);
}

start1([1,2,3],[1,3]);
start1([7,2,3],[1]);
start1([1,2],[]);
start1([3,2,4],[4,3,4]);

*/
/*
Task-3 LEVEL:SWEET
Write a function that accepts 2 arrays and consider the sum of the values in each array. Print the array which has the largest sum. In event of a tie, print "equal"

Sample Output:
biggerTwo([1, 2], [3, 4]); - >[3,4]
biggerTwo([5, 6], [3, 8]); - >equal
biggerTwo([1, 1], [1, 0]); - >[1,1]


function biggerTwo(array1,array2){
    var sum1=0;
    var sum2=0;
    for(var i=0;i<array1.length;i++){
        sum1=sum1+array1[i];
    }
    
    for(var i=0;i<array2.length;i++){
        sum2=sum2+array2[i];
    }
    
    if(sum1>sum2){
        console.log(array1);
    }else if(sum2>sum1){
        console.log(array2);
    }else{
        console.log("eqaul");
    }
}

biggerTwo([1, 2], [3, 4]); 
biggerTwo([5, 6], [3, 8]); 
biggerTwo([1, 1], [1, 0]);

*/
/*
Task-4 LEVEL:SWEET
Write a function that accepts 2 arrays and prints a new array containing all their elements

Sample Output:
plusTwo([1, 2], [3, 4]); - >[1,2,3,4]
plusTwo([4, 4], [2, 2]); - >[4,4,2,2]
plusTwo([9, 2], [3, 4]); - >[9,2,3,4]


function plusTwo(array1,array2){
    var indices=[];
    for(var i=0;i<array1.length;i++){
        indices.push(array1[i]);
    }
    for(var i=0;i<array2.length;i++){
        indices.push(array2[i]);
    }
    console.log(indices);
}

plusTwo([1, 2], [3, 4]); 
plusTwo([4, 4], [2, 2]); 
plusTwo([9, 2], [3, 4]); 

*/
/*
Task-5 LEVEL:SWEET
Write a function that accepts an array and swap the first and last element in the array. Print the modified array

Sample Output:
swapEnds([1, 2, 3, 4]) -> [4,2,3,1];
swapEnds([1, 2, 3]) -> [3,2,1]
swapEnds([8, 6, 7, 9, 5]) -> [5,6,7,9,8]


function swapEnds(array){
    var temp=array[0];
    array[0]=array[array.length-1];
    array[array.length-1]=temp;
    console.log(array);
}

swapEnds([1, 2, 3, 4]); 
swapEnds([1, 2, 3]); 
swapEnds([8, 6, 7, 9, 5]);

*/
/*
Task-6 LEVEL:SWEET

Write a function that accepts an array and prints the number of even numbers in the array.

Sample Output:
Sample Output:
countEvens([2, 1, 2, 3, 4]) ->3
countEvens([2, 2, 0]) ->3
countEvens([1, 3, 5]) ->0

function countEvens(array){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            count++;
        }
    }
    console.log(count);
}

countEvens([2, 1, 2, 3, 4]) 
countEvens([2, 2, 0]) 
countEvens([1, 3, 5])

*/
/*
Task-7 LEVEL:SWEET

Write a function that accepts an array and print the difference between the largest and smallest values in the array.

Sample Output:
bigDiff([10, 3, 5, 6]); → 7
bigDiff([7, 2, 10, 9]); → 8
bigDiff([2, 10, 7, 2]); → 8

function bigDiff(array){
    var max=array[0];
    var min=array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }else if(array[i]<min){
            min=array[i];
        }
    }
    console.log(max-min);
}

bigDiff([10, 3, 5, 6]); 
bigDiff([7, 2, 10, 9]); 
bigDiff([2, 10, 7, 2]);

*/
/*

Task-8 LEVEL:LIGHT SPICY

Write a function that accepts an array and prints the sum of the numbers in the array. Except the number 13 is very unlucky,so it does not count and numbers that come immediately after a 13 also do not count

Sample Output:
sum13([1, 2, 2, 1]); ->6
sum13([1, 1]); ->2
sum13([1, 2, 2, 1, 13]); ->6
sum13([1, 2, 2, 1, 13,3]); ->6

function sum13(array){
    var sum=0;
    for(var i=0;i<array.length;i++){
         if(array[i]==13){
             break;
         }else{
             sum=sum+array[i];
         }
    }
    console.log(sum);
}

sum13([1, 2, 2, 1]);
sum13([1, 1]);
sum13([1, 2, 2, 1, 13]);
sum13([1, 2, 2, 1, 13,3]);

*/
/*

Task-9 LEVEL:SPICY

Write a function that accepts an array and prints the total of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7).

Sample Output:
sum67([1, 2, 2]); ->5
sum67([1, 2, 2, 6, 99, 99, 7]); ->5
sum67([1, 1, 6, 7, 2]); ->4
sum67([1, 1, 6, 2]); ->2
sum67([1, 2, 2, 6, 99, 99, 7,3,4]); ->12


function sum67(array){
    var sum=0;
    var boolCheckSix=false;
    for(var i=0;i<array.length;i++){
        if(boolCheckSix){
            if(array[i]==7){
                boolCheckSix=false;
            }
        }else if(array[i]==6){
            boolCheckSix=true;
        }else{
            sum=sum+array[i];
        }
    }
    console.log(sum);
}

sum67([1, 2, 2]);
sum67([1, 2, 2, 6, 99, 99, 7]);
sum67([1, 1, 6, 7, 2]);
sum67([1, 1, 6, 2]);
sum67([1, 2, 2, 6, 99, 99, 7,3,4]);

*/
/*
Task-10 LEVEL:LIGHT SPICY

Write a function that accepts an array and prints true if the array contains a 2 next to a 2 somewhere.

Sample Output:
has22([1, 2, 2]); ->true
has22([1, 2, 1, 2]); ->false
has22([2, 1, 2]); ->false
has22([2,2, 1, 2]); ->true


function has22(array){
    for(var i=0;i<array.length;i++){
        if(array[i]==2 && array[i+1]==2){
            console.log("true");
            break;
        }else if(i==array.length-1){
            console.log("false");
            break;
        }
    }
}

has22([1, 2, 2]);
has22([1, 2, 1, 2]);
has22([2, 1, 2]);
has22([2,2, 1, 2]);

*/