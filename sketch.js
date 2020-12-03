var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "Yellow";
  gameObject1.velocityX=1;

  
  gameObject2 = createSprite(1000, 100, 50, 50);
  gameObject2.shapeColor = "yellow";
  gameObject2.velocityX=-1;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 collide(movingRect,fixedRect);
 bounceOff(gameObject1,gameObject2);
  drawSprites();
}
