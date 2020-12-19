
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 survivalTime=0

}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,390,600,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  

}


function draw() {
background(255);
  text("Survival Time="+ survivalTime, 100,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground)
  
  
  
  foods();
  obstacles();
  drawSprites();
}

function foods (){
if (frameCount % 80 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
  FoodGroup.add(banana);
}
  
}
function obstacles(){
  if(frameCount % 300 === 0) {
     obstacle = createSprite(590,368,10,40);
    obstacle.addImage(obstacleImage)
   obstacle.velocityX = -3;
    obstacle.scale=0.1
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
    
  }

}



