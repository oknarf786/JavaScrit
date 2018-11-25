//for(var i=0;i<3;i++){
//    console.log("Outer Loop at state: " + i );
//    for(var p=0;p<=3;p++){
//        console.log("Inner Loop at state: " + p);
//        if(p==3){
//            console.log("\n");
//        }
//    }
//}

/*
Write a program to print:
*
**
***
****
*****
*/


var num=5;

for (var i=1;i<=num;i++){
    var str="";
    for (var p=0;p<i;p++){
        str=str+"* "
    }
    console.log(str);
    console.log("\n");

}
















