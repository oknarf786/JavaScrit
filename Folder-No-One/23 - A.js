//
//
//3
function Employee(fName,lName,birthYear){
    this.fName=fName;
    this.lName=lName;
    this.birthYear=birthYear;
    
    this.createEmployeeID=function(){
        return `${this.fName.charAt(0)}${this.lName.charAt(0)}${new Date().getFullYear()-this.birthYear}`
    }
    
}
//8
Employee.prototype.overtimeHoursCalculate=function(w1,w2,w3,w4){
    if((w1+w2+w3+w4)>160){
        return w1+w2+w3+w4-160;
    }else{
        return 0;
    }
};
//4
function Payroll(hours,insurance){
    
    this.hours=hours;
    this.insurance=insurance;
    //5
    this.calcSumHours=function(){
        var sum=0;
        for(let x of this.hours){
            sum=sum+x;
        }
        
        return sum;
    }
    //6
    this.calcErning=function(wage){
    if(this.insurance==true){
        return (this.calcSumHours() * wage) + 600;
    }else{
        return this.calcSumHours() * wage;
    }
    }
    
}

Payroll.prototype=Employee.prototype;

//1
let arr=[];
for(let i=0;i<4;i++){
    arr[i]=parseInt(prompt(`enter your week-${i+1} hours`));
}

var emp1=new Employee("mike","smith",1980);
let p1=new Payroll(arr,true);
//2
let wage=20;

//10
console.log(`Employee ID:${emp1.createEmployeeID()}'s overtime hours for this month is:${emp1.overtimeHoursCalculate(...arr)} and earning is $${p1.calcErning(wage) + (wage*1.5* p1.overtimeHoursCalculate(...arr))}`);





































