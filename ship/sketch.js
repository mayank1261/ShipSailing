var ship, ship_sailing;
var ground, groundImage;

 

function setup() {

  createCanvas(600,400)


 
  ship = createSprite(70,300,20,50);
  ship.addAnimation("sailing", ship_sailing);
  ship.scale = 0.2;
  
  ground = createSprite(600,180,400,20);
  ground.addImage("ground",groundImage);
  ground.velocityX = -4;
  
 
}

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage = loadImage("sea.png");

}

function draw() {
  background(220);
  if(ground.x<400){
    ground.x = ground.width /2;
  }
  drawSprites();
  ship_sailingdepth=ship_sailing.depth;
  ship.depth=ship.depth+1;


 }
  



  




 
