class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      // playerCount = playerCountRef.val();
      player.getCount();
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined) {
      var displayPosition = 130;
      for(var plr in allPlayers) {
        if(plr === "player" + playerIndex) {
          fill("red");
        }
        else {
          fill("black");
        }
        displayPosition += 20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
      }
    }
  }

}
