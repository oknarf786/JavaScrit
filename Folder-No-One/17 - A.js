var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."

//1) Display how many sentences in the string.
var myArray=strVar.split(".");
console.log(myArray.length);

//2) Display how many words in the string.
var myArray2=strVar.split(" ");
console.log(myArray2.length);

//3) Display todays date.
var myArray=strVar.split("Today is ");
var myArray2=myArray[1].split(".");
console.log(myArray2[0]);

//4) Pick today's weather from the string and convert to Celsius and display the result.
var index=(strVar.indexOf(" F"));
var temp=(strVar.substring(index-3,index+1)).trim();
var celcius = (temp-32)/1.8;
console.log(celcius);

//5) Separate Numbers and non numerical characters to 2 separate variables and display the result.

//Please use isNaN() = is not a number method to check if it is a number or not.
//console.log(isNaN(1)); //false 
//console.log(isNaN("apple"));//true
//
//Output:
//InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//1230811201870

var strNumber="";
var strChar="";
for(var i=0;i<strVar.length;i++){
    if(isNaN(strVar.charAt(i)) && strVar.charAt(i)!=" "){
        strNumber=strNumber+strVar.charAt(i);
    }else if(!isNaN(strVar.charAt(i)) && strVar.charAt(i)!=" "){
        strChar=strChar+strVar.charAt(i);
        
    }
}

//6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.
console.log(strVar.replace("2 to 3 hours","3 to 4 hours"));

//7) Display first sentence in Uppercase and other sentence in Lowercase.
myArray1=strVar.split(".");
console.log(myArray1[0].toUpperCase()+"."+myArray1[1].toLowerCase()+"."+myArray1[2].toLowerCase());

//8) Remove all spaces from the string and display the result.
var str="";
for(var i=0;i<strVar.length;i++){
    if(strVar.charAt(i)==" "){
        var x=strVar.charAt(i).replace(" ","");
        str=str+x;
      
    }else{
      str=str+strVar.charAt(i);
    }
}
console.log(str);

//9) Reverse all words order in the string and replace all "." and "," with ""

//Output:
//degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In 

var tempArray=strVar.split(" ");
for(var i=0;i<tempArray.length;i++){
    if(tempArray[i].includes(",")>=0 || tempArray[i].includes(".")>=0){
        tempArray[i]=tempArray[i].replace(",","");
        tempArray[i]=tempArray[i].replace(".","");
    }
}
var newString="";
for(var i=tempArray.length-1;i>=0;i--){
    newString=newString+tempArray[i]+" "
}
console.log(newString);