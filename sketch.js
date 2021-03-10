var balloon, balloon1, background1;
var database, position;

function preload(){
background1.loadImage("pro-C35-images/Hot Air Ballon-01.png");
}

function setup() {
  createCanvas(600,600);
  createSprite(400, 200, 50, 50);
  balloon = createSprite(250,250,10,10);
  balloon.addImage
  balloonPosition.on("value",readPosition, showError);
}

function draw(){
  background("background1");
  if(position!=null){
  if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
  }
  drawSprites();
}
}

function writePosition(x,y){
  database.ref("balloon/position").set({
      "x": position.x + x,
      "y": position.y + y
  })
}

function readPosition(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}