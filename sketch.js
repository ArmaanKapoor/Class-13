var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var random1;
var random2;
var cloud,cloud_image;
var obstacle;
var obstacle1image;
var obstacle2image;
var obstacle3image;
var obstacle4image;
var obstacle5image;
var obstacle6image;
var score=0;








function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloud_image= loadImage("cloud.png");
  
 obstacle1image=loadImage("obstacle1.png");
 obstacle2image=loadImage("obstacle2.png");
 obstacle3image=loadImage("obstacle3.png");
 obstacle4image=loadImage("obstacle4.png");
 obstacle5image=loadImage("obstacle5.png");
 obstacle6image=loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3;
  
  //creating invisible ground
  invisibleGround = createSprite(200,185,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(180);
  text("Score="+ score,500,50);
  score= score+Math.round(frameCount/80);
  //creating random numbers
  random1= Math.round(random(1,1000));
  console.log(random1);
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 156.5) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  spawnClouds()
  spawnObstacles()
  
  drawSprites();
  
}


function spawnClouds(){
  if (frameCount % 60===0){
    cloud=createSprite(600,100,40,10);
    cloud.velocityX=-3;
    cloud.addImage("cloud",cloud_image);
    cloud.scale=0.55;
    cloud.y=Math.round(random(10,60));
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;

    //assigning lifetime to the variable
   cloud.lifetime = 200;
  }

  
  
}
function spawnObstacles(){
  if(frameCount % 60===0){
  obstacle=createSprite(600,165,10,40);
  obstacle.velocityX=-6;
  random2= Math.round(random(1,6));
  switch(random2){
    case 1: obstacle.addImage("obstacle",obstacle1image);
    break;
    case 2: obstacle.addImage("obstacle",obstacle2image);
    break;
    case 3: obstacle.addImage("obstacle",obstacle3image);
    break;
    case 4: obstacle.addImage("obstacle",obstacle4image);
    break;
    case 5: obstacle.addImage("obstacle",obstacle5image);
    break;
    case 6: obstacle.addImage("obstacle",obstacle6image);
    break;
    default:break;

  }
  obstacle.scale=0.5;
  obstacle.lifetime=100;
  }

}