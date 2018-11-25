
// v = vegetable
// pv = price of vegi
// f = fruits
// pf = price of fruits
var v1,v2,v3,v4,v5,pv1,pv2,pv3,pv4,pv5,f1,f2,f3,f4,f5,pf1,pf2,pf3,pf4,pf5,mainProduct,vegiProduct,amountV,totalV,total,askAgain;

//Vegetables
v1="Cucumber";
v2="Tomatoes";    
v3="Onion";          
v4="Pepper";        
v5="Carrot";
//price of vegies

pv1=2.5;
pv2=3;
pv3=1.5;
pv4=2;
pv5=4;
//fruits
f1="Orange";        
f2="Banana";        
f3="WaterMelon";  
f4="Apple";              
f5="Cherry";
//price of fruits
pf1=3.5;
pf2=4;
pf3=7;
pf4=8;
pf5=4;

total=0;


mainLoop:   
do{
mainProduct = prompt("What type of product you want to buy ? \n1-Vegetables \n2-Fruits");

if(mainProduct==1){
    vegiLoop:
    do{
    vegiProduct=prompt("1-"+v1+" $"+pv1+"\n2-"+v2+" $"+pv2+"\n3-"+v3+" $"+pv3+"\n4-"+v4+" $"+pv4+"\n5-"+v5+" $"+pv5);
    if(vegiProduct==1){
       do{
        amountV=prompt("Please enter the amount of "+v1);
        if(amountV>0&&amountV<=100){
           amountV=parseInt(amountV);
           totalV=amountV*pv1;
            break vegiLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

        
    }
    else if(vegiProduct==2){
        
        do{
        amountV=prompt("Please enter the amount of "+v2);
        if(amountV>0&&amountV<=100){
           amountV=parseInt(amountV);
           totalV=amountV*pv2;
            break vegiLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

        
    }
    else if(vegiProduct==3){
               do{
        amountV=prompt("Please enter the amount of "+v3);
        if(amountV>0&&amountV<=100){
           amountV=parseInt(amountV);
           totalV=amountV*pv3;
            break vegiLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

    }
    else if(vegiProduct==4){
               do{
        amountV=prompt("Please enter the amount of "+v4);
        if(amountV>0&&amountV<=100){
           amountV=parseInt(amountV);
           totalV=amountV*pv4;
            break vegiLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

    }
    else if(vegiProduct==5){
               do{
        amountV=prompt("Please enter the amount of "+v5);
        if(amountV>0&&amountV<=100){
           amountV=parseInt(amountV);
           totalV=amountV*pv5;
            break vegiLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

    }
    else{
        alert("please enter valid option");
    }
    //vegiLoop
    }while(true);
    
    total+=totalV;
    alert("you cart total is: "+total);
 
    //asking again after showing the total  
    do{
    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
    if(askAgain==1){
        continue mainLoop;
    }else if(askAgain==2){
        break mainLoop;
    }else{
        alert("Please enter the valid option")
    }
    }while(true);
    
    
    
}else if(mainProduct==2){
    fruitLoop:
    do{
    fruitProduct=prompt("1-"+f1+" $"+pf1+"\n2-"+f2+" $"+pf2+"\n3-"+f3+" $"+pf3+"\n4-"+f4+" $"+pf4+"\n5-"+f5+" $"+pf5);
    if(fruitProduct==1){
       do{
        amountF=prompt("Please enter the amount of "+f1);
        if(amountF>0&&amountF<=100){
           amountF=parseInt(amountF);
           totalF=amountF*pf1;
            break fruitLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

        
    }
    else if(fruitProduct==2){
        
      do{
        amountF=prompt("Please enter the amount of "+f2);
        if(amountF>0&&amountF<=100){
           amountF=parseInt(amountF);
           totalF=amountF*pf2;
            break fruitLoop;  
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);
        
    }
    else if(fruitProduct==3){
       do{
        amountF=prompt("Please enter the amount of "+f3);
        if(amountF>0&&amountF<=100){
           amountF=parseInt(amountF);
           totalF=amountF*pf3;
            break fruitLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

    }
    else if(fruitProduct==4){
        do{
        amountF=prompt("Please enter the amount of "+f4);
        if(amountF>0&&amountF<=100){
           amountF=parseInt(amountF);
           totalF=amountF*pf4;
            break fruitLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);
    }
    else if(fruitProduct==5){
          do{
        amountF=prompt("Please enter the amount of "+f5);
        if(amountF>0&&amountF<=100){
           amountF=parseInt(amountF);
           totalF=amountF*pf5;
            break fruitLoop;   
        }else{
            alert("Please enter the amount between 1 to 100");
        }
        //amount loop
       }while(true);

    }
    else{
        alert("please enter valid option");
    }
    //fruit loop
    }while(true);
    
    total+=totalF;
    alert("you cart total is: "+total);
 
    //asking again after showing the total  
    do{
    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
    if(askAgain==1){
        continue mainLoop;
    }else if(askAgain==2){
        break mainLoop;
    }else{
        alert("Please enter the valid option")
    }
    }while(true);
    
}else{
    alert("please enter valid option");
    continue;
}

}while(true);



alert("Your cart total is:"+total+"\nThank you for shopping with us");


   
   
   
   
   
   