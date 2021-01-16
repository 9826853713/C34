var database;
var game,player,form;
var gameState=0,playerCount=0;
var plaerinfo;
var car1,car2,car3,car4,cararrey;

function setup(){
    createCanvas(displayWidth-50,displayHeight-100);
    database=firebase.database();game=new Game();
    game.getgameState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
       game.updategameState(1); 
    }
    if(gameState===1){
      game.play();  
    }
    drawSprites();
}