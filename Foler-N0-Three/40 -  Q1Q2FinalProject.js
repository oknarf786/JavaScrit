//Project - 1 and Project-2

var continued=true
var total=0;

while(continued)
	  {
		  

var whichkind=prompt(" 1.Vegetables \n 2.Fruits")

	while(whichkind>2)
	{  alert("Please Numbers are Between 1-2"); 
 whichkind=prompt(" 1.Vegetables \n 2.Fruits");
	}
	

	if(whichkind==1) 
{
	
	var vegetable=prompt("1-Cucumber\n2-Tomatoes\n3-Onion\n4-Pepper\n5-Carrot");
	
	while(vegetable>5)
	{  alert("Please Numbers are Between 1-5"); 
 vegetable=prompt("1-Cucumber\n2-Tomatoes\n3-Onion\n4-Pepper\n5-Carrot");
	}
	
	var amountv=prompt("How many u want to buy");
	
	if(vegetable==1)
	total=total+parseInt(amountv)*2.5;
    
else if (vegetable==2)
	total=total+parseInt(amountv)*3;
    
else if (vegetable==3)
	total=total+parseInt(amountv)*1.5;
   
else if (vegetable==4)
	total=total+parseInt(amountv)*2;
    
else if (vegetable==5){
	total=total+parseInt(amountv)*4;}
    
	
var choice=prompt("Do you want to shop more? 1 Yes/ 2 No");
if (choice==2)  {continued=false;}

	}
//-----------------------------------------------------------------------
          
else if (whichkind==2) 
{
	var fruit=prompt("1-Orange\n2-Banana\n3-WaterMelon\n4-Apple\n5-Cherry");
	
	while(fruit>5)
	{  alert("Please Numbers are Between 1-5"); 
 fruit=prompt("1-Cucumber\n2-Tomatoes\n3-Onion\n4-Pepper\n5-Carrot");
	}
   var amountf=prompt("How many");
	
if(fruit==1)
	total=total+parseInt(amountf)*3.5;
    
else if (fruit==2)
	total=total+parseInt(amountf)*4;
    
else if (fruit==3)
	total=total+parseInt(amountf)*7;
    
else if (fruit==4)
	total=total+parseInt(amountf)*8;
    
else if (fruit==5){
	total=total+parseInt(amountf)*4;}
    
	
	

choice=prompt("Do you want to shop more? 1 Yes/ 2 No");
if (choice==2) {continued=false;}
}
}
console.log("Your Total is: "+total);



//-----------------------------------------------------------------------





function questionC(numberfor, question, answers, correctAnswer )
{
	this.numberfor=numberfor;
	this.question=question;
	this.answers=answers;
	this.correctAnswer=correctAnswer;
	
	//(this.question).push(question);
	//(this.answers).push(answers);
	//(this.correctAnswer).push(correctAnswer);
	
	this.sec=function()
	{ 
	
	 { console.log(this.question);
	   console.log(this.answers);
	 }
	
	
	}
	
}

var q1=new questionC(1,"Is JavaScript the coolest programming language in the world?",["1-Yes","2-No"], 1 );
var q2=new questionC(2,"-What is the name of this course's teacher?",["1-Mike","2-John","3-Ozzy"], 2 );
var q3=new questionC(3,"What does best describe coding?",["1-Boring","2-Fun","3-Tedious"], 3 );

var allquestions=[q1,q2,q3];

while(true)
	{
		var sa=(Math.random()*2+1).toPrecision(1);
console.log(sa);
   if (sa==1)
 {  allquestions[0].sec();
  var ans=prompt("What is the correct answer?");
  if (ans==q1.correctAnswer)
	  console.log("Correct. Congratulations");
  else
	    console.log("OOppps. Try again later");
}
			  
else if (sa==2)
	
 {  allquestions[1].sec();
  var ans=prompt("What is the correct answer?");
  if (ans==q1.correctAnswer)
	  console.log("Correct. Congratulations");
  else
	    console.log("OOppps. Try again later");
}
		
else if (sa==3)
	
 {  allquestions[2].sec();
  var ans=prompt("What is the correct answer?");
  if (ans==q1.correctAnswer)
	  console.log("Correct. Congratulations");
  else
	    console.log("OOppps. Try again later");
}


		
	}

