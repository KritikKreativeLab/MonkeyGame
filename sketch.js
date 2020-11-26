
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0;

function preload(){

  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {

createCanvas(600, 400);
  
monkey=createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400, 350, 900, 10);
ground.velocityX=-4;  
ground.x=ground.width/2;
console.log(ground.x);  

foodGroup = new Group();
obstacleGroup = new Group();
  
}


function draw() {
 background(255);
 stroke("white");
 textSize(20);
 fill("white");
  
 stroke("black");
 textSize(20);
 fill("black");
 text("Survival Time:" + survivalTime, 100, 50);
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
    //ground.velocityX = -(6 + 3*score/100);
  
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
 
  food();
  spawnObstacles();
 drawSprites();
  
}

function food(){
 if(frameCount%80===0){
   banana=createSprite(600, 100, 40, 10);
   banana.addImage(bananaImage);
   banana.y=Math.round(random(120,200));
   banana.scale=0.1;
   banana.velocityX=-3;
   banana.lifetime = 200;
   foodGroup.add(banana);  
 }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(300,325,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    obstacle.addImage(obstaceImage);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}