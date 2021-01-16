class Player{
    constructor(){
    this.name=null;
    this.index=null;
    this.distance=0;
}
getPlayerCount(){
    var playerCountref=database.ref("playerCount");
     playerCountref.on("value",function(data){
        playerCount=data.val();
    })
}
updatePlayerCount(Count){
database.ref("/").update({
    playerCount:Count
});
}
update(){
var playerindex="players/player" +this.index;
database.ref(playerindex).set({
    name:this.name,
    distance:this.distance
});
}
static getPlayerinfo(){
    var playerinforef=database.ref("players");
    playerinforef.on((data)=>{
    playerinfo=data.val;
    })
    }
}
