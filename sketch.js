var player;
var gun;
var bullet;
var sword;

function preload() {
  
}

function setup() {
  createCanvas(1000,600);
  
  player= createSprite(500,300,20,20);

}

function draw() {


 if(keyIsDown(LEFT_ARROW)) {
    player.x -= 13;
  }

 //player.velocityX= -3;
  
 

  drawSprites()
}