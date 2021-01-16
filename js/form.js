class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("save");
        this.greeting=createElement("h3");

     }
     display(){
         var title=createElement("h2");
         title.html("Car Racing Game");
         title.position(displayWidth/2-70,0);
        this.input.position(displayWidth/2-70,displayHeight/2-250);
        this. button.position(displayWidth/2,displayHeight/2-200);
         this.button.mousePressed(()=>{
             this.input.hide();
           this. button.hide();
             player.name=this.input.value();
            player.update();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.updatePlayerCount(playerCount);
            this.greeting.html("hello!" +player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/2-40);
         })

     }
     hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();    
     }
}
