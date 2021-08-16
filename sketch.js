function preload(){
  bg= loadImage("images/iss.png");
  sleep= loadAnimation("images/sleep.png");
brush= loadAnimation("images/brush.png");
gym= loadAnimation("images/gym21.png","images/gym22.png");
eat= loadAnimation("images/eat1.png","images/eat2.png");
drink= loadAnimation("images/drink1.png","images/drink1.png");
move= loadAnimation("images/move.png","images/move1.png");
bath= loadAnimation("images/bath1.png","images/bath2.png");
}


function setup() {
  createCanvas(400, 400);

  scene = createSprite(0,0,400,400);
  scene.addImage(bg);
  scene.scale = 2.5

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale= 0.1


}

function draw() {
  background(0);
  text("Instruction",100,60);
  text("Up Arrow = Brushing",100,50);
  text("Down Arrow = Gymming",100,40);
  text("Left Arrow = Eating",100,30);
  text("Right Arrow = Bathing",100,20);
  text("m key = Moving",100,10);
  textSize(20);

 if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronanut.velocityY = 0;
 }
 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronanut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathimg",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronanut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronanut.velocityY = 0;
}
if(keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 3;
  astronanut.velocityY = 4;
}




} 



