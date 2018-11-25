function Salary(firstName,lastName,gender,age,studyingHours){
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender="Male";
    this.age=age;
    this.studyingHours=studyingHours;
    
    this.averageHoursCalculate=function(){
        var sum=0;
        for(var i=0;i<this.studyingHours.length;i++){
            sum=sum+this.studyingHours[i];
        }
        var average=sum/this.studyingHours.length;
        
        return average;

        
    }
    
    this.salaryCalculate=function(baseSalary){
        
           
            if(this.averageHoursCalculate()>5 && this.averageHoursCalculate()<=7){
               return baseSalary=" salary is $"+ Math.floor(baseSalary*1.1);
            }else if(this.averageHoursCalculate()>7 && this.averageHoursCalculate()<=9){
               return baseSalary=" salary is $"+ Math.floor(baseSalary*1.2);
            }else if(this.averageHoursCalculate()>9 && this.averageHoursCalculate()<=10){
               return baseSalary=" salary is $"+ Math.floor(baseSalary*1.5);
            }else{
                return " is not eligible to go to market.Study More";
            }
    }
}

var hours=[];
for(var i=0;i<5;i++){
    hours[i]=parseInt(prompt("Enter your study hours for week-" + (i+1) + " between 0-10"));
}
var p1=new Salary("mike","smith","male",30,hours);
var x=p1.salaryCalculate(100000);
console.log(p1.firstName + x)

    



 





