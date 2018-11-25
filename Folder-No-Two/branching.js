//var i=0;
//
//while(i<6){
//    
//    if(i==3){
//        continue;
//    }
//    i++;
//    console.log(i);
//    
//}



// 1 2 3

//var a="";
//for(var i=1;i<=10;i++){
//    if(i%2==0){
//        continue;
//    }
//    a=a+i+" ";
//}
//
//console.log(a);

/*

Write a program that calculates the sum of numbers entered by the user until user enters a negative number

*/


//var number;
//var sum=0;
//
//while(true){
//      
//      number=parseInt(prompt("Enter your number"));
//      if(number<0){
//          break;
//      }
//      sum=sum+number;
//      
//}
//console.log(sum);

//Write a program that calculates the sum of maximum of 5 positive numbers entered by the user. If the user enters negative number or zero, it is skipped from calculation

//var sum=0;
//for(var i=1;i<6;i++){
//    var number=parseInt(prompt("Enter your number"));
//    if(number<=0){
//        continue;
//    }
//    sum=sum+number;
//}
//
//console.log(sum);

//var start=1;
//var sum=0;
//do{
//    if(start%2==0){
//        continue;
//    }
//    sum=sum+start;
//}while(++start<=10)
//
//console.log(sum);


// start  sum  
//  1      0
//  1       1
//2          1
// 3        4
// 4        4
// 5        9
//  6      9
//7        16
// 8        16
//9         25

loop1:
for(var i=0;i<3;i++){
    loop2:
    for(var j=0;j<3;j++){
        if(i==1 && j==1){
            continue loop1;
        }
        console.log("i= " + i + " , j= " + j);
    }
    
}























