var gamestate,playercount,game,player, form, p1, p2
var p1info,p2info,p,players

function preload(){
  alienImg = loadImage("alien.png")
}
function setup() {
  createCanvas(800,600);
  db = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background("black");  
  if (playercount === 2){
    game.updateState(1)
  }
  if (gamestate===1){
    game.play()
  }
}
