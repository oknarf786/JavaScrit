
//Multi-Dimensional Array

var arrayLength = 3;

var multiArray=Array(arrayLength);
//multiArray[0]=Array(arrayLength);
//multiArray[1]=Array(arrayLength);
//multiArray[2]=Array(arrayLength);

for(var i=0;i<multiArray.length;i++){
    multiArray[i]=Array(arrayLength);
}

//first
multiArray[0][0]="apple";
multiArray[0][1]="banana";
multiArray[0][2]="cherry";

//second
multiArray[1][0]=2;
multiArray[1][1]=20;
multiArray[1][2]=5;

//third
multiArray[2][0]=["test","again"];
multiArray[2][1]=["Java","Script"];
multiArray[2][2]=["read","books"];

//console.log(multiArray);
//console.log(multiArray[2]);
//console.log(multiArray[2][2][1]);

var multiArray=[
    
  ["apple","banana","cherry"],
  [2,20,5],
  [ ["test","again"] , ["Java","Script"] , ["read","books"] ]
    
];


for(var i=0;i<multiArray.length;i++){
    for(var j=0;j<multiArray[i].length;j++){
        console.log(multiArray[i][j]);
    }
}













