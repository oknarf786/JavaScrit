var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup Netscape";

//1
//var array = str.split(" ");
//for(var i=0;i<array.length;i++){
//   if(array[i]=="Netscape"){
//        console.log("found it");
//        break;
//   }else if(i==array.length-1){
//       console.log("not found");
//       
//   }
//}
//
////2
//var array = str.split(" ");
//var counter=0;
//for(var i=0;i<array.length;i++){
//   if(array[i]=="Netscape"){
//        counter++;
//   }
//}

/*
1
Write a program that converts second and fifth character of the string to uppercase.

   var str = “Javascript” ;

   Expected output of the program:  JaVasCript
*/


var str = "Javascript";

var a="";
for(var i=0;i<str.length;i++){
    if(i==2 || i==5){
        var x=str.charAt(i).toUpperCase();
    }else{
        x =str.charAt(i);
    }
    
    a=a+x;
    
}

console.log(a);

/*
Task
Write a program to display |342| from given string.
   var str = "    342     ";
*/
var str = "    342     ";
console.log("|" + str.trim() + "|");














