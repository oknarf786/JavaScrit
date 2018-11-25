

function Game(){
    this.level=0;
}

function Robot(name,year,owner){
    this.name=name;
    this.year=year;
    this.owner=owner;
}

Game.prototype.play=function(){
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
}

Game.prototype.unlock = function(){
    if(this.level==10){
        Robot.prototype.deployLaser=function(){
            console.log(this.name + " is blasting you with laser beams.")
        }
    }
}

var game=new Game();
var robby=new Robot("Robby",1956,"Morbius");
var rosie=new Robot("Rosie",1962,"Jetson");

while(game.level<10){
    game.play();
}

robby.deployLaser();
rosie.deployLaser();