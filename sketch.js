var gameState=0
var playerCount
var form,game,player
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  
    
}