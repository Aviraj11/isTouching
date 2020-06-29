var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(100,250, 130, 50);
  fixedRect = createSprite(300,250,50,50);

  movingRect1 = createSprite(100,100, 130, 50);
  fixedRect2 = createSprite(100,300,50,50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  
  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;

  movingRect1.velocityY = 5;
  fixedRect2.velocityY = -5;
}

function draw() {
  background(0);  
  
  bounceOff(movingRect,fixedRect);
  bounceOff(movingRect1,fixedRect2);

 

  drawSprites();
}





