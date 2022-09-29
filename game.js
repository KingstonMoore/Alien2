class Game{
    constructor(){

    }
    getState(){
        db.ref("gamestate").on("value", function(data){
            gamestate = data.val()
        })
    }

    updateState(num){
        db.ref("/").update({
            gamestate: num
        })
    }

    start(){
        player = new Player()
        playercount = player.getCount()
        form = new Form()
        form.display()
        p1 = createSprite(150, 500)
        p2 = createSprite(650, 500)
        p1.addImage(alienImg)
        p2.addImage(alienImg)
        p1.scale = 0.2
        p2.scale = 0.2
        p2.mirrorX(-1)
    }

    play(){
        form.greeting.hide()
        Player.getPlayersInfo()
        if (p1info !== undefined &&p2info !== undefined ) {
            var index = 0
            for (var i in players) {
                index = index+1
              p1.x = p1info.posx  
              p1.y = p1info.posy
              p2.x = p2info.posx  
              p2.y = p2info.posy
              if(index == 1){
                if (keyIsDown(UP_ARROW)) {
                    p1.y += 5;
                    player.updatep2(p1.y);
                  }
                  if (keyIsDown(DOWN_ARROW)) {
                    p1.y -= 5;
                    player.updatep2(p1.y);
                  }
              }
              if(index== 2){
                if (keyIsDown(UP_ARROW)) {
                    p2.y += 5;
                    player.updatep2(p2.y);
                  }

                  if (keyIsDown(DOWN_ARROW)) {
                    p2.y -= 5;
                    player.updatep2(p2.y);
                  }
              }
        }
    }
        drawSprites()
    }
}