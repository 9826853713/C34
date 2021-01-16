class Game{
    constructor(){
    }
getgameState(){
    var gameStateref=database.ref("gameState");
    gameStateref.on("value",function(data){
        gameState=data.val();
    })
}
updategameState(state){
database.ref("/").update({
    gameState:state
});
}
start(){
if(gameState===0){
    form=new Form();
    form.display();
    player=new Player();
    player.getPlayerCount();
}
car1=createSprite(100,300);
car2=createSprite(300,300);
car3=createSprite(500,300);
car4=createSprite(700,300);
cararrey=[car1,car2,car3,car4];
}
play(){
form.hide();
textSize(30);
text("Game Start",120,100);
Player.getPlayerinfo();
if(playerinfo!==undefined){
    var x1=0;
    var y1;
    var index;
var displayposition=120;
for (var plr in playerinfo){
index=index+1;
x1=x1+200;
y1=displayHeight-playerinfo[plr].distance;
cararrey[index-1].x=x1;
cararrey[index-1].y=y1;
if(index==player.index){
fill("red");  
cararrey[index-1].shapeColor="red";  
}
else{
fill("black");    
cararrey[index-1].shapeColor="black";
} 
displayposition=displayposition+20;
 textSize(20);
text(playerinfo[plr].name+"   ",120,displayposition);  
}
}
drawSprites();   
}
}