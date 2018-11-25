/*1
Task
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.


sameStarChar("xy*yzz") → true
sameStarChar("xy*zzz") → false
sameStarChar("*xa*az") → true


function sameStarChar(str){
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)=="*"){
            if(str.charAt(i-1)==str.charAt(i+1)){
                console.log("true");
                break;
            }
        }else if(i==str.length-1){
            console.log("false");
            break;
        }
    }
   
} 

sameStarChar("xy*yzz");
sameStarChar("xy*zzz");
sameStarChar("*xa*az");
*/
/*2
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.


countTriple("abcXXXabc") → 1
countTriple("xxxabyyyycd") → 3
countTriple("a") → 0
*/

//function countTriple(str){
//    var counter=0;
//    for(var i=0;i<str.length;i++){
//        if(str.substring(i,i+1)==str.substring(i+1,i+2) && str.substring(i,i+1)==str.substring(i+2,i+3) ){
//            counter++;
//        }
//    }
//    console.log(counter);
//}
//
//countTriple("abcXXXabc");
//countTriple("xxxabyyyycd");
//countTriple("a");

/*

/*3
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.


gHappy("xxggxx") → true
gHappy("xxgxx") → false
gHappy("xxggyygxx") → false
*/

//function gHappy(str){
//    
//    for(var i=1;i<str.length;i++){
//        if(str.substring(i,i+1)=="g"){
//            var bool=false;
//            if(str.substring(i+1,i+2)=="g" || str.substring(i-1,i)=="g"){
//                bool=true;
//           }
//        }
//    }
//    
//    if(bool){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//
//
//gHappy("xxggxx");
//gHappy("xxgxx");
//gHappy("xxggyygxx");

/*4
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).


equalIsNot("This is not") → false
equalIsNot("This is notnot") → true
equalIsNot("noisxxnotyynotxisi") → true
*/

//function equalIsNot(str){
//    var counter1=0;
//    var counter2=0;
//    for(var i=0;i<str.length;i++){
//        if(str.substring(i,i+2)=="is"){
//            counter1++;
//        }
//        if(str.substring(i,i+3)=="not"){
//            counter2++;
//        }
//    }
//    
//    if(counter1==counter2){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//
//equalIsNot("This is not");
//equalIsNot("This is notnot");
//equalIsNot("noisxxnotyynotxisi");


/*5
Task
A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.


getSandwich("breadjambread") → "jam"
getSandwich("xxbreadjambreadyy") → "jam"
getSandwich("xxbreadyy") → ""




function getSandwich(str){
    var iFirst = str.indexOf("bread");
    var iLast  = str.lastIndexOf("bread");
	if(iFirst != -1 && iLast != -1 && iFirst != iLast){
		console.log(str.substring(iFirst+5, iLast));
    }else{
	     console.log("");
    }
}

getSandwich("breadjambread");
getSandwich("xxbreadjambreadyy");
getSandwich("xxbreadyy");

*/

/*6
Task
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.


endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true


function endOther(str1,str2){
    var str1Len = str1.length;
	var str2Len = str2.length;
	var end=0;
    var temp=0;
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	if(str1Len >= str2Len)
	{
		end = str1.substring(str1Len - str2Len);
		temp = str2;
	}
	else
	{
		end = str2.substring(str2Len - str1Len);
		temp = str1;
	}
	
    if(end==temp){
        console.log("true");
    }else{
        console.log("false");
    }
}

endOther("Hiabc", "abc");
endOther("AbC", "HiaBc");
endOther("abc", "abXabc");
*/

/*7
Task
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.


seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"


function seeColor(str){
    if(str.search("red")==0){
        console.log("red");
    }else if(str.search("blue")){
        console.log("blue");
    }else{
        console.log("");
    }
}

seeColor("redxx");
seeColor("xxred");
seeColor("blueTimes");

*/
