var car1,car2,fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car1 = createSprite(100,100,50,50)
  car1.shapeColor = "green"
  car1.velocityX = 5
  car2 = createSprite(600,100,50,50)
  car2.velocityX = -5
  car2.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
 //car1.x = World.mouseX;
 //car1.y = World.mouseY;
if(isTouching(car2,car1)){
  car1.shapeColor = "blue";
  car2.shapeColor = "blue";

}
else {
  car1.shapeColor = "green";
  car2.shapeColor = "green";
}
  bounceOff(car1,car2)
  drawSprites();
}
